import { StatusBar } from 'expo-status-bar';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator, Alert, Image, ImageSourcePropType, Keyboard, KeyboardAvoidingView, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View,
} from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { clearSessionDraft, getDashboardStats, getFavoriteQuestions, getFilteredQuestions, getLanguageQuestions, getLibraryStats, getQuizQuestions, getRandomQuestionByDifficulty, getRandomTopicQuestionsByDifficulty, getReviewQuestions, getSessionDraft, getTaggedQuestions, getTopics, initializeDatabase, saveSession, saveSessionDraft, searchQuestions, toggleFavorite } from './src/database';
import { CefrLevel, DashboardStats, Difficulty, GeoPoint, LanguageCode, LanguageSessionFilters, LanguageSkill, LibraryStats, QuizQuestion, SessionAnswer, SessionDraft, SessionFilters, Topic } from './src/domain';
import { createAndShareQuizPack, pickAndImportQuizPack } from './src/quizPack';
import { gradeMapPoint, gradeMultiText, isFreeTextCorrect } from './src/quizEngine';

type Screen = 'home' | 'configure' | 'languages' | 'quiz' | 'result' | 'library' | 'search';
const emptyStats: DashboardStats = { answered: 0, correct: 0, sessions: 0, streakDays: 0, dueReview: 0 };
const QUESTION_IMAGES: Record<string, ImageSourcePropType> = {
  'mona-lisa': require('./assets/questions/mona-lisa.jpg'),
  'the-thinker': require('./assets/questions/the-thinker.jpg'),
};
const palette = {
  bg: '#0A0E0D',
  surface: '#121815',
  surface2: '#151B18',
  line: '#26312C',
  text: '#F3F7F5',
  muted: '#8A9791',
  dim: '#66736D',
  primary: '#68D7A2',
  blue: '#75A7FF',
  gold: '#E6B759',
  rose: '#D982AD',
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [screen, setScreen] = useState<Screen>('home');
  const [stats, setStats] = useState(emptyStats);
  const [availableTopics, setAvailableTopics] = useState<Topic[]>([]);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [freeText, setFreeText] = useState('');
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [mapGuess, setMapGuess] = useState<GeoPoint | null>(null);
  const [answers, setAnswers] = useState<SessionAnswer[]>([]);
  const [initialTopicIds, setInitialTopicIds] = useState<string[]>([]);
  const [draft, setDraft] = useState<SessionDraft | null>(null);
  const [infiniteDifficulty, setInfiniteDifficulty] = useState<Difficulty | null>(null);

  const refreshStats = async () => setStats(await getDashboardStats());
  const refreshTopics = async () => setAvailableTopics(await getTopics());

  useEffect(() => {
    initializeDatabase().then(async () => {
      await Promise.all([refreshStats(), refreshTopics()]);
      setDraft(await getSessionDraft());
      setReady(true);
    });
  }, []);

  async function persistDraft(nextTopic: Topic, nextQuiz: QuizQuestion[], nextIndex: number, nextAnswers: SessionAnswer[], nextInfiniteDifficulty = infiniteDifficulty) {
    setDraft(await saveSessionDraft({
      topic: nextTopic,
      questions: nextQuiz,
      questionIndex: nextIndex,
      answers: nextAnswers,
      mode: nextInfiniteDifficulty ? { kind: 'infinite', difficulty: nextInfiniteDifficulty } : undefined,
    }));
  }

  async function startQuiz(nextTopic: Topic) {
    if (nextTopic.id === 'language') {
      setScreen('languages');
      return;
    }
    setInitialTopicIds([nextTopic.id]);
    setScreen('configure');
  }

  async function launchLanguageSession(filters: LanguageSessionFilters) {
    const nextQuiz = await getLanguageQuestions(filters);
    if (!nextQuiz.length) {
      Alert.alert('Parcours à enrichir', 'Aucune question ne correspond encore à cette combinaison. Ajoute une compétence ou change de niveau.');
      return;
    }
    const names: Record<LanguageCode, string> = { es: 'Espagnol', de: 'Allemand', it: 'Italien' };
    prepareSession(
      { id: `language-${filters.language}-${filters.level}`, title: `${names[filters.language]} · ${filters.level}`, subtitle: 'Parcours linguistique ciblé', icon: filters.language.toUpperCase(), color: '#5FB8C9' },
      nextQuiz,
    );
  }

  function configureMixedSession() {
    setInitialTopicIds([]);
    setScreen('configure');
  }

  async function launchConfiguredSession(filters: SessionFilters) {
    const nextQuiz = await getFilteredQuestions(filters);
    if (!nextQuiz.length) {
      Alert.alert('Aucune question', 'Élargis les thèmes ou les niveaux de difficulté.');
      return;
    }
    const selectedTopics = availableTopics.filter((item) => filters.topicIds.includes(item.id));
    const sessionTopic: Topic = selectedTopics.length === 1
      ? selectedTopics[0]
      : { id: 'mixed', title: selectedTopics.length ? 'Session mixte' : 'Tous les thèmes', subtitle: 'Sélection personnalisée', icon: 'Mix', color: '#68D7A2' };
    prepareSession(sessionTopic, nextQuiz);
  }

  async function launchEnduranceSession(difficulty: Difficulty) {
    const picked = await getRandomTopicQuestionsByDifficulty(difficulty, 10);
    if (!picked?.questions.length) {
      Alert.alert('Rien à lancer', 'Aucun thème ne contient encore ce niveau de difficulté.');
      return;
    }
    prepareSession(
      { ...picked.topic, title: `Endurance · ${picked.topic.title}`, subtitle: `Thème tiré au hasard · niveau ${difficulty}` },
      picked.questions,
    );
  }

  async function launchInfiniteSession(difficulty: Difficulty) {
    const firstQuestion = await getRandomQuestionByDifficulty(difficulty);
    if (!firstQuestion) {
      Alert.alert('Rien à lancer', 'Aucune question ne correspond encore à cette difficulté.');
      return;
    }
    prepareSession(
      { id: `infinite-${difficulty}`, title: `Infini · Niveau ${difficulty}`, subtitle: 'Thèmes tirés au hasard', icon: '∞', color: '#8FB3FF' },
      [firstQuestion],
      difficulty,
    );
  }

  function prepareSession(nextTopic: Topic, nextQuiz: QuizQuestion[], nextInfiniteDifficulty: Difficulty | null = null) {
    setTopic(nextTopic);
    setQuiz(nextQuiz);
    setInfiniteDifficulty(nextInfiniteDifficulty);
    setQuestionIndex(0);
    setSelected(null);
    setFreeText('');
    setFieldValues({});
    setMapGuess(null);
    setAnswers([]);
    void persistDraft(nextTopic, nextQuiz, 0, [], nextInfiniteDifficulty);
    setScreen('quiz');
  }

  function resumeSession() {
    if (!draft) return;
    const currentAnswer = draft.answers.findLast((answer) => answer.questionId === draft.questions[draft.questionIndex]?.id);
    setTopic(draft.topic);
    setInfiniteDifficulty(draft.mode?.kind === 'infinite' ? draft.mode.difficulty : null);
    setQuiz(draft.questions);
    setQuestionIndex(draft.questionIndex);
    setAnswers(draft.answers);
    setSelected(currentAnswer?.selectedIndex ?? null);
    setFreeText(currentAnswer?.selectedIndex === -1 ? currentAnswer.selectedText ?? '' : '');
    if (currentAnswer?.selectedIndex === -2 && currentAnswer.selectedText) {
      try { setFieldValues(JSON.parse(currentAnswer.selectedText)); } catch { setFieldValues({}); }
    } else setFieldValues({});
    if (currentAnswer?.selectedIndex === -3 && currentAnswer.selectedText) {
      try { setMapGuess(JSON.parse(currentAnswer.selectedText)); } catch { setMapGuess(null); }
    } else setMapGuess(null);
    setScreen('quiz');
  }

  async function startCollection(kind: 'review' | 'favorites' | 'maps') {
    const nextQuiz = kind === 'review' ? await getReviewQuestions(10) : kind === 'maps' ? await getTaggedQuestions('map-point', 10) : await getFavoriteQuestions(10);
    if (!nextQuiz.length) {
      Alert.alert(kind === 'review' ? 'Rien à réviser' : kind === 'maps' ? 'Aucune carte' : 'Aucun favori', kind === 'review' ? 'Les questions ratées apparaîtront ici.' : kind === 'maps' ? 'Les questions carte apparaîtront ici.' : 'Ajoute une question avec l’étoile pendant un quiz.');
      return;
    }
    prepareSession(
      { id: kind, title: kind === 'review' ? 'Révision' : kind === 'maps' ? 'Cartes' : 'Favoris', subtitle: 'Session personnelle', icon: kind === 'review' ? 'R' : kind === 'maps' ? 'M' : '★', color: kind === 'maps' ? '#3F8F72' : '#68D7A2' },
      nextQuiz,
    );
  }

  function selectAnswer(index: number) {
    if (selected !== null) return;
    setSelected(index);
    const isCorrect = index === quiz[questionIndex].answerIndex;
    const nextAnswers = [...answers, { questionId: quiz[questionIndex].id, selectedIndex: index, correct: isCorrect }];
    setAnswers(nextAnswers);
    if (topic) void persistDraft(topic, quiz, questionIndex, nextAnswers);
    Haptics.notificationAsync(isCorrect ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning);
  }

  function submitFreeText() {
    if (selected !== null || !freeText.trim()) return;
    const isCorrect = isFreeTextCorrect(quiz[questionIndex], freeText);
    setSelected(-1);
    Keyboard.dismiss();
    const nextAnswers = [...answers, { questionId: quiz[questionIndex].id, selectedIndex: -1, selectedText: freeText.trim(), correct: isCorrect }];
    setAnswers(nextAnswers);
    if (topic) void persistDraft(topic, quiz, questionIndex, nextAnswers);
    Haptics.notificationAsync(isCorrect ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning);
  }

  function submitMultiText() {
    if (selected !== null) return;
    const grade = gradeMultiText(quiz[questionIndex], fieldValues);
    setSelected(-2);
    Keyboard.dismiss();
    const nextAnswers = [...answers, { questionId: quiz[questionIndex].id, selectedIndex: -2, selectedText: JSON.stringify(fieldValues), correct: grade.correct, credit: grade.credit }];
    setAnswers(nextAnswers);
    if (topic) void persistDraft(topic, quiz, questionIndex, nextAnswers);
    Haptics.notificationAsync(grade.credit === 1 ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning);
  }

  function submitMapPoint() {
    if (selected !== null || !mapGuess) return;
    const grade = gradeMapPoint(quiz[questionIndex], mapGuess);
    setSelected(-3);
    const nextAnswers = [...answers, { questionId: quiz[questionIndex].id, selectedIndex: -3, selectedText: JSON.stringify(mapGuess), correct: grade.correct, credit: grade.credit }];
    setAnswers(nextAnswers);
    if (topic) void persistDraft(topic, quiz, questionIndex, nextAnswers);
    Haptics.notificationAsync(grade.credit === 1 ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning);
  }

  async function handleToggleFavorite() {
    const question = quiz[questionIndex];
    const favorite = await toggleFavorite(question.id);
    setQuiz((current) => current.map((item) => item.id === question.id ? { ...item, favorite } : item));
    Haptics.selectionAsync();
  }

  function setAnswerConfidence(confidence: 1 | 2 | 3) {
    const questionId = quiz[questionIndex]?.id;
    const nextAnswers = answers.map((answer, index) => index === answers.length - 1 && answer.questionId === questionId ? { ...answer, confidence } : answer);
    setAnswers(nextAnswers);
    if (topic) void persistDraft(topic, quiz, questionIndex, nextAnswers);
    Haptics.selectionAsync();
  }

  async function continueQuiz() {
    if (questionIndex < quiz.length - 1) {
      const nextIndex = questionIndex + 1;
      setQuestionIndex(nextIndex);
      setSelected(null);
      setFreeText('');
      setFieldValues({});
      setMapGuess(null);
      if (topic) void persistDraft(topic, quiz, nextIndex, answers);
      return;
    }
    if (infiniteDifficulty) {
      const nextQuestion = await getRandomQuestionByDifficulty(infiniteDifficulty, quiz.map((question) => question.id));
      if (!nextQuestion) {
        Alert.alert('Banque vide', 'Impossible de trouver une nouvelle question pour ce niveau.');
        return;
      }
      const nextQuiz = [...quiz, nextQuestion];
      const nextIndex = questionIndex + 1;
      setQuiz(nextQuiz);
      setQuestionIndex(nextIndex);
      setSelected(null);
      setFreeText('');
      setFieldValues({});
      setMapGuess(null);
      if (topic) void persistDraft(topic, nextQuiz, nextIndex, answers);
      return;
    }
    if (topic) await saveSession(topic.id, answers);
    await clearSessionDraft();
    setDraft(null);
    await refreshStats();
    setScreen('result');
  }

  async function closeQuiz() {
    if (infiniteDifficulty) {
      if (topic && answers.length) await saveSession(topic.id, answers);
      await clearSessionDraft();
      setDraft(null);
      await refreshStats();
    }
    setInfiniteDifficulty(null);
    setScreen('home');
  }

  if (!ready) {
    return <View style={styles.loading}><ActivityIndicator color="#2F6B55" size="large" /><Text style={styles.loadingText}>Préparation de ta bibliothèque…</Text></View>;
  }

  return (
    <View style={styles.safe}>
      <StatusBar style="light" />
      {screen === 'home' && <Home stats={stats} topics={availableTopics} draft={draft} onResume={resumeSession} onStart={startQuiz} onLanguages={() => setScreen('languages')} onCompose={configureMixedSession} onEndurance={launchEnduranceSession} onInfinite={launchInfiniteSession} onReview={() => startCollection('review')} onFavorites={() => startCollection('favorites')} onMaps={() => startCollection('maps')} onSearch={() => setScreen('search')} onLibrary={() => setScreen('library')} />}
      {screen === 'configure' && <SessionConfigurator topics={availableTopics} initialTopicIds={initialTopicIds} onClose={() => setScreen('home')} onStart={launchConfiguredSession} />}
      {screen === 'languages' && <LanguageHub onClose={() => setScreen('home')} onStart={launchLanguageSession} />}
      {screen === 'quiz' && topic && quiz.length > 0 && (
        <Quiz
          topic={topic} questions={quiz} index={questionIndex} selected={selected} freeText={freeText}
          fieldValues={fieldValues} answerCredit={answers.at(-1)?.credit ?? (answers.at(-1)?.correct ? 1 : 0)} onFieldChange={(id, value) => setFieldValues((current) => ({ ...current, [id]: value }))} onSubmitMultiText={submitMultiText}
          mapGuess={mapGuess} onMapGuess={setMapGuess} onSubmitMapPoint={submitMapPoint}
          answerCorrect={answers.at(-1)?.correct ?? false} onFreeTextChange={setFreeText} onSubmitFreeText={submitFreeText}
          confidence={answers.at(-1)?.questionId === quiz[questionIndex].id ? answers.at(-1)?.confidence : undefined} onConfidence={setAnswerConfidence}
          infiniteDifficulty={infiniteDifficulty}
          onSelect={selectAnswer} onToggleFavorite={handleToggleFavorite} onContinue={continueQuiz} onClose={closeQuiz}
        />
      )}
      {screen === 'result' && topic && (
        <Result topic={topic} answers={answers} onAgain={() => prepareSession(topic, quiz)} onHome={() => setScreen('home')} />
      )}
      {screen === 'library' && <Library onClose={async () => { await refreshTopics(); setScreen('home'); }} />}
      {screen === 'search' && <Search onClose={() => setScreen('home')} onStart={(questions) => prepareSession({ id: 'search', title: 'Recherche', subtitle: 'Sélection personnelle', icon: '?', color: '#68D7A2' }, questions)} />}
    </View>
  );
}

function getHomeRecommendation(stats: DashboardStats, draft: SessionDraft | null): { action: 'resume' | 'review' | 'compose' | 'endurance'; title: string; text: string; label: string; color: string } {
  if (draft) {
    const infiniteText = draft.mode?.kind === 'infinite' ? `Mode infini niveau ${draft.mode.difficulty}, ${draft.answers.length} reponses deja posees.` : `Question ${draft.questionIndex + 1} sur ${draft.questions.length}.`;
    return { action: 'resume', title: 'Reprendre sans friction', text: infiniteText, label: 'Reprendre', color: draft.topic.color };
  }
  if (stats.dueReview > 0) {
    return { action: 'review', title: 'Consolider ce qui revient', text: `${stats.dueReview} question${stats.dueReview > 1 ? 's' : ''} a revoir maintenant, sans pression.`, label: 'Reviser', color: '#D982AD' };
  }
  if (stats.answered < 20) {
    return { action: 'compose', title: 'Construire une base solide', text: 'Commence par une session courte avec les themes et niveaux que tu veux tester.', label: 'Composer', color: '#68D7A2' };
  }
  return { action: 'endurance', title: 'Varier sans choisir', text: 'Une session finie de 10 questions, difficulte moyenne, theme tire au hasard.', label: 'Lancer', color: '#8FB3FF' };
}

function Home({ stats, topics, draft, onResume, onStart, onLanguages, onCompose, onEndurance, onInfinite, onReview, onFavorites, onMaps, onSearch, onLibrary }: { stats: DashboardStats; topics: Topic[]; draft: SessionDraft | null; onResume: () => void; onStart: (topic: Topic) => void; onLanguages: () => void; onCompose: () => void; onEndurance: (difficulty: Difficulty) => void; onInfinite: (difficulty: Difficulty) => void; onReview: () => void; onFavorites: () => void; onMaps: () => void; onSearch: () => void; onLibrary: () => void }) {
  const accuracy = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;
  const recommendation = getHomeRecommendation(stats, draft);
  const runRecommendation = () => {
    if (recommendation.action === 'resume') onResume();
    else if (recommendation.action === 'review') onReview();
    else if (recommendation.action === 'compose') onCompose();
    else onEndurance(2);
  };
  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <View style={styles.brandRow}><Image source={require('./assets/kizz-logo-v2.png')} style={styles.logoImage} /><Text style={styles.brand}>Kizz</Text><Pressable onPress={onLibrary} style={styles.libraryShortcut}><Text style={styles.libraryShortcutText}>Banques</Text></Pressable></View>
      <View style={styles.dashboardHeader}><Text style={styles.dashboardTitle}>Tableau de bord</Text><Text style={styles.dashboardCaption}>Progression locale</Text></View>
      <View style={styles.kpiGrid}>
        <Kpi value={String(stats.sessions)} label="Sessions" accent="#68D7A2" />
        <Kpi value={String(stats.answered)} label="Réponses" accent="#75A7FF" />
        <Kpi value={`${accuracy}%`} label="Précision" accent="#E6B759" />
        <Kpi value={String(stats.dueReview)} label="À réviser" accent="#D982AD" />
      </View>

      {draft && <Pressable testID="resume-session" accessibilityRole="button" onPress={onResume} style={styles.resumeCard}><View style={styles.resumeProgress}><View style={[styles.resumeProgressFill, { width: `${Math.round(((draft.questionIndex + 1) / draft.questions.length) * 100)}%`, backgroundColor: draft.topic.color }]} /></View><Text style={styles.resumeEyebrow}>SESSION EN COURS</Text><View style={styles.resumeRow}><View><Text style={styles.resumeTitle}>{draft.topic.title}</Text><Text style={styles.resumeText}>Question {draft.questionIndex + 1} sur {draft.questions.length}</Text></View><Text style={[styles.resumeArrow, { color: draft.topic.color }]}>Reprendre →</Text></View></Pressable>}

      <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Choisis un mode</Text><Text style={styles.sectionHint}>à ton rythme</Text></View>
      <Pressable testID="recommended-action" accessibilityRole="button" onPress={runRecommendation} style={({ pressed }) => [styles.recommendCard, pressed && styles.pressed]}>
        <View style={[styles.recommendRail, { backgroundColor: recommendation.color }]} />
        <View style={{ flex: 1 }}>
          <Text style={styles.recommendEyebrow}>PROCHAINE ACTION UTILE</Text>
          <Text style={styles.recommendTitle}>{recommendation.title}</Text>
          <Text style={styles.recommendText}>{recommendation.text}</Text>
        </View>
        <Text style={[styles.recommendAction, { color: recommendation.color }]}>{recommendation.label}</Text>
      </Pressable>

      <View style={styles.modeStack}>
        <Pressable testID="compose-session" accessibilityRole="button" onPress={onCompose} style={({ pressed }) => [styles.composeCard, pressed && styles.pressed]}><View><Text style={styles.composeEyebrow}>SESSION SUR MESURE</Text><Text style={styles.composeTitle}>Mélanger thèmes et niveaux</Text><Text style={styles.modeText}>Le mode le plus complet pour composer ton entraînement.</Text></View><Text style={styles.composeArrow}>→</Text></Pressable>

        <View style={styles.enduranceCard}>
          <View style={{ flex: 1 }}><Text style={styles.composeEyebrow}>MODE ENDURANCE</Text><Text style={styles.composeTitle}>Thème aléatoire par difficulté</Text><Text style={styles.enduranceText}>Choisis le niveau, Kizz tire le thème et lance 10 questions.</Text></View>
          <View style={styles.enduranceButtons}>{([1, 2, 3] as Difficulty[]).map((difficulty) => <Pressable key={difficulty} testID={`endurance-${difficulty}`} accessibilityRole="button" onPress={() => onEndurance(difficulty)} style={({ pressed }) => [styles.enduranceButton, pressed && styles.pressed]}><Text style={styles.enduranceButtonText}>{difficulty}</Text><Text style={styles.enduranceDots}>{'●'.repeat(difficulty)}</Text></Pressable>)}</View>
        </View>

        <View style={styles.infiniteCard}>
          <View style={{ flex: 1 }}><Text style={styles.infiniteEyebrow}>MODE INFINI CALME</Text><Text style={styles.composeTitle}>Difficulté fixe, thèmes aléatoires</Text><Text style={styles.infiniteText}>Continue tant que tu veux. La croix sauvegarde les réponses et te ramène au calme.</Text></View>
          <View style={styles.enduranceButtons}>{([1, 2, 3] as Difficulty[]).map((difficulty) => <Pressable key={difficulty} testID={`infinite-${difficulty}`} accessibilityRole="button" onPress={() => onInfinite(difficulty)} style={({ pressed }) => [styles.infiniteButton, pressed && styles.pressed]}><Text style={styles.infiniteButtonText}>{difficulty}</Text><Text style={styles.infiniteDots}>∞</Text></Pressable>)}</View>
        </View>

        <Pressable testID="language-hub" accessibilityRole="button" onPress={onLanguages} style={({ pressed }) => [styles.languageHero, pressed && styles.pressed]}>
          <View style={styles.languageHeroIcon}><Text style={styles.languageHeroIconText}>Aa</Text></View>
          <View style={{ flex: 1 }}><Text style={styles.languageHeroEyebrow}>PARCOURS LANGUES</Text><Text style={styles.languageHeroTitle}>Espagnol · Allemand · Italien</Text><Text style={styles.languageHeroText}>Choisis ton niveau et une compétence précise.</Text></View>
          <Text style={styles.composeArrow}>→</Text>
        </Pressable>
      </View>

      <View style={styles.quickRow}>
        <Pressable testID="review-errors" accessibilityRole="button" onPress={onReview} style={styles.quickAction}><Text style={styles.quickIcon}>↻</Text><Text style={styles.quickText}>Mes erreurs</Text></Pressable>
        <Pressable testID="favorites" accessibilityRole="button" onPress={onFavorites} style={styles.quickAction}><Text style={styles.quickIcon}>☆</Text><Text style={styles.quickText}>Favoris</Text></Pressable>
        <Pressable testID="map-session" accessibilityRole="button" onPress={onMaps} style={styles.quickAction}><Text style={styles.quickIcon}>⌖</Text><Text style={styles.quickText}>Cartes</Text></Pressable>
        <Pressable testID="search" accessibilityRole="button" onPress={onSearch} style={styles.quickAction}><Text style={styles.quickIcon}>⌕</Text><Text style={styles.quickText}>Rechercher</Text></Pressable>
      </View>

      <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Choisis un thème</Text><Text style={styles.sectionHint}>{topics.filter((item) => item.id !== 'language').length} parcours</Text></View>
      <View style={styles.topicGrid}>
        {topics.filter((item) => item.id !== 'language').map((item) => (
          <Pressable key={item.id} testID={`topic-${item.id}`} accessibilityRole="button" accessibilityLabel={`Commencer le thème ${item.title}`} onPress={() => onStart(item)} style={({ pressed }) => [styles.topicCard, pressed && styles.pressed]}>
            <View style={[styles.topicIcon, { backgroundColor: `${item.color}1A` }]}><Text style={[styles.topicIconText, { color: item.color }]}>{item.icon}</Text></View>
            <Text style={styles.topicTitle}>{item.title}</Text><Text style={styles.topicSubtitle}>{item.subtitle}</Text>
            <Text style={[styles.go, { color: item.color }]}>Commencer  →</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.privacy}>Tes réponses restent sur ce téléphone. Aucun compte requis.</Text>
    </ScrollView>
  );
}

const LANGUAGE_OPTIONS: Array<{ code: LanguageCode; name: string; native: string }> = [
  { code: 'es', name: 'Espagnol', native: 'Español' },
  { code: 'de', name: 'Allemand', native: 'Deutsch' },
  { code: 'it', name: 'Italien', native: 'Italiano' },
];
const CEFR_LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];
const LANGUAGE_SKILLS: Array<{ id: LanguageSkill; title: string; detail: string }> = [
  { id: 'vocabulary', title: 'Vocabulaire fréquent', detail: 'Mots essentiels et fréquence d’usage' },
  { id: 'reading', title: 'Compréhension écrite', detail: 'Phrases, consignes et textes courts' },
  { id: 'writing', title: 'Expression écrite', detail: 'Produire la forme attendue sans QCM' },
  { id: 'culture', title: 'Culture', detail: 'Repères du monde hispanique, germanique ou italien' },
];

function LanguageHub({ onClose, onStart }: { onClose: () => void; onStart: (filters: LanguageSessionFilters) => void }) {
  const [language, setLanguage] = useState<LanguageCode>('es');
  const [level, setLevel] = useState<CefrLevel>('A1');
  const [skills, setSkills] = useState<LanguageSkill[]>(LANGUAGE_SKILLS.map((skill) => skill.id));
  const [limit, setLimit] = useState<5 | 10 | 20>(5);
  const toggleSkill = (skill: LanguageSkill) => setSkills((current) => current.includes(skill) ? current.filter((item) => item !== skill) : [...current, skill]);
  return (
    <ScrollView contentContainerStyle={styles.languagePage} showsVerticalScrollIndicator={false}>
      <View style={styles.libraryHeader}><Pressable onPress={onClose} hitSlop={16}><Text style={styles.back}>‹</Text></Pressable><Text style={styles.libraryTitle}>Parcours Langues</Text></View>
      <Text style={styles.configTitle}>Une langue à la fois.</Text><Text style={styles.configLead}>Un parcours ciblé, progressif et entièrement hors ligne.</Text>
      <Text style={styles.configSection}>LANGUE CIBLE</Text>
      <View style={styles.languageChoices}>{LANGUAGE_OPTIONS.map((item) => <Pressable key={item.code} testID={`language-${item.code}`} onPress={() => setLanguage(item.code)} style={[styles.languageChoice, language === item.code && styles.languageChoiceActive]}><Text style={[styles.languageChoiceName, language === item.code && styles.filterChipTextActive]}>{item.name}</Text><Text style={styles.languageChoiceNative}>{item.native}</Text></Pressable>)}</View>
      <Text style={styles.configSection}>NIVEAU CECRL</Text>
      <View style={styles.cefrRow}>{CEFR_LEVELS.map((item) => <Pressable key={item} testID={`cefr-${item}`} onPress={() => setLevel(item)} style={[styles.cefrButton, level === item && styles.filterChipActive]}><Text style={[styles.cefrText, level === item && styles.filterChipTextActive]}>{item}</Text></Pressable>)}</View>
      <Text style={styles.levelHelp}>{level === 'A1' ? 'Débutant : mots et phrases indispensables.' : level === 'A2' ? 'Élémentaire : situations courantes.' : level === 'B1' ? 'Intermédiaire : comprendre et raconter.' : level === 'B2' ? 'Avancé : nuances et argumentation.' : 'Autonome : idiomes, registre et culture fine.'}</Text>
      <Text style={styles.configSection}>COMPÉTENCES</Text>
      <View style={styles.skillList}>{LANGUAGE_SKILLS.map((item) => { const active = skills.includes(item.id); return <Pressable key={item.id} testID={`language-skill-${item.id}`} onPress={() => toggleSkill(item.id)} style={[styles.skillCard, active && styles.skillCardActive]}><View style={[styles.skillCheck, active && styles.skillCheckActive]}><Text style={styles.searchCheckText}>{active ? '✓' : ''}</Text></View><View style={{ flex: 1 }}><Text style={styles.skillTitle}>{item.title}</Text><Text style={styles.skillDetail}>{item.detail}</Text></View></Pressable>; })}</View>
      <Text style={styles.configSection}>LONGUEUR MAXIMALE</Text>
      <View style={styles.lengthRow}>{([5, 10, 20] as const).map((item) => <Pressable key={item} onPress={() => setLimit(item)} style={[styles.lengthButton, limit === item && styles.lengthButtonActive]}><Text style={[styles.lengthValue, limit === item && styles.lengthValueActive]}>{item}</Text><Text style={styles.lengthLabel}>questions</Text></Pressable>)}</View>
      <View style={styles.languageMethod}><Text style={styles.languageMethodTitle}>Méthode fréquence</Text><Text style={styles.languageMethodText}>Le vocabulaire est organisé par bandes de fréquence. Le socle commence par les mots les plus utiles avant d’élargir progressivement vers un lexique de 10 000 mots.</Text></View>
      <Pressable testID="launch-language-session" disabled={!skills.length} onPress={() => onStart({ language, level, skills, limit })} style={[styles.primaryButton, !skills.length && styles.disabled]}><Text style={styles.primaryButtonText}>Commencer en {LANGUAGE_OPTIONS.find((item) => item.code === language)?.name}</Text></Pressable>
    </ScrollView>
  );
}

function Search({ onClose, onStart }: { onClose: () => void; onStart: (questions: QuizQuestion[]) => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<QuizQuestion[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    if (query.trim().length < 2) { setResults([]); return; }
    const timer = setTimeout(() => searchQuestions(query).then(setResults), 180);
    return () => clearTimeout(timer);
  }, [query]);

  function toggle(questionId: string) {
    setSelectedIds((current) => current.includes(questionId) ? current.filter((id) => id !== questionId) : [...current, questionId]);
  }

  const selected = results.filter((question) => selectedIds.includes(question.id));
  return (
    <View style={styles.searchPage}>
      <View style={styles.libraryHeader}><Pressable onPress={onClose} hitSlop={16}><Text style={styles.back}>‹</Text></Pressable><Text style={styles.libraryTitle}>Créer une session</Text></View>
      <TextInput value={query} onChangeText={setQuery} autoFocus placeholder="Sujet, mot ou notion…" placeholderTextColor="#68746E" style={styles.searchInput} />
      <Text style={styles.searchHint}>{query.length < 2 ? 'Saisis au moins deux caractères.' : `${results.length} résultat(s) · touche pour sélectionner`}</Text>
      <ScrollView contentContainerStyle={styles.searchResults} keyboardShouldPersistTaps="handled">
        {results.map((question) => {
          const active = selectedIds.includes(question.id);
          return <Pressable key={question.id} onPress={() => toggle(question.id)} style={[styles.searchResult, active && styles.searchResultActive]}><View style={[styles.searchCheck, active && styles.searchCheckActive]}><Text style={styles.searchCheckText}>{active ? '✓' : ''}</Text></View><View style={{ flex: 1 }}><Text style={styles.searchQuestion}>{question.prompt}</Text><Text style={styles.searchTags}>{question.tags.join(' · ')}</Text></View></Pressable>;
        })}
      </ScrollView>
      <View style={styles.searchFooter}><Pressable disabled={!selected.length} onPress={() => onStart(selected)} style={[styles.primaryButton, !selected.length && styles.disabled]}><Text style={styles.primaryButtonText}>Lancer {selected.length || ''} question{selected.length > 1 ? 's' : ''}</Text></Pressable></View>
    </View>
  );
}

function Library({ onClose }: { onClose: () => void }) {
  const [stats, setStats] = useState<LibraryStats>({ topics: 0, questions: 0, imports: 0 });
  const [busy, setBusy] = useState(false);
  const [lastReport, setLastReport] = useState<string | null>(null);

  const refresh = async () => setStats(await getLibraryStats());
  useEffect(() => { refresh(); }, []);

  async function handleImport() {
    setBusy(true);
    try {
      const report = await pickAndImportQuizPack();
      if (report) {
        const summary = `${report.questionsAdded} ajoutée(s), ${report.questionsSkipped} doublon(s) ignoré(s)`;
        setLastReport(`${report.bankName}: ${summary}.`);
        await refresh();
        Alert.alert('Import terminé', summary);
      }
    } catch (error) {
      Alert.alert('Import impossible', error instanceof Error ? error.message : 'Le fichier n’a pas pu être importé.');
    } finally { setBusy(false); }
  }

  async function handleExport() {
    setBusy(true);
    try {
      await createAndShareQuizPack();
      setLastReport(`Export prêt: ${stats.questions} question(s).`);
    } catch (error) {
      Alert.alert('Export impossible', error instanceof Error ? error.message : 'Le fichier n’a pas pu être créé.');
    } finally { setBusy(false); }
  }

  return (
    <ScrollView contentContainerStyle={styles.libraryPage}>
      <View style={styles.libraryHeader}><Pressable onPress={onClose} hitSlop={16}><Text style={styles.back}>‹</Text></Pressable><Text style={styles.libraryTitle}>Mes banques</Text></View>
      <Text style={styles.libraryHero}>Ta bibliothèque,{`\n`}dans ta poche.</Text>
      <Text style={styles.lead}>Importe et exporte toutes tes questions sans compte ni serveur. Les doublons sont ignorés grâce à leur identifiant.</Text>
      <View style={styles.libraryStats}>
        <Stat value={String(stats.questions)} label="questions" /><View style={styles.divider} />
        <Stat value={String(stats.topics)} label="thèmes" /><View style={styles.divider} />
        <Stat value={String(stats.imports)} label="imports" />
      </View>
      <Pressable disabled={busy} onPress={handleImport} style={[styles.actionCard, busy && styles.disabled]}>
        <View style={[styles.actionIcon, { backgroundColor: '#E6F1EB' }]}><Text style={styles.actionIconText}>↓</Text></View>
        <View style={styles.actionCopy}><Text style={styles.actionTitle}>Importer une banque</Text><Text style={styles.actionText}>Choisir un fichier JSON Kizz sur le téléphone</Text></View><Text style={styles.actionArrow}>›</Text>
      </Pressable>
      <Pressable disabled={busy} onPress={handleExport} style={[styles.actionCard, busy && styles.disabled]}>
        <View style={[styles.actionIcon, { backgroundColor: '#EAEAF5' }]}><Text style={[styles.actionIconText, { color: '#5367C7' }]}>↑</Text></View>
        <View style={styles.actionCopy}><Text style={styles.actionTitle}>Exporter la bibliothèque</Text><Text style={styles.actionText}>Créer un JSON et ouvrir la feuille de partage</Text></View><Text style={styles.actionArrow}>›</Text>
      </Pressable>
      {busy && <ActivityIndicator style={{ marginTop: 22 }} color="#2F6B55" />}
      {lastReport && <View style={styles.report}><Text style={styles.reportText}>{lastReport}</Text></View>}
      <View style={styles.formatCard}><Text style={styles.formatTitle}>Format Kizz v1</Text><Text style={styles.formatText}>Chaque pack contient ses thèmes, questions, 4 choix, bonne réponse, explications, difficulté, tags et provenance. Taille maximale: 50 Mo et 100 000 questions par fichier.</Text></View>
    </ScrollView>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <View style={styles.stat}><Text style={styles.statValue}>{value}</Text><Text style={styles.statLabel}>{label}</Text></View>;
}

function Kpi({ value, label, accent }: { value: string; label: string; accent: string }) {
  return <View style={styles.kpiCard}><View style={[styles.kpiDot, { backgroundColor: accent }]} /><Text style={styles.kpiValue}>{value}</Text><Text style={styles.kpiLabel}>{label}</Text></View>;
}

function SessionConfigurator({ topics, initialTopicIds, onClose, onStart }: { topics: Topic[]; initialTopicIds: string[]; onClose: () => void; onStart: (filters: SessionFilters) => void }) {
  const [topicIds, setTopicIds] = useState(initialTopicIds);
  const [difficulties, setDifficulties] = useState<Difficulty[]>([1, 2, 3]);
  const [limit, setLimit] = useState<5 | 10 | 20>(10);

  function toggleTopic(topicId: string) {
    setTopicIds((current) => current.includes(topicId) ? current.filter((id) => id !== topicId) : [...current, topicId]);
  }

  function toggleDifficulty(difficulty: Difficulty) {
    setDifficulties((current) => current.includes(difficulty)
      ? current.length === 1 ? current : current.filter((item) => item !== difficulty)
      : [...current, difficulty].sort() as Difficulty[]);
  }

  const topicLabel = topicIds.length === 0 ? 'Tous les thèmes' : topicIds.length === 1 ? topics.find((topic) => topic.id === topicIds[0])?.title : `${topicIds.length} thèmes`;
  return (
    <ScrollView contentContainerStyle={styles.configPage} showsVerticalScrollIndicator={false}>
      <View style={styles.libraryHeader}><Pressable onPress={onClose} hitSlop={16}><Text style={styles.back}>‹</Text></Pressable><Text style={styles.libraryTitle}>Composer une session</Text></View>
      <Text style={styles.configTitle}>Que veux-tu réviser ?</Text><Text style={styles.configLead}>Combine librement contenu, niveau et durée.</Text>
      <Text style={styles.configSection}>THÈMES</Text>
      <View style={styles.chipWrap}>
        <Pressable testID="config-topic-all" onPress={() => setTopicIds([])} style={[styles.filterChip, topicIds.length === 0 && styles.filterChipActive]}><Text style={[styles.filterChipText, topicIds.length === 0 && styles.filterChipTextActive]}>Tous</Text></Pressable>
        {topics.map((topic) => <Pressable key={topic.id} testID={`config-topic-${topic.id}`} onPress={() => toggleTopic(topic.id)} style={[styles.filterChip, topicIds.includes(topic.id) && styles.filterChipActive]}><Text style={[styles.filterChipText, topicIds.includes(topic.id) && styles.filterChipTextActive]}>{topic.title}</Text></Pressable>)}
      </View>
      <Text style={styles.configSection}>DIFFICULTÉ</Text>
      <View style={styles.difficultyGrid}>{([1, 2, 3] as Difficulty[]).map((difficulty) => <Pressable key={difficulty} testID={`config-difficulty-${difficulty}`} onPress={() => toggleDifficulty(difficulty)} style={[styles.difficultyCard, difficulties.includes(difficulty) && styles.difficultyCardActive]}><Text style={styles.difficultyNumber}>{difficulty}</Text><Text style={styles.difficultyName}>{difficulty === 1 ? 'Découverte' : difficulty === 2 ? 'Intermédiaire' : 'Expert'}</Text><Text style={styles.difficultyDots}>{'●'.repeat(difficulty)}{'○'.repeat(3 - difficulty)}</Text></Pressable>)}</View>
      <Text style={styles.configSection}>LONGUEUR</Text>
      <View style={styles.lengthRow}>{([5, 10, 20] as const).map((value) => <Pressable key={value} testID={`config-length-${value}`} onPress={() => setLimit(value)} style={[styles.lengthButton, limit === value && styles.lengthButtonActive]}><Text style={[styles.lengthValue, limit === value && styles.lengthValueActive]}>{value}</Text><Text style={styles.lengthLabel}>questions</Text></Pressable>)}</View>
      <View style={styles.configSummary}><Text style={styles.configSummaryLabel}>{topicLabel} · niveaux {difficulties.join(', ')}</Text><Text style={styles.configSummaryValue}>{limit} questions maximum</Text></View>
      <Pressable testID="launch-configured-session" accessibilityRole="button" onPress={() => onStart({ topicIds, difficulties, limit })} style={styles.primaryButton}><Text style={styles.primaryButtonText}>Lancer la session</Text></Pressable>
    </ScrollView>
  );
}

type QuizProps = {
  topic: Topic; questions: QuizQuestion[]; index: number; selected: number | null;
  freeText: string; answerCorrect: boolean; onFreeTextChange: (value: string) => void; onSubmitFreeText: () => void;
  fieldValues: Record<string, string>; answerCredit: number; onFieldChange: (id: string, value: string) => void; onSubmitMultiText: () => void;
  mapGuess: GeoPoint | null; onMapGuess: (point: GeoPoint) => void; onSubmitMapPoint: () => void;
  onSelect: (index: number) => void; onToggleFavorite: () => void; onContinue: () => void; onClose: () => void;
  infiniteDifficulty?: Difficulty | null;
  confidence?: 1 | 2 | 3; onConfidence: (confidence: 1 | 2 | 3) => void;
};

function Quiz({ topic, questions, index, selected, freeText, fieldValues, mapGuess, answerCorrect, answerCredit, confidence, infiniteDifficulty, onConfidence, onFreeTextChange, onFieldChange, onMapGuess, onSubmitFreeText, onSubmitMultiText, onSubmitMapPoint, onSelect, onToggleFavorite, onContinue, onClose }: QuizProps) {
  const question = questions[index];
  const answered = selected !== null;
  const infinite = !!infiniteDifficulty;
  const imageSource = question.imageAsset ? QUESTION_IMAGES[question.imageAsset] : question.imageUrl ? { uri: question.imageUrl } : undefined;
  const multiGrade = gradeMultiText(question, fieldValues);
  const mapGrade = gradeMapPoint(question, mapGuess);
  const allFieldsFilled = (question.answerFields ?? []).every((field) => fieldValues[field.id]?.trim());
  return (
    <KeyboardAvoidingView style={styles.quizPage} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={8}>
      <View style={styles.quizHeader}>
        <Pressable onPress={onClose} hitSlop={16}><Text style={styles.close}>×</Text></Pressable>
        <View style={styles.progressTrack}><View style={[styles.progressFill, { width: infinite ? '100%' : `${((index + (answered ? 1 : 0)) / questions.length) * 100}%`, backgroundColor: topic.color }]} /></View>
        <Text style={styles.counter}>{infinite ? `∞ ${index + 1}` : `${index + 1}/${questions.length}`}</Text><Pressable onPress={onToggleFavorite} hitSlop={12}><Text style={[styles.favoriteStar, question.favorite && styles.favoriteStarActive]}>{question.favorite ? '★' : '☆'}</Text></Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.quizBody} keyboardShouldPersistTaps="handled">
        <View style={styles.metaRow}><Text style={[styles.pill, { color: topic.color, backgroundColor: `${topic.color}16` }]}>{topic.title}</Text><Text style={styles.difficulty}>{'●'.repeat(question.difficulty)}{'○'.repeat(3 - question.difficulty)}</Text></View>
        {infinite && <Text style={styles.infiniteQuizHint}>Mode infini · niveau {infiniteDifficulty} · touche × pour arrêter et sauvegarder</Text>}
        {imageSource && <View style={styles.questionImageWrap}><Image source={imageSource} style={styles.questionImage} resizeMode="cover" accessibilityLabel={question.imageAlt} /></View>}
        <Text style={styles.question}>{question.prompt}</Text>
        {(question.type ?? 'multiple-choice') === 'multiple-choice' ? <View style={styles.choices}>
          {(question.choices ?? []).map((choice, choiceIndex) => {
            const correct = answered && choiceIndex === question.answerIndex;
            const wrong = answered && choiceIndex === selected && !correct;
            return (
              <Pressable key={choice} testID={`choice-${choiceIndex}`} accessibilityRole="button" accessibilityLabel={`Réponse ${String.fromCharCode(65 + choiceIndex)} : ${choice}`} onPress={() => onSelect(choiceIndex)} style={({ pressed }) => [styles.choice, correct && styles.choiceCorrect, wrong && styles.choiceWrong, pressed && !answered && styles.pressed]}>
                <View style={[styles.choiceLetter, correct && styles.choiceLetterCorrect, wrong && styles.choiceLetterWrong]}><Text style={[styles.choiceLetterText, (correct || wrong) && styles.choiceLetterActive]}>{String.fromCharCode(65 + choiceIndex)}</Text></View>
                <Text style={styles.choiceText}>{choice}</Text><Text style={styles.choiceMark}>{correct ? '✓' : wrong ? '×' : ''}</Text>
              </Pressable>
            );
          })}
        </View> : question.type === 'map-point' ? <View>
          <SatelliteMapPicker guess={mapGuess} target={answered ? question.geoTarget : undefined} disabled={answered} onPick={onMapGuess} />
          {!answered && <Pressable testID="check-map-answer" accessibilityRole="button" disabled={!mapGuess} onPress={onSubmitMapPoint} style={[styles.checkButton, !mapGuess && styles.disabled]}><Text style={styles.checkButtonText}>Valider le point</Text></Pressable>}
          {answered && question.geoTarget && <View style={styles.mapFeedback}><Text style={styles.mapFeedbackTitle}>Correction spatiale</Text><Text style={styles.mapFeedbackText}>Distance : {mapGrade.distanceKm ?? '?'} km{mapGrade.direction && !mapGrade.correct ? ` · vise ${mapGrade.direction}` : ''}</Text><Text style={styles.mapFeedbackText}>Tolerance : {question.geoTarget.toleranceKm} km autour de {question.geoTarget.label}.</Text></View>}
        </View> : question.type === 'multi-text' ? <View style={styles.multiFields}>
          {(question.answerFields ?? []).map((field) => <View key={field.id}><Text style={styles.multiFieldLabel}>{field.label}</Text><TextInput testID={`multi-field-${field.id}`} accessibilityLabel={field.label} value={fieldValues[field.id] ?? ''} onChangeText={(value) => onFieldChange(field.id, value)} editable={!answered} placeholder="Ta réponse…" placeholderTextColor="#758079" style={[styles.freeInput, answered && (multiGrade.fieldResults[field.id] ? styles.choiceCorrect : styles.choiceWrong)]} />{answered && !multiGrade.fieldResults[field.id] && <Text style={styles.acceptedAnswer}>Attendu : {field.acceptedAnswers[0]}</Text>}</View>)}
          {!answered && <Pressable testID="check-multi-answer" accessibilityRole="button" disabled={!allFieldsFilled} onPress={onSubmitMultiText} style={[styles.checkButton, !allFieldsFilled && styles.disabled]}><Text style={styles.checkButtonText}>Vérifier les réponses</Text></Pressable>}
        </View> : <View>
          <TextInput
            testID="free-text-answer" accessibilityLabel="Réponse libre"
            value={freeText} onChangeText={onFreeTextChange} editable={!answered} onSubmitEditing={onSubmitFreeText}
            placeholder="Écris ta réponse…" placeholderTextColor="#949B97" autoCapitalize="sentences" returnKeyType="done"
            style={[styles.freeInput, answered && (answerCorrect ? styles.choiceCorrect : styles.choiceWrong)]}
          />
          {!answered && <Pressable testID="check-answer" accessibilityRole="button" disabled={!freeText.trim()} onPress={onSubmitFreeText} style={[styles.checkButton, !freeText.trim() && styles.disabled]}><Text style={styles.checkButtonText}>Vérifier</Text></Pressable>}
          {answered && !answerCorrect && <Text style={styles.acceptedAnswer}>Réponse attendue : {(question.acceptedAnswers ?? []).join(' / ')}</Text>}
        </View>}
        {answered && <View style={[styles.explanation, answerCredit === 1 ? styles.explanationCorrect : answerCredit > 0 ? styles.explanationPartial : styles.explanationWrong]}><Text style={styles.explanationTitle}>{answerCredit === 1 ? 'Bien vu' : answerCredit > 0 ? 'Réponse partielle' : 'À retenir'}</Text>{answerCredit > 0 && answerCredit < 1 && <Text style={styles.partialCredit}>{Math.round(answerCredit * 100)} % des éléments trouvés</Text>}<Text style={styles.explanationText}>{question.explanation}</Text>{question.learnMoreUrl && <Pressable onPress={() => Linking.openURL(question.learnMoreUrl!)} style={styles.learnMore}><Text style={styles.learnMoreText}>En savoir plus  →</Text></Pressable>}</View>}
        {answered && <View style={styles.confidenceCard}><Text style={styles.confidenceTitle}>Tu le savais vraiment ?</Text><Text style={styles.confidenceHint}>Facultatif · ajuste seulement la prochaine révision</Text><View style={styles.confidenceRow}>{([{ value: 1, label: 'Hésitant' }, { value: 2, label: 'Moyen' }, { value: 3, label: 'Sûr' }] as const).map((item) => <Pressable key={item.value} testID={`confidence-${item.value}`} onPress={() => onConfidence(item.value)} style={[styles.confidenceButton, confidence === item.value && styles.confidenceButtonActive]}><Text style={[styles.confidenceButtonText, confidence === item.value && styles.confidenceButtonTextActive]}>{item.label}</Text></Pressable>)}</View></View>}
      </ScrollView>
      {answered && <View style={styles.quizFooter}><Pressable testID="continue-quiz" accessibilityRole="button" onPress={onContinue} style={styles.primaryButton}><Text style={styles.primaryButtonText}>{infinite ? 'Question suivante' : index === questions.length - 1 ? 'Voir mon bilan' : 'Continuer'}</Text></Pressable></View>}
    </KeyboardAvoidingView>
  );
}

function SatelliteMapPicker({ guess, target, disabled, onPick }: { guess: GeoPoint | null; target?: GeoPoint & { toleranceKm?: number }; disabled: boolean; onPick: (point: GeoPoint) => void }) {
  function handleMapMessage(event: WebViewMessageEvent) {
    if (disabled) return;
    try {
      const payload = JSON.parse(event.nativeEvent.data) as Partial<GeoPoint>;
      if (typeof payload.lat === 'number' && typeof payload.lon === 'number') {
        onPick({
          lat: Math.max(-90, Math.min(90, payload.lat)),
          lon: Math.max(-180, Math.min(180, payload.lon)),
        });
      }
    } catch {
      // Ignore malformed messages from the embedded map.
    }
  }

  return (
    <View style={styles.satelliteMapWrap}>
      <WebView
        testID="world-map-picker"
        originWhitelist={['*']}
        source={{ html: satelliteMapHtml(guess, target, disabled) }}
        javaScriptEnabled
        domStorageEnabled
        onMessage={handleMapMessage}
        scrollEnabled={false}
        style={styles.satelliteMap}
      />
      <Text style={styles.mapHint}>{disabled ? 'Point vert: ta réponse · cible rouge' : 'Zoome, déplace-toi, puis touche la carte pour placer ta réponse'}</Text>
    </View>
  );
}

function satelliteMapHtml(guess: GeoPoint | null, target: (GeoPoint & { toleranceKm?: number }) | undefined, disabled: boolean) {
  const center = guess ?? target ?? { lat: 20, lon: 0 };
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <style>
    html, body, #map { height: 100%; width: 100%; margin: 0; background: #0F1D23; }
    .leaflet-control-attribution { background: rgba(10,14,13,0.72); color: #9fb0a8; font: 10px system-ui; }
    .leaflet-control-attribution a { color: #8edcb6; }
    .fallback { color: #dce6e1; font: 13px system-ui; padding: 18px; line-height: 1.45; }
  </style>
</head>
<body>
  <div id="map"><div class="fallback">Chargement de la carte satellite...</div></div>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script>
    (function () {
      var guess = ${JSON.stringify(guess)};
      var target = ${JSON.stringify(target ?? null)};
      var map = L.map('map', { zoomControl: true, worldCopyJump: true }).setView([${center.lat}, ${center.lon}], ${guess || target ? 5 : 2});
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: 'Tiles Esri, Maxar, Earthstar Geographics'
      }).addTo(map);
      function addMarker(point, color, label) {
        L.circleMarker([point.lat, point.lon], {
          radius: 9, color: '#07110C', weight: 2, fillColor: color, fillOpacity: 1
        }).addTo(map).bindTooltip(label, { direction: 'top' });
      }
      if (guess) addMarker(guess, '#68D7A2', 'Ta réponse');
      if (target) {
        if (target.toleranceKm) {
          L.circle([target.lat, target.lon], {
            radius: target.toleranceKm * 1000,
            color: '#E47D70',
            weight: 2,
            fillColor: '#E47D70',
            fillOpacity: 0.18
          }).addTo(map);
        }
        addMarker(target, '#E47D70', target.label || 'Cible');
      }
      if (guess && target) {
        map.fitBounds([[guess.lat, guess.lon], [target.lat, target.lon]], { padding: [38, 38], maxZoom: 7 });
      }
      if (!${disabled ? 'true' : 'false'}) {
        map.on('click', function (event) {
          window.ReactNativeWebView.postMessage(JSON.stringify({ lat: event.latlng.lat, lon: event.latlng.lng }));
        });
      }
    })();
  </script>
</body>
</html>`;
}

function WorldMapPicker({ guess, target, disabled, onPick }: { guess: GeoPoint | null; target?: GeoPoint & { toleranceKm?: number }; disabled: boolean; onPick: (point: GeoPoint) => void }) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const toPoint = (point: GeoPoint) => ({
    left: size.width ? ((point.lon + 180) / 360) * size.width : 0,
    top: size.height ? ((90 - point.lat) / 180) * size.height : 0,
  });
  const toleranceDiameter = target && typeof target.toleranceKm === 'number' && size.width
    ? Math.max(22, Math.min(88, (target.toleranceKm * 2 * size.width) / 40075))
    : 0;
  const mapBands = [-60, -30, 0, 30, 60];
  const meridians = [-120, -60, 0, 60, 120];
  return (
    <Pressable
      testID="world-map-picker"
      accessibilityRole="button"
      accessibilityLabel="Carte du monde tactile"
      disabled={disabled}
      onLayout={(event) => setSize(event.nativeEvent.layout)}
      onPress={(event) => {
        if (!size.width || !size.height) return;
        const lon = (event.nativeEvent.locationX / size.width) * 360 - 180;
        const lat = 90 - (event.nativeEvent.locationY / size.height) * 180;
        onPick({ lat: Math.max(-90, Math.min(90, lat)), lon: Math.max(-180, Math.min(180, lon)) });
      }}
      style={({ pressed }) => [styles.worldMap, pressed && !disabled && styles.pressed]}
    >
      {mapBands.map((lat) => <View key={`lat-${lat}`} style={[styles.mapLineHorizontal, { top: `${((90 - lat) / 180) * 100}%` }]} />)}
      {meridians.map((lon) => <View key={`lon-${lon}`} style={[styles.mapLineVertical, { left: `${((lon + 180) / 360) * 100}%` }]} />)}
      <View style={[styles.continentBlob, styles.americaNorth]} />
      <View style={[styles.continentBlob, styles.americaSouth]} />
      <View style={[styles.continentBlob, styles.europeAfrica]} />
      <View style={[styles.continentBlob, styles.asia]} />
      <View style={[styles.continentBlob, styles.australia]} />
      {target && toleranceDiameter > 0 && <View style={[styles.mapToleranceRing, toPoint(target), { width: toleranceDiameter, height: toleranceDiameter, marginLeft: -toleranceDiameter / 2, marginTop: -toleranceDiameter / 2, borderRadius: toleranceDiameter / 2 }]} />}
      {target && <View style={[styles.mapMarker, styles.mapTarget, toPoint(target)]}><Text style={styles.mapMarkerText}>×</Text></View>}
      {guess && <View style={[styles.mapMarker, styles.mapGuess, toPoint(guess)]}><Text style={styles.mapMarkerText}>•</Text></View>}
      <Text style={styles.mapHint}>{disabled ? 'Point vert: ta réponse · croix: cible' : 'Touche la carte pour placer ta réponse'}</Text>
    </Pressable>
  );
}

function Result({ topic, answers, onAgain, onHome }: { topic: Topic; answers: SessionAnswer[]; onAgain: () => void; onHome: () => void }) {
  const score = answers.reduce((total, answer) => total + (answer.credit ?? (answer.correct ? 1 : 0)), 0);
  const percent = Math.round((score / answers.length) * 100);
  const message = percent >= 80 ? 'Solide !' : percent >= 50 ? 'Bonne progression' : 'Chaque erreur fait apprendre';
  const confidenceStats = [
    { label: 'A revoir', value: answers.filter((answer) => answer.confidence === 1).length },
    { label: 'A consolider', value: answers.filter((answer) => answer.confidence === 2).length },
    { label: 'Solide', value: answers.filter((answer) => answer.confidence === 3).length },
  ];
  return (
    <View style={styles.resultPage}>
      <View style={[styles.resultCircle, { borderColor: topic.color }]}><Text style={[styles.resultPercent, { color: topic.color }]}>{percent}%</Text><Text style={styles.resultScore}>{Number.isInteger(score) ? score : score.toFixed(1)} sur {answers.length}</Text></View>
      <Text style={styles.resultTitle}>{message}</Text><Text style={styles.resultText}>Ta session {topic.title.toLowerCase()} est enregistrée uniquement sur cet appareil.</Text>
      <View style={styles.calibrationCard}>
        <Text style={styles.calibrationTitle}>Calibration memoire</Text>
        <View style={styles.calibrationRow}>
          {confidenceStats.map((stat) => (
            <View key={stat.label} style={styles.calibrationItem}>
              <Text style={styles.calibrationValue}>{stat.value}</Text>
              <Text style={styles.calibrationLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>
      <Pressable onPress={onAgain} style={styles.primaryButton}><Text style={styles.primaryButtonText}>Rejouer ce thème</Text></Pressable>
      <Pressable onPress={onHome} style={styles.secondaryButton}><Text style={styles.secondaryButtonText}>Retour aux thèmes</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: palette.bg, paddingTop: Platform.OS === 'android' ? 24 : 0, paddingBottom: Platform.OS === 'android' ? 48 : 0 }, loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.bg, gap: 16, paddingTop: Platform.OS === 'android' ? 24 : 0, paddingBottom: Platform.OS === 'android' ? 48 : 0 }, loadingText: { color: palette.muted },
  page: { padding: 22, paddingBottom: 40 }, brandRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 38 }, logo: { width: 40, height: 40, borderRadius: 13, backgroundColor: '#68D7A2', alignItems: 'center', justifyContent: 'center' }, logoText: { color: '#09110E', fontSize: 22, fontWeight: '900' }, brand: { fontSize: 23, fontWeight: '800', color: '#F3F7F5', marginLeft: 11 }, libraryShortcut: { marginLeft: 'auto', backgroundColor: '#17211D', borderWidth: 1, borderColor: '#28362F', paddingHorizontal: 13, paddingVertical: 9, borderRadius: 20 }, libraryShortcutText: { color: '#91E8BD', fontSize: 12, fontWeight: '800' },
  logoImage: { width: 42, height: 42, borderRadius: 13 }, dashboardHeader: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 14 }, dashboardTitle: { color: '#F3F7F5', fontSize: 25, fontWeight: '800', letterSpacing: -0.5 }, dashboardCaption: { color: '#6F7C75', fontSize: 11, marginLeft: 'auto' }, kpiGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 28 }, kpiCard: { width: '48%', minHeight: 108, borderRadius: 18, backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', padding: 15 }, kpiDot: { width: 7, height: 7, borderRadius: 4, marginBottom: 12 }, kpiValue: { color: '#F1F6F3', fontSize: 25, fontWeight: '900' }, kpiLabel: { color: '#7F8C85', fontSize: 11, fontWeight: '700', marginTop: 4 },
  modeStack: { gap: 12, marginBottom: 18 }, recommendCard: { minHeight: 98, borderRadius: 22, backgroundColor: '#121815', borderWidth: 1, borderColor: '#28342F', padding: 15, flexDirection: 'row', alignItems: 'center', gap: 13, marginBottom: 12 }, recommendRail: { width: 4, alignSelf: 'stretch', borderRadius: 99 }, recommendEyebrow: { color: '#78857F', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, recommendTitle: { color: '#EFF6F2', fontSize: 15, fontWeight: '900', marginTop: 5 }, recommendText: { color: '#84918A', fontSize: 11, lineHeight: 16, marginTop: 5 }, recommendAction: { fontSize: 12, fontWeight: '900' }, composeCard: { minHeight: 96, borderRadius: 22, backgroundColor: '#18271F', borderWidth: 1, borderColor: '#2E5944', padding: 17, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, composeEyebrow: { color: '#68D7A2', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, composeTitle: { color: '#EAF3EE', fontSize: 15, fontWeight: '800', marginTop: 5 }, modeText: { color: '#8CA39A', fontSize: 11, lineHeight: 16, marginTop: 6, maxWidth: 250 }, composeArrow: { color: '#68D7A2', fontSize: 25 }, enduranceCard: { minHeight: 132, borderRadius: 22, backgroundColor: '#151A23', borderWidth: 1, borderColor: '#31446F', padding: 16, flexDirection: 'row', alignItems: 'center', gap: 14 }, enduranceText: { color: '#8D9CAE', fontSize: 11, lineHeight: 16, marginTop: 6 }, enduranceButtons: { width: 112, gap: 7 }, enduranceButton: { minHeight: 35, borderRadius: 12, backgroundColor: '#1C2638', borderWidth: 1, borderColor: '#40557F', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 11 }, enduranceButtonText: { color: '#E9F0FF', fontSize: 14, fontWeight: '900' }, enduranceDots: { color: '#8FB3FF', fontSize: 8, letterSpacing: 1.5 }, infiniteCard: { minHeight: 132, borderRadius: 22, backgroundColor: '#1E1826', borderWidth: 1, borderColor: '#4B3463', padding: 16, flexDirection: 'row', alignItems: 'center', gap: 14 }, infiniteEyebrow: { color: '#C29BFF', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, infiniteText: { color: '#A899B8', fontSize: 11, lineHeight: 16, marginTop: 6 }, infiniteButton: { minHeight: 35, borderRadius: 12, backgroundColor: '#2A2036', borderWidth: 1, borderColor: '#594073', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 11 }, infiniteButtonText: { color: '#F1E8FF', fontSize: 14, fontWeight: '900' }, infiniteDots: { color: '#C29BFF', fontSize: 13, fontWeight: '900' }, configPage: { padding: 22, paddingBottom: 60, backgroundColor: '#0A0E0D' }, configTitle: { color: '#F3F7F5', fontSize: 30, lineHeight: 35, fontWeight: '900', letterSpacing: -0.8 }, configLead: { color: '#87938D', fontSize: 14, marginTop: 8, marginBottom: 30 }, configSection: { color: '#68756E', fontSize: 10, fontWeight: '900', letterSpacing: 1.5, marginTop: 12, marginBottom: 12 }, chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 }, filterChip: { borderWidth: 1, borderColor: '#2A3530', backgroundColor: '#121815', borderRadius: 20, paddingHorizontal: 13, paddingVertical: 10 }, filterChipActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, filterChipText: { color: '#A1ACA6', fontSize: 12, fontWeight: '700' }, filterChipTextActive: { color: '#07110C', fontWeight: '900' }, difficultyGrid: { gap: 9, marginBottom: 20 }, difficultyCard: { minHeight: 66, borderRadius: 16, borderWidth: 1, borderColor: '#2A3530', backgroundColor: '#121815', paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center' }, difficultyCardActive: { borderColor: '#68D7A2', backgroundColor: '#13251E' }, difficultyNumber: { color: '#68D7A2', fontSize: 20, fontWeight: '900', width: 32 }, difficultyName: { color: '#DCE4E0', fontSize: 13, fontWeight: '800', flex: 1 }, difficultyDots: { color: '#68D7A2', fontSize: 10, letterSpacing: 2 }, lengthRow: { flexDirection: 'row', gap: 9, marginBottom: 22 }, lengthButton: { flex: 1, minHeight: 70, borderRadius: 16, borderWidth: 1, borderColor: '#2A3530', backgroundColor: '#121815', alignItems: 'center', justifyContent: 'center' }, lengthButtonActive: { borderColor: '#68D7A2', backgroundColor: '#13251E' }, lengthValue: { color: '#A4B0AA', fontSize: 20, fontWeight: '900' }, lengthValueActive: { color: '#68D7A2' }, lengthLabel: { color: '#6D7972', fontSize: 9, marginTop: 2 }, configSummary: { backgroundColor: '#101512', borderRadius: 14, padding: 14, marginBottom: 16 }, configSummaryLabel: { color: '#B8C2BD', fontSize: 12, fontWeight: '700' }, configSummaryValue: { color: '#67736D', fontSize: 10, marginTop: 4 },
  resumeCard: { borderRadius: 19, backgroundColor: '#151B18', borderWidth: 1, borderColor: '#34423B', padding: 16, marginBottom: 14, overflow: 'hidden' }, resumeProgress: { height: 4, borderRadius: 3, backgroundColor: '#27312C', marginBottom: 14, overflow: 'hidden' }, resumeProgressFill: { height: 4, borderRadius: 3 }, resumeEyebrow: { color: '#7F8D86', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, resumeRow: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 6 }, resumeTitle: { color: '#EDF4F0', fontSize: 17, fontWeight: '900' }, resumeText: { color: '#74817A', fontSize: 11, marginTop: 3 }, resumeArrow: { fontSize: 12, fontWeight: '900' },
  hero: { color: '#F3F7F5', fontSize: 41, lineHeight: 45, fontWeight: '800', letterSpacing: -1.3 }, lead: { color: '#96A29C', fontSize: 16, lineHeight: 24, marginTop: 14, marginBottom: 28, maxWidth: 350 },
  statsCard: { flexDirection: 'row', backgroundColor: '#131917', borderRadius: 20, paddingVertical: 18, paddingHorizontal: 10, borderWidth: 1, borderColor: '#242D29', marginBottom: 34 }, stat: { flex: 1, alignItems: 'center' }, statValue: { color: '#EFF5F2', fontSize: 21, fontWeight: '800' }, statLabel: { color: '#78857F', fontSize: 11, marginTop: 3 }, divider: { width: 1, backgroundColor: '#27312C' }, sectionRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 14 }, sectionTitle: { color: '#E8EFEB', fontSize: 19, fontWeight: '800' }, sectionHint: { marginLeft: 'auto', color: '#738079', fontSize: 12 },
  quickRow: { flexDirection: 'row', gap: 9, marginBottom: 28 }, quickAction: { flex: 1, minHeight: 74, borderRadius: 18, borderWidth: 1, borderColor: '#26312C', backgroundColor: '#111614', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4 }, quickIcon: { color: '#79DDAA', fontSize: 20, fontWeight: '800', marginBottom: 5 }, quickText: { color: '#AAB5AF', fontSize: 10.5, fontWeight: '800', textAlign: 'center' },
  languageHero: { minHeight: 112, borderRadius: 22, borderWidth: 1, borderColor: '#285262', backgroundColor: '#102027', flexDirection: 'row', alignItems: 'center', padding: 15, gap: 13 }, languageHeroIcon: { width: 52, height: 52, borderRadius: 16, backgroundColor: '#5FB8C9', alignItems: 'center', justifyContent: 'center' }, languageHeroIconText: { color: '#071116', fontSize: 18, fontWeight: '900' }, languageHeroEyebrow: { color: '#6FC8D9', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, languageHeroTitle: { color: '#EDF6F8', fontSize: 15, fontWeight: '900', marginTop: 5 }, languageHeroText: { color: '#78949C', fontSize: 11, marginTop: 4 },
  languagePage: { padding: 22, paddingBottom: 60, backgroundColor: '#0A0E0D' }, languageChoices: { gap: 9, marginBottom: 20 }, languageChoice: { minHeight: 67, borderRadius: 17, borderWidth: 1, borderColor: '#293631', backgroundColor: '#121815', paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' }, languageChoiceActive: { borderColor: '#5FB8C9', backgroundColor: '#12252B' }, languageChoiceName: { color: '#DCE6E1', fontSize: 15, fontWeight: '800' }, languageChoiceNative: { color: '#70827A', fontSize: 12, marginLeft: 'auto' }, cefrRow: { flexDirection: 'row', gap: 7 }, cefrButton: { flex: 1, height: 48, borderRadius: 14, borderWidth: 1, borderColor: '#2A3530', backgroundColor: '#121815', alignItems: 'center', justifyContent: 'center' }, cefrText: { color: '#A1ACA6', fontWeight: '900' }, levelHelp: { color: '#718079', fontSize: 11, lineHeight: 17, marginTop: 9, marginBottom: 14 }, skillList: { gap: 9, marginBottom: 18 }, skillCard: { minHeight: 72, borderRadius: 17, borderWidth: 1, borderColor: '#29332F', backgroundColor: '#121815', padding: 13, flexDirection: 'row', alignItems: 'center' }, skillCardActive: { borderColor: '#417B86', backgroundColor: '#102126' }, skillCheck: { width: 29, height: 29, borderRadius: 9, borderWidth: 1, borderColor: '#39443E', alignItems: 'center', justifyContent: 'center', marginRight: 12 }, skillCheckActive: { backgroundColor: '#5FB8C9', borderColor: '#5FB8C9' }, skillTitle: { color: '#E4ECE8', fontSize: 13, fontWeight: '800' }, skillDetail: { color: '#718079', fontSize: 10, marginTop: 4 }, languageMethod: { borderRadius: 17, backgroundColor: '#121A17', borderWidth: 1, borderColor: '#29352F', padding: 15, marginBottom: 18 }, languageMethodTitle: { color: '#8EDCB6', fontSize: 13, fontWeight: '900' }, languageMethodText: { color: '#7E8C85', fontSize: 11, lineHeight: 18, marginTop: 6 },
  topicGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 }, topicCard: { width: '48%', minHeight: 176, padding: 16, borderRadius: 22, backgroundColor: '#121815', borderWidth: 1, borderColor: '#26312C' }, pressed: { opacity: 0.72, transform: [{ scale: 0.985 }] }, topicIcon: { width: 44, height: 44, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginBottom: 15 }, topicIconText: { fontSize: 17, fontWeight: '900' }, topicTitle: { color: '#ECF2EF', fontWeight: '900', fontSize: 16 }, topicSubtitle: { color: '#84918A', fontSize: 11.5, lineHeight: 17, marginTop: 4 }, go: { fontSize: 12, fontWeight: '900', marginTop: 'auto' }, privacy: { textAlign: 'center', color: '#66736D', fontSize: 11, marginTop: 28 },
  quizPage: { flex: 1, backgroundColor: '#0A0E0D' }, quizHeader: { height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, gap: 13 }, close: { fontSize: 32, color: '#829089', lineHeight: 34 }, progressTrack: { flex: 1, height: 7, borderRadius: 8, backgroundColor: '#202925', overflow: 'hidden' }, progressFill: { height: '100%', borderRadius: 8 }, counter: { color: '#78857F', fontWeight: '700', fontSize: 12 }, favoriteStar: { color: '#64716A', fontSize: 24 }, favoriteStarActive: { color: '#E6B759' }, quizBody: { padding: 22, paddingBottom: 32 }, metaRow: { flexDirection: 'row', alignItems: 'center' }, pill: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, fontSize: 12, fontWeight: '800' }, difficulty: { marginLeft: 'auto', color: '#59655F', letterSpacing: 2, fontSize: 11 }, infiniteQuizHint: { color: '#9B8CB2', fontSize: 11, fontWeight: '800', marginTop: 12 }, questionImageWrap: { height: 190, overflow: 'hidden', borderRadius: 20, backgroundColor: '#17201C', marginTop: 20 }, questionImage: { width: '100%', height: '100%' }, question: { color: '#F1F6F3', fontSize: 28, lineHeight: 35, fontWeight: '800', marginTop: 22, marginBottom: 28 }, choices: { gap: 11 }, choice: { minHeight: 68, borderRadius: 17, borderWidth: 1.5, borderColor: '#2A3530', backgroundColor: '#131917', padding: 12, flexDirection: 'row', alignItems: 'center' }, choiceCorrect: { borderColor: '#68D7A2', backgroundColor: '#13271F' }, choiceWrong: { borderColor: '#E47D70', backgroundColor: '#291816' }, choiceLetter: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#222B27', alignItems: 'center', justifyContent: 'center', marginRight: 13 }, choiceLetterCorrect: { backgroundColor: '#4EBA88' }, choiceLetterWrong: { backgroundColor: '#C96358' }, choiceLetterText: { color: '#A0ACA6', fontWeight: '800' }, choiceLetterActive: { color: '#07110C' }, choiceText: { color: '#E3EAE6', flex: 1, fontSize: 15, fontWeight: '600' }, choiceMark: { color: '#68D7A2', fontSize: 21, fontWeight: '900', marginHorizontal: 6 }, freeInput: { minHeight: 62, borderWidth: 1.5, borderColor: '#303B36', backgroundColor: '#131917', borderRadius: 17, paddingHorizontal: 17, color: '#EDF4F0', fontSize: 16 }, checkButton: { minHeight: 50, backgroundColor: '#68D7A2', borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginTop: 12 }, checkButtonText: { color: '#07110C', fontSize: 15, fontWeight: '900' }, acceptedAnswer: { color: '#F09A8E', fontSize: 13, fontWeight: '700', marginTop: 10 }, explanation: { borderRadius: 17, padding: 17, marginTop: 20, borderLeftWidth: 4 }, explanationCorrect: { backgroundColor: '#13251E', borderLeftColor: '#68D7A2' }, explanationWrong: { backgroundColor: '#281917', borderLeftColor: '#E47D70' }, explanationTitle: { color: '#EDF4F0', fontWeight: '800', fontSize: 16, marginBottom: 6 }, explanationText: { color: '#A4B0AA', lineHeight: 21 }, learnMore: { alignSelf: 'flex-start', marginTop: 13, paddingVertical: 5 }, learnMoreText: { color: '#83E3B3', fontWeight: '800', fontSize: 13 },
  satelliteMapWrap: { height: 330, borderRadius: 22, borderWidth: 1, borderColor: '#2E4238', backgroundColor: '#0F1D23', overflow: 'hidden', marginBottom: 12 }, satelliteMap: { flex: 1, backgroundColor: '#0F1D23' }, worldMap: { height: 255, borderRadius: 22, borderWidth: 1, borderColor: '#2E4238', backgroundColor: '#0F1D23', overflow: 'hidden', marginBottom: 12 }, mapLineHorizontal: { position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: '#27414A' }, mapLineVertical: { position: 'absolute', top: 0, bottom: 0, width: 1, backgroundColor: '#27414A' }, continentBlob: { position: 'absolute', backgroundColor: '#244A3A', opacity: 0.75 }, americaNorth: { left: '11%', top: '20%', width: '22%', height: '26%', borderRadius: 34, transform: [{ rotate: '-12deg' }] }, americaSouth: { left: '27%', top: '51%', width: '12%', height: '31%', borderRadius: 26, transform: [{ rotate: '16deg' }] }, europeAfrica: { left: '45%', top: '26%', width: '17%', height: '44%', borderRadius: 31, transform: [{ rotate: '8deg' }] }, asia: { left: '58%', top: '20%', width: '29%', height: '35%', borderRadius: 42, transform: [{ rotate: '-8deg' }] }, australia: { left: '76%', top: '62%', width: '12%', height: '14%', borderRadius: 25, transform: [{ rotate: '-8deg' }] }, mapToleranceRing: { position: 'absolute', borderWidth: 2, borderColor: '#E47D70AA', backgroundColor: '#E47D7022' }, mapMarker: { position: 'absolute', width: 24, height: 24, marginLeft: -12, marginTop: -12, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 2 }, mapGuess: { backgroundColor: '#68D7A2', borderColor: '#D7FFE8' }, mapTarget: { backgroundColor: '#E47D70', borderColor: '#FFD8D3' }, mapMarkerText: { color: '#07110C', fontWeight: '900', fontSize: 15, lineHeight: 18 }, mapHint: { position: 'absolute', left: 14, right: 14, bottom: 12, color: '#A6B9B0', fontSize: 11, fontWeight: '800', textAlign: 'center', paddingHorizontal: 10, paddingVertical: 7, borderRadius: 999, backgroundColor: '#07110CCC', overflow: 'hidden' }, mapFeedback: { borderRadius: 16, borderWidth: 1, borderColor: '#2A3A33', backgroundColor: '#111714', padding: 14, marginTop: 10 }, mapFeedbackTitle: { color: '#E6EFEA', fontSize: 13, fontWeight: '900', marginBottom: 6 }, mapFeedbackText: { color: '#8FA19A', fontSize: 12, lineHeight: 18 },
  multiFields: { gap: 14 }, multiFieldLabel: { color: '#AAB5AF', fontSize: 11, fontWeight: '800', marginBottom: 7, marginLeft: 3 }, explanationPartial: { backgroundColor: '#2A2414', borderLeftColor: '#E6B759' }, partialCredit: { color: '#E6B759', fontSize: 11, fontWeight: '800', marginBottom: 8 },
  confidenceCard: { borderRadius: 17, borderWidth: 1, borderColor: '#28342E', backgroundColor: '#111714', padding: 15, marginTop: 13 }, confidenceTitle: { color: '#DEE8E3', fontSize: 14, fontWeight: '800' }, confidenceHint: { color: '#65736C', fontSize: 10, marginTop: 3, marginBottom: 12 }, confidenceRow: { flexDirection: 'row', gap: 7 }, confidenceButton: { flex: 1, minHeight: 42, borderRadius: 12, borderWidth: 1, borderColor: '#303C36', alignItems: 'center', justifyContent: 'center' }, confidenceButtonActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, confidenceButtonText: { color: '#8D9A93', fontSize: 11, fontWeight: '800' }, confidenceButtonTextActive: { color: '#07110C' },
  quizFooter: { padding: 18, borderTopWidth: 1, borderTopColor: '#222B27', backgroundColor: '#0A0E0D' }, primaryButton: { backgroundColor: '#68D7A2', minHeight: 56, borderRadius: 17, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28 }, primaryButtonText: { color: '#07110C', fontWeight: '900', fontSize: 16 }, disabled: { opacity: 0.32 },
  resultPage: { flex: 1, padding: 28, justifyContent: 'center', alignItems: 'stretch', backgroundColor: '#0A0E0D' }, resultCircle: { width: 180, height: 180, borderRadius: 90, borderWidth: 10, backgroundColor: '#131917', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }, resultPercent: { fontSize: 43, fontWeight: '900' }, resultScore: { color: '#839089', marginTop: 2 }, resultTitle: { color: '#F0F5F2', fontSize: 30, fontWeight: '800', textAlign: 'center' }, resultText: { color: '#96A29C', fontSize: 15, lineHeight: 22, textAlign: 'center', marginTop: 12, marginBottom: 20 }, calibrationCard: { borderRadius: 18, borderWidth: 1, borderColor: '#26332D', backgroundColor: '#111714', padding: 15, marginBottom: 22 }, calibrationTitle: { color: '#E6EFEA', fontSize: 13, fontWeight: '900', marginBottom: 12 }, calibrationRow: { flexDirection: 'row', gap: 8 }, calibrationItem: { flex: 1, borderRadius: 13, backgroundColor: '#171F1B', paddingVertical: 12, alignItems: 'center' }, calibrationValue: { color: '#68D7A2', fontSize: 22, fontWeight: '900' }, calibrationLabel: { color: '#7F8D86', fontSize: 10, fontWeight: '800', marginTop: 3, textAlign: 'center' }, secondaryButton: { minHeight: 54, alignItems: 'center', justifyContent: 'center', marginTop: 8 }, secondaryButtonText: { color: '#8DDBB2', fontWeight: '800', fontSize: 15 },
  libraryPage: { padding: 22, paddingBottom: 40, backgroundColor: '#0A0E0D' }, libraryHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 }, back: { color: '#83E3B3', fontSize: 40, lineHeight: 40, marginRight: 12 }, libraryTitle: { color: '#E8EFEB', fontSize: 20, fontWeight: '800' }, libraryHero: { color: '#F3F7F5', fontSize: 36, lineHeight: 41, fontWeight: '800', letterSpacing: -1 }, libraryStats: { flexDirection: 'row', backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', borderRadius: 20, paddingVertical: 17, marginBottom: 22 }, actionCard: { flexDirection: 'row', alignItems: 'center', minHeight: 86, borderRadius: 19, backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', padding: 14, marginBottom: 12 }, actionIcon: { width: 48, height: 48, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }, actionIconText: { color: '#68D7A2', fontWeight: '900', fontSize: 23 }, actionCopy: { flex: 1, paddingHorizontal: 13 }, actionTitle: { color: '#E9F0EC', fontSize: 15, fontWeight: '800' }, actionText: { color: '#84918A', fontSize: 12, lineHeight: 17, marginTop: 3 }, actionArrow: { color: '#5F6C65', fontSize: 28 }, report: { backgroundColor: '#13251E', borderRadius: 15, padding: 15, marginTop: 8 }, reportText: { color: '#8BE4B7', fontSize: 13, fontWeight: '700', lineHeight: 19 }, formatCard: { marginTop: 22, borderTopWidth: 1, borderTopColor: '#28312D', paddingTop: 20 }, formatTitle: { color: '#DDE6E1', fontWeight: '800', marginBottom: 7 }, formatText: { color: '#84918A', fontSize: 12, lineHeight: 19 },
  preparePage: { padding: 22, paddingBottom: 36, backgroundColor: '#0A0E0D' }, prepareEyebrow: { color: '#748079', fontSize: 11, fontWeight: '900', letterSpacing: 1.4 }, prepareBadge: { width: 58, height: 58, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginBottom: 18 }, prepareBadgeText: { fontSize: 20, fontWeight: '900' }, prepareTitle: { color: '#F2F7F4', fontSize: 36, lineHeight: 40, fontWeight: '900', letterSpacing: -1 }, prepareMeta: { color: '#85918B', fontSize: 13, marginTop: 9, marginBottom: 28 }, calmCard: { backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', borderRadius: 21, padding: 18, marginBottom: 12 }, calmTitle: { color: '#E9F0EC', fontSize: 16, fontWeight: '800' }, calmText: { color: '#89968F', fontSize: 12, lineHeight: 18, marginTop: 5 }, tensionRow: { flexDirection: 'row', gap: 9, marginTop: 18 }, tensionButton: { flex: 1, aspectRatio: 1, maxHeight: 48, borderRadius: 14, borderWidth: 1, borderColor: '#303A35', alignItems: 'center', justifyContent: 'center' }, tensionActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, tensionText: { color: '#A4B0AA', fontWeight: '800' }, tensionTextActive: { color: '#07110C' }, tensionLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 }, tensionLabel: { color: '#626F68', fontSize: 10 }, breathCard: { backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', borderRadius: 21, padding: 16, marginBottom: 18, flexDirection: 'row', alignItems: 'center' }, breathOrb: { width: 54, height: 54, borderRadius: 27, backgroundColor: '#202A25', borderWidth: 1, borderColor: '#344139', alignItems: 'center', justifyContent: 'center' }, breathOrbActive: { borderColor: '#68D7A2', backgroundColor: '#163024' }, breathOrbText: { color: '#B7E8CE', fontWeight: '900', fontSize: 16 }, breathCopy: { flex: 1, paddingHorizontal: 13 }, breathButton: { paddingVertical: 9, paddingHorizontal: 11 }, breathButtonText: { color: '#7DDEAD', fontWeight: '800', fontSize: 12 }, reassurance: { color: '#A5B0AA', fontSize: 13, lineHeight: 20, textAlign: 'center', marginHorizontal: 12, marginBottom: 20 }, healthNote: { color: '#5F6B65', fontSize: 10, lineHeight: 15, textAlign: 'center', marginTop: 16 },
  searchPage: { flex: 1, paddingTop: 20, backgroundColor: '#0A0E0D' }, searchInput: { marginHorizontal: 22, height: 58, borderRadius: 17, borderWidth: 1, borderColor: '#303B36', backgroundColor: '#131917', color: '#EFF5F2', fontSize: 16, paddingHorizontal: 17 }, searchHint: { color: '#748079', fontSize: 11, marginHorizontal: 24, marginTop: 9 }, searchResults: { padding: 22, gap: 10, paddingBottom: 120 }, searchResult: { minHeight: 74, borderRadius: 17, backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', padding: 13, flexDirection: 'row', alignItems: 'center' }, searchResultActive: { borderColor: '#68D7A2', backgroundColor: '#12231C' }, searchCheck: { width: 28, height: 28, borderRadius: 9, borderWidth: 1, borderColor: '#39443E', marginRight: 12, alignItems: 'center', justifyContent: 'center' }, searchCheckActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, searchCheckText: { color: '#07110C', fontWeight: '900' }, searchQuestion: { color: '#E5ECE8', fontSize: 14, fontWeight: '700', lineHeight: 19 }, searchTags: { color: '#6F7C75', fontSize: 10, marginTop: 4 }, searchFooter: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: 18, backgroundColor: '#0A0E0DEE', borderTopWidth: 1, borderTopColor: '#222B27' },
});
