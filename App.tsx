import { StatusBar } from 'expo-status-bar';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator, Alert, BackHandler, Image, ImageSourcePropType, Keyboard, KeyboardAvoidingView, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View,
} from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { AdminQuestion, QuestionReportReason, adminDeleteQuestion, adminUpdateQuestionDifficulty, clearSessionDraft, getAdminQuestions, getDailyVocabularyQuestions, getDashboardStats, getFavoriteQuestions, getFilteredQuestions, getLanguageProgress, getLanguageQuestions, getLibraryStats, getRandomQuestionByDifficulty, getRandomTopicQuestionsByDifficulty, getRecentSessions, getReviewQuestions, getSessionDraft, getTaggedQuestions, getTopicProgress, getTopics, initializeDatabase, reportQuestion, saveSession, saveSessionDraft, searchQuestions, toggleFavorite } from './src/database';
import { CefrLevel, DashboardStats, Difficulty, GeoPoint, LanguageCode, LanguageProgressCell, LanguageSessionFilters, LanguageSkill, LibraryStats, QuizQuestion, RecentSession, SessionAnswer, SessionDraft, SessionFilters, Topic, TopicProgress } from './src/domain';
import { createAndShareQuestionReports, createAndShareQuizPack, importCsvQuizPackDraft, pickAndImportQuizPack, pickCsvQuizPackDraft } from './src/quizPack';
import { gradeMapPoint, gradeMultiText, isFreeTextCorrect } from './src/quizEngine';
import { palette } from './src/theme';
import { summarizeByInteraction } from './src/sessionSummary';
import { subthemesForTopics } from './src/subthemes';
import { franceDepartmentBoundaryGeoJson, worldBoundaryGeoJson } from './src/mapBoundaries';

type Screen = 'home' | 'configure' | 'languages' | 'quiz' | 'result' | 'library' | 'search' | 'admin';
const emptyStats: DashboardStats = { answered: 0, correct: 0, sessions: 0, streakDays: 0, dueReview: 0 };
const QUESTION_IMAGES: Record<string, ImageSourcePropType> = {
  'mona-lisa': require('./assets/questions/mona-lisa.jpg'),
  'the-thinker': require('./assets/questions/the-thinker.jpg'),
  'starry-night': require('./assets/questions/starry-night.jpg'),
  'girl-pearl-earring': require('./assets/questions/girl-pearl-earring.jpg'),
  'birth-venus': require('./assets/questions/birth-venus.jpg'),
  'liberty-leading': require('./assets/questions/liberty-leading.jpg'),
  'great-wave': require('./assets/questions/great-wave.jpg'),
  'venus-milo': require('./assets/questions/venus-milo.jpg'),
  'david-michelangelo': require('./assets/questions/david-michelangelo.jpg'),
  'winged-victory': require('./assets/questions/winged-victory.jpg'),
  'notre-dame-paris': require('./assets/questions/notre-dame-paris.jpg'),
  'colosseum': require('./assets/questions/colosseum.jpg'),
  'parthenon': require('./assets/questions/parthenon.jpg'),
  'sagrada-familia': require('./assets/questions/sagrada-familia.jpg'),
  'eiffel-tower': require('./assets/questions/eiffel-tower.jpg'),
  'villa-savoye': require('./assets/questions/villa-savoye.jpg'),
};
const OFFLINE_SATELLITE_URI = Image.resolveAssetSource(require('./assets/maps/blue-marble-world.jpg')).uri;
export default function App() {
  const [ready, setReady] = useState(false);
  const [screen, setScreen] = useState<Screen>('home');
  const navigationHistory = useRef<Screen[]>([]);
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
  const [progress, setProgress] = useState<TopicProgress[]>([]);
  const [recentSessions, setRecentSessions] = useState<RecentSession[]>([]);
  const [languageProgress, setLanguageProgress] = useState<LanguageProgressCell[]>([]);

  const refreshStats = async () => setStats(await getDashboardStats());
  const refreshTopics = async () => setAvailableTopics(await getTopics());
  const refreshRecentSessions = async () => setRecentSessions(await getRecentSessions());
  const refreshLanguageProgress = async () => setLanguageProgress(await getLanguageProgress());
  const refreshProgress = async () => {
    try {
      setProgress(await getTopicProgress());
    } catch {
      setProgress([]);
    }
  };

  function navigateTo(nextScreen: Screen, options: { replace?: boolean } = {}) {
    setScreen((current) => {
      if (current === nextScreen) return current;
      if (options.replace) {
        navigationHistory.current = [];
      } else {
        navigationHistory.current = [...navigationHistory.current, current].slice(-12);
      }
      return nextScreen;
    });
  }

  function goBackInApp() {
    const previous = navigationHistory.current.pop();
    setScreen(previous ?? 'home');
  }

  useEffect(() => {
    initializeDatabase().then(async () => {
      await Promise.all([refreshStats(), refreshTopics(), refreshRecentSessions(), refreshLanguageProgress()]);
      setDraft(await getSessionDraft());
      setReady(true);
      void refreshProgress();
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
      navigateTo('languages');
      return;
    }
    setInitialTopicIds([nextTopic.id]);
    navigateTo('configure');
  }

  async function launchLanguageSession(filters: LanguageSessionFilters) {
    const nextQuiz = await getLanguageQuestions(filters);
    if (!nextQuiz.length) {
      Alert.alert('Parcours à enrichir', 'Aucune question ne correspond encore à cette combinaison. Ajoute une compétence ou change de niveau.');
      return;
    }
    const names: Record<LanguageCode, string> = { es: 'Espagnol', de: 'Allemand', it: 'Italien' };
    prepareSession(
      { id: `language-${filters.language}-${filters.level}`, title: `${names[filters.language]} - ${filters.level}`, subtitle: 'Parcours linguistique ciblé', icon: filters.language.toUpperCase(), color: '#5FB8C9' },
      nextQuiz,
    );
  }

  async function launchDailyVocabulary(filters: Pick<LanguageSessionFilters, 'language' | 'level'>) {
    const nextQuiz = await getDailyVocabularyQuestions(filters);
    if (!nextQuiz.length) {
      Alert.alert('Vocabulaire à enrichir', 'Aucun mot fréquentiel ne correspond encore à cette langue et ce niveau.');
      return;
    }
    const names: Record<LanguageCode, string> = { es: 'Espagnol', de: 'Allemand', it: 'Italien' };
    prepareSession(
      { id: `daily-vocab-${filters.language}-${filters.level}`, title: `10 mots du jour - ${names[filters.language]}`, subtitle: `Quiz aller-retour niveau ${filters.level}`, icon: '10', color: '#E6B759' },
      nextQuiz,
    );
  }

  function configureMixedSession() {
    setInitialTopicIds([]);
    navigateTo('configure');
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

  async function launchProgressSession(nextTopic: Topic, difficulty: Difficulty) {
    const nextQuiz = await getFilteredQuestions({ topicIds: [nextTopic.id], difficulties: [difficulty], limit: 10 });
    if (!nextQuiz.length) {
      Alert.alert('Aucune question', 'Ce theme ne contient pas encore ce niveau de difficulte.');
      return;
    }
    prepareSession(
      { ...nextTopic, subtitle: `Session courte - niveau ${difficulty}` },
      nextQuiz,
    );
  }

  async function launchEnduranceSession(difficulty: Difficulty) {
    const picked = await getRandomTopicQuestionsByDifficulty(difficulty, 10);
    if (!picked?.questions.length) {
      Alert.alert('Rien à lancer', 'Aucun thème ne contient encore ce niveau de difficulté.');
      return;
    }
    prepareSession(
      { ...picked.topic, title: `Endurance - ${picked.topic.title}`, subtitle: `Thème tiré au hasard - niveau ${difficulty}` },
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
      { id: `infinite-${difficulty}`, title: `Infini - Niveau ${difficulty}`, subtitle: 'Thèmes tirés au hasard', icon: '∞', color: '#8FB3FF' },
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
    navigateTo('quiz');
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
    navigateTo('quiz');
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

  function handleReportQuestion() {
    const question = quiz[questionIndex];
    const submit = async (reason: QuestionReportReason) => {
      await reportQuestion(question.id, reason);
      Haptics.selectionAsync();
    };
    Alert.alert('Signaler la question', 'Le signalement reste local.', [
      { text: 'Ambigue', onPress: () => submit('ambiguous') },
      {
        text: 'Difficulte',
        onPress: () => Alert.alert('Difficulte', 'Choisis le probleme.', [
          { text: 'Trop facile', onPress: () => submit('too-easy') },
          { text: 'Trop dure', onPress: () => submit('too-hard') },
          { text: 'Annuler', style: 'cancel' },
        ]),
      },
      { text: 'A reformuler', onPress: () => submit('reword') },
    ]);
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
    await refreshProgress();
    await refreshRecentSessions();
    await refreshLanguageProgress();
    navigateTo('result', { replace: true });
  }

  async function closeQuiz() {
    if (infiniteDifficulty) {
      if (topic && answers.length) await saveSession(topic.id, answers);
      await clearSessionDraft();
      setDraft(null);
      await refreshStats();
      await refreshProgress();
      await refreshRecentSessions();
      await refreshLanguageProgress();
    }
    setInfiniteDifficulty(null);
    navigateTo('home', { replace: true });
  }

  useEffect(() => {
    if (Platform.OS !== 'android') return undefined;
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (screen === 'home') return true;
      if (screen === 'quiz') {
        void closeQuiz();
        return true;
      }
      if (screen === 'admin') {
        void Promise.all([refreshTopics(), refreshStats(), refreshProgress()]).then(() => navigateTo('library', { replace: true }));
        return true;
      }
      goBackInApp();
      return true;
    });
    return () => subscription.remove();
  }, [screen, topic, quiz, questionIndex, answers, infiniteDifficulty]);

  if (!ready) {
    return <View style={styles.loading}><ActivityIndicator color="#2F6B55" size="large" /><Text style={styles.loadingText}>Préparation de ta bibliothèque…</Text></View>;
  }

  return (
    <View style={styles.safe}>
      <StatusBar style="light" />
      {screen === 'home' && <HomeV2 stats={stats} topics={availableTopics} progress={progress} recentSessions={recentSessions} draft={draft} onResume={resumeSession} onStart={startQuiz} onProgressCell={launchProgressSession} onLanguages={() => navigateTo('languages')} onCompose={configureMixedSession} onEndurance={launchEnduranceSession} onInfinite={launchInfiniteSession} onReview={() => startCollection('review')} onFavorites={() => startCollection('favorites')} onMaps={() => startCollection('maps')} onSearch={() => navigateTo('search')} onLibrary={() => navigateTo('library')} />}
      {screen === 'configure' && <SessionConfigurator topics={availableTopics} initialTopicIds={initialTopicIds} onClose={() => navigateTo('home', { replace: true })} onStart={launchConfiguredSession} />}
      {screen === 'languages' && <LanguageHub progress={languageProgress} onClose={() => navigateTo('home', { replace: true })} onStart={launchLanguageSession} onDailyVocabulary={launchDailyVocabulary} />}
      {screen === 'quiz' && topic && quiz.length > 0 && (
        <Quiz
          topic={topic} questions={quiz} index={questionIndex} selected={selected} freeText={freeText}
          fieldValues={fieldValues} answerCredit={answers.at(-1)?.credit ?? (answers.at(-1)?.correct ? 1 : 0)} onFieldChange={(id, value) => setFieldValues((current) => ({ ...current, [id]: value }))} onSubmitMultiText={submitMultiText}
          mapGuess={mapGuess} onMapGuess={setMapGuess} onSubmitMapPoint={submitMapPoint}
          answerCorrect={answers.at(-1)?.correct ?? false} onFreeTextChange={setFreeText} onSubmitFreeText={submitFreeText}
          confidence={answers.at(-1)?.questionId === quiz[questionIndex].id ? answers.at(-1)?.confidence : undefined} onConfidence={setAnswerConfidence}
          infiniteDifficulty={infiniteDifficulty}
          onSelect={selectAnswer} onToggleFavorite={handleToggleFavorite} onReportQuestion={handleReportQuestion} onContinue={continueQuiz} onClose={closeQuiz}
        />
      )}
      {screen === 'result' && topic && (
        <Result topic={topic} questions={quiz} answers={answers} onAgain={() => prepareSession(topic, quiz)} onHome={() => navigateTo('home', { replace: true })} />
      )}
      {screen === 'library' && <Library onClose={async () => { await refreshTopics(); navigateTo('home', { replace: true }); }} onAdmin={() => navigateTo('admin')} />}
      {screen === 'search' && <Search onClose={() => navigateTo('home', { replace: true })} onStart={(questions) => prepareSession({ id: 'search', title: 'Recherche', subtitle: 'Sélection personnelle', icon: '?', color: '#68D7A2' }, questions)} />}
      {screen === 'admin' && <AdminPanel topics={availableTopics} onClose={async () => { await Promise.all([refreshTopics(), refreshStats(), refreshProgress()]); navigateTo('library', { replace: true }); }} />}
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

type HomeProps = { stats: DashboardStats; topics: Topic[]; progress: TopicProgress[]; recentSessions: RecentSession[]; draft: SessionDraft | null; onResume: () => void; onStart: (topic: Topic) => void; onProgressCell: (topic: Topic, difficulty: Difficulty) => void; onLanguages: () => void; onCompose: () => void; onEndurance: (difficulty: Difficulty) => void; onInfinite: (difficulty: Difficulty) => void; onReview: () => void; onFavorites: () => void; onMaps: () => void; onSearch: () => void; onLibrary: () => void };

function HomeV2({ stats, topics, progress, recentSessions, draft, onResume, onStart, onProgressCell, onLanguages, onCompose, onEndurance, onInfinite, onReview, onFavorites, onMaps, onSearch, onLibrary }: HomeProps) {
  const { width } = useWindowDimensions();
  const pagerRef = useRef<ScrollView>(null);
  const [homePage, setHomePage] = useState(0);
  const [homePageProgress, setHomePageProgress] = useState(0);
  const accuracy = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;
  const recommendation = getHomeRecommendation(stats, draft);
  const cultureTopics = topics.filter((item) => item.id !== 'language');
  const homeTabs = ['Dashboard', 'Culture', 'Langues'];
  const runRecommendation = () => {
    if (recommendation.action === 'resume') onResume();
    else if (recommendation.action === 'review') onReview();
    else if (recommendation.action === 'compose') onCompose();
    else onEndurance(2);
  };
  const updateHomePageProgress = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const progress = Math.max(0, Math.min(2, event.nativeEvent.contentOffset.x / width));
    setHomePageProgress(progress);
    setHomePage(Math.round(progress));
  };
  const goToHomePage = (index: number) => {
    setHomePage(index);
    setHomePageProgress(index);
    pagerRef.current?.scrollTo({ x: width * index, animated: true });
  };
  return (
    <View style={styles.homeRoot}>
      <View style={styles.brandRow}><Image source={require('./assets/kizz-logo-v2.png')} style={styles.logoImage} /><Text style={styles.brand}>Kizz</Text><Pressable onPress={onLibrary} style={styles.libraryShortcut}><Text style={styles.libraryShortcutText}>Banques</Text></Pressable></View>
      <View style={styles.homeTabs}>
        <View style={[styles.homeTabIndicator, { transform: [{ translateX: ((width - 44) / 3) * homePageProgress }] }]} />
        {homeTabs.map((label, index) => (
          <Pressable key={label} testID={`home-tab-${index}`} accessibilityRole="tab" accessibilityState={{ selected: homePage === index }} onPress={() => goToHomePage(index)} style={styles.homeTab}>
            <Text style={[styles.homeTabText, homePage === index && styles.homeTabActive]}>{label}</Text>
          </Pressable>
        ))}
      </View>
      <ScrollView ref={pagerRef} horizontal pagingEnabled showsHorizontalScrollIndicator={false} decelerationRate="fast" onScroll={updateHomePageProgress} scrollEventThrottle={16} style={styles.homePager}>
        <ScrollView style={{ width }} contentContainerStyle={styles.homePanel} showsVerticalScrollIndicator={false}>
          <View style={styles.dashboardHeader}><Text style={styles.dashboardTitle}>Tableau de bord</Text><Text style={styles.dashboardCaption}>Progression locale</Text></View>
          <View style={styles.kpiGrid}>
            <Kpi value={String(stats.sessions)} label="Sessions" accent="#68D7A2" />
            <Kpi value={String(stats.answered)} label="Reponses" accent="#75A7FF" />
            <Kpi value={`${accuracy}%`} label="Precision" accent="#E6B759" />
            <Kpi value={String(stats.dueReview)} label="A reviser" accent="#D982AD" />
          </View>
          <ProgressMatrix progress={progress} onCompose={onCompose} onStartCell={onProgressCell} />
          <RecentSessions sessions={recentSessions} />
          {draft && <Pressable testID="resume-session" accessibilityRole="button" onPress={onResume} style={styles.resumeCard}><View style={styles.resumeProgress}><View style={[styles.resumeProgressFill, { width: `${Math.round(((draft.questionIndex + 1) / draft.questions.length) * 100)}%`, backgroundColor: draft.topic.color }]} /></View><Text style={styles.resumeEyebrow}>SESSION EN COURS</Text><View style={styles.resumeRow}><View><Text style={styles.resumeTitle}>{draft.topic.title}</Text><Text style={styles.resumeText}>Question {draft.questionIndex + 1} sur {draft.questions.length}</Text></View><Text style={[styles.resumeArrow, { color: draft.topic.color }]}>Reprendre -&gt;</Text></View></Pressable>}
          <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Prochaine action</Text><Text style={styles.sectionHint}>utile, courte</Text></View>
          <Pressable testID="recommended-action" accessibilityRole="button" onPress={runRecommendation} style={({ pressed }) => [styles.recommendCard, pressed && styles.pressed]}>
            <View style={[styles.recommendRail, { backgroundColor: recommendation.color }]} />
            <View style={{ flex: 1 }}><Text style={styles.recommendEyebrow}>PROCHAINE ACTION UTILE</Text><Text style={styles.recommendTitle}>{recommendation.title}</Text><Text style={styles.recommendText}>{recommendation.text}</Text></View>
            <Text style={[styles.recommendAction, { color: recommendation.color }]}>{recommendation.label}</Text>
          </Pressable>
          <View style={styles.quickRow}>
            <Pressable testID="review-errors" accessibilityRole="button" onPress={onReview} style={styles.quickAction}><Text style={styles.quickIcon}>R</Text><Text style={styles.quickText}>Mes erreurs</Text></Pressable>
            <Pressable testID="favorites" accessibilityRole="button" onPress={onFavorites} style={styles.quickAction}><Text style={styles.quickIcon}>*</Text><Text style={styles.quickText}>Favoris</Text></Pressable>
            <Pressable testID="map-session" accessibilityRole="button" onPress={onMaps} style={styles.quickAction}><Text style={styles.quickIcon}>+</Text><Text style={styles.quickText}>Cartes</Text></Pressable>
            <Pressable testID="search" accessibilityRole="button" onPress={onSearch} style={styles.quickAction}><Text style={styles.quickIcon}>?</Text><Text style={styles.quickText}>Rechercher</Text></Pressable>
          </View>
          <Text style={styles.privacy}>Tes reponses restent sur ce telephone. Aucun compte requis.</Text>
        </ScrollView>

        <ScrollView style={{ width }} contentContainerStyle={styles.homePanel} showsVerticalScrollIndicator={false}>
          <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Quiz culture</Text><Text style={styles.sectionHint}>{cultureTopics.length} parcours</Text></View>
          <View style={styles.modeStack}>
            <Pressable testID="compose-session" accessibilityRole="button" onPress={onCompose} style={({ pressed }) => [styles.composeCard, pressed && styles.pressed]}><View><Text style={styles.composeEyebrow}>SESSION SUR MESURE</Text><Text style={styles.composeTitle}>Themes + difficultes</Text><Text style={styles.modeText}>Compose un mix: mono-theme, multi-theme, niveau fixe ou croise.</Text></View><Text style={styles.composeArrow}>-&gt;</Text></Pressable>
            <View style={styles.enduranceCard}><View style={{ flex: 1 }}><Text style={styles.composeEyebrow}>MODE ENDURANCE</Text><Text style={styles.composeTitle}>Theme aleatoire par difficulte</Text><Text style={styles.enduranceText}>Choisis le niveau, Kizz tire le theme et lance 10 questions.</Text></View><View style={styles.enduranceButtons}>{([1, 2, 3] as Difficulty[]).map((difficulty) => <Pressable key={difficulty} testID={`endurance-${difficulty}`} accessibilityRole="button" onPress={() => onEndurance(difficulty)} style={({ pressed }) => [styles.enduranceButton, pressed && styles.pressed]}><Text style={styles.enduranceButtonText}>{difficulty}</Text><Text style={styles.enduranceDots}>{'o'.repeat(difficulty)}</Text></Pressable>)}</View></View>
            <View style={styles.infiniteCard}><View style={{ flex: 1 }}><Text style={styles.infiniteEyebrow}>MODE INFINI CALME</Text><Text style={styles.composeTitle}>Difficulte fixe, themes aleatoires</Text><Text style={styles.infiniteText}>Une question apres l'autre, avec sortie visible et sauvegarde locale.</Text></View><View style={styles.enduranceButtons}>{([1, 2, 3] as Difficulty[]).map((difficulty) => <Pressable key={difficulty} testID={`infinite-${difficulty}`} accessibilityRole="button" onPress={() => onInfinite(difficulty)} style={({ pressed }) => [styles.infiniteButton, pressed && styles.pressed]}><Text style={styles.infiniteButtonText}>{difficulty}</Text><Text style={styles.infiniteDots}>inf</Text></Pressable>)}</View></View>
          </View>
          <View style={styles.sectionRow}><Text style={styles.sectionTitle}>Themes</Text><Text style={styles.sectionHint}>QCM, texte, carte</Text></View>
          <View style={styles.topicGrid}>
            {cultureTopics.map((item) => (
              <Pressable key={item.id} testID={`topic-${item.id}`} accessibilityRole="button" accessibilityLabel={`Commencer le theme ${item.title}`} onPress={() => onStart(item)} style={({ pressed }) => [styles.topicCard, pressed && styles.pressed]}>
                <View style={[styles.topicIcon, { backgroundColor: `${item.color}1A` }]}><Text style={[styles.topicIconText, { color: item.color }]}>{item.icon}</Text></View>
                <Text style={styles.topicTitle}>{item.title}</Text><Text style={styles.topicSubtitle}>{item.subtitle}</Text>
                <Text style={[styles.go, { color: item.color }]}>Commencer -&gt;</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        <ScrollView style={{ width }} contentContainerStyle={styles.homePanel} showsVerticalScrollIndicator={false}>
          <View style={styles.languagePanelHero}><Text style={styles.languagePanelEyebrow}>LANGUES</Text><Text style={styles.languagePanelTitle}>Une langue a la fois.</Text><Text style={styles.languagePanelText}>Cours courts, vocabulaire frequent, conjugaison en texte libre, puis quiz pour verifier.</Text></View>
          <Pressable testID="language-hub" accessibilityRole="button" onPress={onLanguages} style={({ pressed }) => [styles.languageHero, pressed && styles.pressed]}><View style={styles.languageHeroIcon}><Text style={styles.languageHeroIconText}>Aa</Text></View><View style={{ flex: 1 }}><Text style={styles.languageHeroEyebrow}>PARCOURS DEDIE</Text><Text style={styles.languageHeroTitle}>Espagnol, Allemand, Italien</Text><Text style={styles.languageHeroText}>Choisis langue, niveau et competence.</Text></View><Text style={styles.composeArrow}>-&gt;</Text></Pressable>
          <View style={styles.languageMiniGrid}>{LANGUAGE_OPTIONS.map((item) => <View key={item.code} style={styles.languageMiniCard}><Text style={styles.languageMiniCode}>{item.code.toUpperCase()}</Text><Text style={styles.languageMiniName}>{item.name}</Text><Text style={styles.languageMiniText}>Vocabulaire, lecture, ecriture, culture.</Text></View>)}</View>
          <Text style={styles.privacy}>Objectif: progresser sans bruit. Sessions finies, reprise possible.</Text>
        </ScrollView>
      </ScrollView>
    </View>
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
  { id: 'lesson', title: 'Mini-cours guidés', detail: 'Conjugaisons, règles et pièges utiles' },
  { id: 'reading', title: 'Compréhension écrite', detail: 'Phrases, consignes et textes courts' },
  { id: 'writing', title: 'Expression écrite', detail: 'Produire la forme attendue sans QCM' },
  { id: 'culture', title: 'Culture', detail: 'Repères du monde hispanique, germanique ou italien' },
];

function LanguageHub({ progress, onClose, onStart, onDailyVocabulary }: { progress: LanguageProgressCell[]; onClose: () => void; onStart: (filters: LanguageSessionFilters) => void; onDailyVocabulary: (filters: Pick<LanguageSessionFilters, 'language' | 'level'>) => void }) {
  const [language, setLanguage] = useState<LanguageCode>('es');
  const [level, setLevel] = useState<CefrLevel>('A1');
  const [skills, setSkills] = useState<LanguageSkill[]>(LANGUAGE_SKILLS.map((skill) => skill.id));
  const [limit, setLimit] = useState<5 | 10 | 20>(5);
  const toggleSkill = (skill: LanguageSkill) => setSkills((current) => current.includes(skill) ? current.filter((item) => item !== skill) : [...current, skill]);
  const currentProgress = CEFR_LEVELS.map((item) => progress.find((cell) => cell.language === language && cell.level === item) ?? { language, level: item, answered: 0, score: 0, accuracy: 0 });
  const currentLevelProgress = currentProgress.find((cell) => cell.level === level);
  return (
    <ScrollView contentContainerStyle={styles.languagePage} showsVerticalScrollIndicator={false}>
      <View style={styles.libraryHeader}><Pressable onPress={onClose} hitSlop={16}><Text style={styles.back}>‹</Text></Pressable><Text style={styles.libraryTitle}>Parcours Langues</Text></View>
      <Text style={styles.configTitle}>Une langue à la fois.</Text><Text style={styles.configLead}>Un parcours ciblé, progressif et entièrement hors ligne.</Text>
      <Text style={styles.configSection}>LANGUE CIBLE</Text>
      <View style={styles.languageChoices}>{LANGUAGE_OPTIONS.map((item) => <Pressable key={item.code} testID={`language-${item.code}`} onPress={() => setLanguage(item.code)} style={[styles.languageChoice, language === item.code && styles.languageChoiceActive]}><Text style={[styles.languageChoiceName, language === item.code && styles.filterChipTextActive]}>{item.name}</Text><Text style={styles.languageChoiceNative}>{item.native}</Text></Pressable>)}</View>
      <Text style={styles.configSection}>NIVEAU CECRL</Text>
      <View style={styles.cefrRow}>{CEFR_LEVELS.map((item) => <Pressable key={item} testID={`cefr-${item}`} onPress={() => setLevel(item)} style={[styles.cefrButton, level === item && styles.filterChipActive]}><Text style={[styles.cefrText, level === item && styles.filterChipTextActive]}>{item}</Text></Pressable>)}</View>
      <View style={styles.languageProgressCard}>
        <View style={styles.languageProgressHeader}><Text style={styles.languageProgressTitle}>Progression {LANGUAGE_OPTIONS.find((item) => item.code === language)?.name}</Text><Text style={styles.languageProgressMeta}>{currentLevelProgress?.answered ?? 0} rep. niveau {level}</Text></View>
        <View style={styles.languageProgressGrid}>{currentProgress.map((cell) => <Pressable key={cell.level} onPress={() => setLevel(cell.level)} style={[styles.languageProgressCell, level === cell.level && styles.languageProgressCellActive]}><Text style={[styles.languageProgressLevel, level === cell.level && styles.filterChipTextActive]}>{cell.level}</Text><Text style={styles.languageProgressAccuracy}>{cell.answered ? `${cell.accuracy}%` : '-'}</Text><Text style={styles.languageProgressCount}>{cell.answered} rep.</Text></Pressable>)}</View>
      </View>
      <Text style={styles.levelHelp}>{level === 'A1' ? 'Débutant : mots et phrases indispensables.' : level === 'A2' ? 'Élémentaire : situations courantes.' : level === 'B1' ? 'Intermédiaire : comprendre et raconter.' : level === 'B2' ? 'Avancé : nuances et argumentation.' : 'Autonome : idiomes, registre et culture fine.'}</Text>
      <Text style={styles.configSection}>COMPÉTENCES</Text>
      <View style={styles.skillList}>{LANGUAGE_SKILLS.map((item) => { const active = skills.includes(item.id); return <Pressable key={item.id} testID={`language-skill-${item.id}`} onPress={() => toggleSkill(item.id)} style={[styles.skillCard, active && styles.skillCardActive]}><View style={[styles.skillCheck, active && styles.skillCheckActive]}><Text style={styles.searchCheckText}>{active ? '✓' : ''}</Text></View><View style={{ flex: 1 }}><Text style={styles.skillTitle}>{item.title}</Text><Text style={styles.skillDetail}>{item.detail}</Text></View></Pressable>; })}</View>
      <Text style={styles.configSection}>LONGUEUR MAXIMALE</Text>
      <View style={styles.lengthRow}>{([5, 10, 20] as const).map((item) => <Pressable key={item} onPress={() => setLimit(item)} style={[styles.lengthButton, limit === item && styles.lengthButtonActive]}><Text style={[styles.lengthValue, limit === item && styles.lengthValueActive]}>{item}</Text><Text style={styles.lengthLabel}>questions</Text></Pressable>)}</View>
      <View style={styles.languageMethod}><Text style={styles.languageMethodTitle}>Méthode fréquence</Text><Text style={styles.languageMethodText}>Le vocabulaire est organisé par bandes de fréquence. Le socle commence par les mots les plus utiles avant d’élargir progressivement vers un lexique de 10 000 mots.</Text></View>
      <Pressable testID="daily-vocabulary" onPress={() => onDailyVocabulary({ language, level })} style={styles.dailyVocabCard}>
        <View><Text style={styles.dailyVocabEyebrow}>RITUEL COURT</Text><Text style={styles.dailyVocabTitle}>10 mots du jour</Text><Text style={styles.dailyVocabText}>Lis les mots utiles, puis vérifie dans les deux sens: vers le français et depuis le français.</Text></View>
        <Text style={styles.composeArrow}>→</Text>
      </Pressable>
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
      <Text style={styles.searchHint}>{query.length < 2 ? 'Saisis au moins deux caractères.' : `${results.length} résultat(s) - touche pour sélectionner`}</Text>
      <ScrollView contentContainerStyle={styles.searchResults} keyboardShouldPersistTaps="handled">
        {results.map((question) => {
          const active = selectedIds.includes(question.id);
          return <Pressable key={question.id} onPress={() => toggle(question.id)} style={[styles.searchResult, active && styles.searchResultActive]}><View style={[styles.searchCheck, active && styles.searchCheckActive]}><Text style={styles.searchCheckText}>{active ? '✓' : ''}</Text></View><View style={{ flex: 1 }}><Text style={styles.searchQuestion}>{question.prompt}</Text><Text style={styles.searchTags}>{question.tags.join(' - ')}</Text></View></Pressable>;
        })}
      </ScrollView>
      <View style={styles.searchFooter}><Pressable disabled={!selected.length} onPress={() => onStart(selected)} style={[styles.primaryButton, !selected.length && styles.disabled]}><Text style={styles.primaryButtonText}>Lancer {selected.length || ''} question{selected.length > 1 ? 's' : ''}</Text></Pressable></View>
    </View>
  );
}

function Library({ onClose, onAdmin }: { onClose: () => void; onAdmin: () => void }) {
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

  async function handleImportCsv() {
    setBusy(true);
    try {
      const draft = await pickCsvQuizPackDraft();
      if (!draft) return;
      setBusy(false);
      const sample = draft.preview.samplePrompts.map((prompt) => `- ${prompt}`).join('\n');
      Alert.alert('Importer ce CSV ?', `${draft.preview.questions} question(s), ${draft.preview.topics} theme(s).\n${sample}`, [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Importer',
          onPress: async () => {
            setBusy(true);
            try {
              const report = await importCsvQuizPackDraft(draft);
              const summary = `${report.questionsAdded} ajoutee(s), ${report.questionsSkipped} doublon(s) ignore(s)`;
              setLastReport(`${report.bankName}: ${summary}.`);
              await refresh();
              Alert.alert('Import termine', summary);
            } catch (error) {
              Alert.alert('Import impossible', error instanceof Error ? error.message : 'Le CSV n a pas pu etre importe.');
            } finally { setBusy(false); }
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Import impossible', error instanceof Error ? error.message : 'Le CSV n a pas pu etre lu.');
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

  async function handleExportReports() {
    setBusy(true);
    try {
      await createAndShareQuestionReports();
      setLastReport('Export des signalements prêt.');
    } catch (error) {
      Alert.alert('Export impossible', error instanceof Error ? error.message : 'Les signalements n’ont pas pu être exportés.');
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
      <Pressable disabled={busy} onPress={handleImportCsv} style={[styles.actionCard, busy && styles.disabled]}>
        <View style={[styles.actionIcon, { backgroundColor: '#17231F' }]}><Text style={[styles.actionIconText, { color: '#68D7A2' }]}>CSV</Text></View>
        <View style={styles.actionCopy}><Text style={styles.actionTitle}>Importer un CSV</Text><Text style={styles.actionText}>Previsualiser puis ajouter QCM ou texte libre</Text></View><Text style={styles.actionArrow}>›</Text>
      </Pressable>
      <Pressable disabled={busy} onPress={handleExport} style={[styles.actionCard, busy && styles.disabled]}>
        <View style={[styles.actionIcon, { backgroundColor: '#EAEAF5' }]}><Text style={[styles.actionIconText, { color: '#5367C7' }]}>↑</Text></View>
        <View style={styles.actionCopy}><Text style={styles.actionTitle}>Exporter la bibliothèque</Text><Text style={styles.actionText}>Créer un JSON et ouvrir la feuille de partage</Text></View><Text style={styles.actionArrow}>›</Text>
      </Pressable>
      <Pressable disabled={busy} onPress={handleExportReports} style={[styles.actionCard, busy && styles.disabled]}>
        <View style={[styles.actionIcon, { backgroundColor: '#241821' }]}><Text style={[styles.actionIconText, { color: '#D982AD' }]}>!</Text></View>
        <View style={styles.actionCopy}><Text style={styles.actionTitle}>Exporter les signalements</Text><Text style={styles.actionText}>Partager les retours locaux sur les questions</Text></View><Text style={styles.actionArrow}>›</Text>
      </Pressable>
      <Pressable onPress={onAdmin} style={styles.actionCard}>
        <View style={[styles.actionIcon, { backgroundColor: '#241D13' }]}><Text style={[styles.actionIconText, { color: '#E6B759' }]}>A</Text></View>
        <View style={styles.actionCopy}><Text style={styles.actionTitle}>Mode admin questions</Text><Text style={styles.actionText}>Consulter, filtrer, masquer et ajuster la difficulté</Text></View><Text style={styles.actionArrow}>›</Text>
      </Pressable>
      {busy && <ActivityIndicator style={{ marginTop: 22 }} color="#2F6B55" />}
      {lastReport && <View style={styles.report}><Text style={styles.reportText}>{lastReport}</Text></View>}
      <View style={styles.formatCard}><Text style={styles.formatTitle}>Format Kizz v1</Text><Text style={styles.formatText}>Chaque pack contient ses thèmes, questions, 4 choix, bonne réponse, explications, difficulté, tags et provenance. Taille maximale: 50 Mo et 100 000 questions par fichier.</Text></View>
    </ScrollView>
  );
}

function AdminPanel({ topics, onClose }: { topics: Topic[]; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [topicId, setTopicId] = useState('all');
  const [questions, setQuestions] = useState<AdminQuestion[]>([]);
  const [busy, setBusy] = useState(false);

  async function load() {
    setBusy(true);
    try {
      setQuestions(await getAdminQuestions({ query, difficulty, topicId, limit: 80 }));
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => { void load(); }, [difficulty, topicId]);

  async function changeDifficulty(questionId: string, nextDifficulty: Difficulty) {
    await adminUpdateQuestionDifficulty(questionId, nextDifficulty);
    await load();
  }

  function deleteQuestion(question: AdminQuestion) {
    Alert.alert('Masquer cette question ?', question.prompt, [
      { text: 'Annuler', style: 'cancel' },
      { text: 'Masquer', style: 'destructive', onPress: async () => { await adminDeleteQuestion(question.id); await load(); } },
    ]);
  }

  return (
    <ScrollView contentContainerStyle={styles.adminPage} keyboardShouldPersistTaps="handled">
      <View style={styles.libraryHeader}><Pressable onPress={onClose} hitSlop={16}><Text style={styles.back}>‹</Text></Pressable><Text style={styles.libraryTitle}>Admin questions</Text></View>
      <Text style={styles.configTitle}>Piloter la banque locale</Text><Text style={styles.configLead}>Les suppressions sont des masquages persistants. Les changements de difficulté survivent aux relances.</Text>
      <View style={styles.adminSearchRow}>
        <TextInput value={query} onChangeText={setQuery} placeholder="Question, tag ou identifiant" placeholderTextColor="#68746E" style={styles.adminSearchInput} returnKeyType="search" onSubmitEditing={load} />
        <Pressable testID="admin-search" onPress={load} style={styles.adminSearchButton}><Text style={styles.adminSearchButtonText}>OK</Text></Pressable>
      </View>
      <Text style={styles.configSection}>DIFFICULTÉ</Text>
      <View style={styles.chipWrap}>
        <Pressable onPress={() => setDifficulty('all')} style={[styles.filterChip, difficulty === 'all' && styles.filterChipActive]}><Text style={[styles.filterChipText, difficulty === 'all' && styles.filterChipTextActive]}>Toutes</Text></Pressable>
        {([1, 2, 3] as Difficulty[]).map((item) => <Pressable key={item} onPress={() => setDifficulty(item)} style={[styles.filterChip, difficulty === item && styles.filterChipActive]}><Text style={[styles.filterChipText, difficulty === item && styles.filterChipTextActive]}>Niveau {item}</Text></Pressable>)}
      </View>
      <Text style={styles.configSection}>THÈME</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.adminTopicRow}>
        <Pressable onPress={() => setTopicId('all')} style={[styles.filterChip, topicId === 'all' && styles.filterChipActive]}><Text style={[styles.filterChipText, topicId === 'all' && styles.filterChipTextActive]}>Tous</Text></Pressable>
        {topics.map((topic) => <Pressable key={topic.id} onPress={() => setTopicId(topic.id)} style={[styles.filterChip, topicId === topic.id && styles.filterChipActive]}><Text style={[styles.filterChipText, topicId === topic.id && styles.filterChipTextActive]}>{topic.title}</Text></Pressable>)}
      </ScrollView>
      <View style={styles.adminSummary}><Text style={styles.adminSummaryText}>{questions.length} question(s) affichée(s)</Text>{busy && <ActivityIndicator color="#68D7A2" />}</View>
      <View style={styles.adminList}>
        {questions.map((question) => (
          <View key={question.id} style={styles.adminQuestionCard}>
            <View style={styles.adminQuestionHeader}><Text style={styles.adminTopic}>{question.topicTitle}</Text><Text style={styles.adminId}>{question.id}</Text></View>
            <Text style={styles.adminPrompt}>{question.prompt}</Text>
            <Text style={styles.adminMeta}>Difficulté {question.difficulty} - {question.type ?? 'multiple-choice'} - {question.answerCount} réponse(s){question.reportCount ? ` - ${question.reportCount} signalement(s)` : ''}</Text>
            <View style={styles.adminActions}>
              {([1, 2, 3] as Difficulty[]).map((item) => <Pressable key={item} onPress={() => changeDifficulty(question.id, item)} style={[styles.adminDifficultyButton, question.difficulty === item && styles.adminDifficultyActive]}><Text style={[styles.adminDifficultyText, question.difficulty === item && styles.adminDifficultyTextActive]}>{item}</Text></Pressable>)}
              <Pressable onPress={() => deleteQuestion(question)} style={styles.adminDeleteButton}><Text style={styles.adminDeleteText}>Masquer</Text></Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <View style={styles.stat}><Text style={styles.statValue}>{value}</Text><Text style={styles.statLabel}>{label}</Text></View>;
}

function ProgressMatrix({ progress, onCompose, onStartCell }: { progress: TopicProgress[]; onCompose: () => void; onStartCell: (topic: Topic, difficulty: Difficulty) => void }) {
  if (!progress.length) {
    return (
      <Pressable testID="progress-empty" onPress={onCompose} style={({ pressed }) => [styles.progressCard, pressed && styles.pressed]}>
        <View style={styles.progressHeader}><Text style={styles.progressTitle}>Matrice locale</Text><Text style={styles.progressHint}>nouveau</Text></View>
        <Text style={styles.progressEmptyTitle}>Commence par une session courte.</Text>
        <Text style={styles.progressEmptyText}>Kizz affichera ensuite tes zones fortes et celles a consolider par theme et difficulte.</Text>
      </Pressable>
    );
  }
  return (
    <View style={styles.progressCard}>
      <View style={styles.progressHeader}><Text style={styles.progressTitle}>Matrice locale</Text><Text style={styles.progressHint}>theme x niveau</Text></View>
      {progress.map((item) => (
        <View key={item.topic.id} style={styles.progressRow}>
          <View style={styles.progressTopicWrap}><Text style={styles.progressTopic}>{item.topic.title}</Text><Text style={styles.progressMeta}>{item.totalAnswered} rep. - {item.accuracy}%</Text></View>
          <View style={styles.progressCells}>
            {item.cells.map((cell) => {
              const rate = cell.answered ? cell.score / cell.answered : 0;
              const state = !cell.answered ? 'empty' : rate >= 0.8 ? 'strong' : rate >= 0.5 ? 'medium' : 'weak';
              return (
                <Pressable
                  key={cell.difficulty}
                  testID={`progress-cell-${item.topic.id}-${cell.difficulty}`}
                  accessibilityRole="button"
                  accessibilityLabel={`${item.topic.title}, niveau ${cell.difficulty}`}
                  onPress={() => onStartCell(item.topic, cell.difficulty)}
                  style={({ pressed }) => [styles.progressCell, state === 'strong' ? styles.progressCellStrong : state === 'medium' ? styles.progressCellMedium : state === 'weak' ? styles.progressCellWeak : styles.progressCellEmpty, pressed && styles.pressed]}
                >
                  <Text style={styles.progressCellText}>{cell.difficulty}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      ))}
      <Pressable testID="progress-compose" onPress={onCompose} style={({ pressed }) => [styles.progressCta, pressed && styles.pressed]}><Text style={styles.progressCtaText}>Composer la prochaine session</Text></Pressable>
    </View>
  );
}

function RecentSessions({ sessions }: { sessions: RecentSession[] }) {
  if (!sessions.length) return null;
  return (
    <View style={styles.historyCard}>
      <View style={styles.progressHeader}><Text style={styles.progressTitle}>Historique</Text><Text style={styles.progressHint}>recent</Text></View>
      {sessions.map((session) => {
        const percent = session.total ? Math.round((session.score / session.total) * 100) : 0;
        const date = session.completedAt.slice(5, 10).replace('-', '/');
        return (
          <View key={session.id} style={styles.historyRow}>
            <View style={styles.historyMain}>
              <Text style={styles.historyTitle}>{session.topicTitle}</Text>
              <Text style={styles.historyDate}>{date}</Text>
            </View>
            <Text style={styles.historyScore}>{Number.isInteger(session.score) ? session.score : session.score.toFixed(1)}/{session.total}</Text>
            <Text style={styles.historyPercent}>{percent}%</Text>
          </View>
        );
      })}
    </View>
  );
}

function Kpi({ value, label, accent }: { value: string; label: string; accent: string }) {
  return <View style={styles.kpiCard}><View style={[styles.kpiDot, { backgroundColor: accent }]} /><Text style={styles.kpiValue}>{value}</Text><Text style={styles.kpiLabel}>{label}</Text></View>;
}

function SessionConfigurator({ topics, initialTopicIds, onClose, onStart }: { topics: Topic[]; initialTopicIds: string[]; onClose: () => void; onStart: (filters: SessionFilters) => void }) {
  const [topicIds, setTopicIds] = useState(initialTopicIds);
  const [selectedSubthemes, setSelectedSubthemes] = useState<string[]>([]);
  const [difficulties, setDifficulties] = useState<Difficulty[]>([1, 2, 3]);
  const [limit, setLimit] = useState<5 | 10 | 20>(10);
  const availableSubthemes = subthemesForTopics(topicIds, topics);

  function toggleTopic(topicId: string) {
    setTopicIds((current) => current.includes(topicId) ? current.filter((id) => id !== topicId) : [...current, topicId]);
    setSelectedSubthemes([]);
  }

  function toggleDifficulty(difficulty: Difficulty) {
    setDifficulties((current) => current.includes(difficulty)
      ? current.length === 1 ? current : current.filter((item) => item !== difficulty)
      : [...current, difficulty].sort() as Difficulty[]);
  }

  function toggleSubtheme(tag: string) {
    setSelectedSubthemes((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]);
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
      {!!availableSubthemes.length && <><Text style={styles.configSection}>SOUS-THEMES</Text><View style={styles.chipWrap}><Pressable testID="config-subtheme-all" onPress={() => setSelectedSubthemes([])} style={[styles.filterChip, selectedSubthemes.length === 0 && styles.filterChipActive]}><Text style={[styles.filterChipText, selectedSubthemes.length === 0 && styles.filterChipTextActive]}>Tous</Text></Pressable>{availableSubthemes.map((subtheme) => <Pressable key={subtheme.id} testID={`config-subtheme-${subtheme.id}`} onPress={() => toggleSubtheme(subtheme.tag)} style={[styles.filterChip, selectedSubthemes.includes(subtheme.tag) && styles.filterChipActive]}><Text style={[styles.filterChipText, selectedSubthemes.includes(subtheme.tag) && styles.filterChipTextActive]}>{subtheme.title}</Text></Pressable>)}</View></>}
      <Text style={styles.configSection}>DIFFICULTÉ</Text>
      <View style={styles.difficultyGrid}>{([1, 2, 3] as Difficulty[]).map((difficulty) => <Pressable key={difficulty} testID={`config-difficulty-${difficulty}`} onPress={() => toggleDifficulty(difficulty)} style={[styles.difficultyCard, difficulties.includes(difficulty) && styles.difficultyCardActive]}><Text style={styles.difficultyNumber}>{difficulty}</Text><Text style={styles.difficultyName}>{difficulty === 1 ? 'Découverte' : difficulty === 2 ? 'Intermédiaire' : 'Expert'}</Text><Text style={styles.difficultyDots}>{'●'.repeat(difficulty)}{'○'.repeat(3 - difficulty)}</Text></Pressable>)}</View>
      <Text style={styles.configSection}>LONGUEUR</Text>
      <View style={styles.lengthRow}>{([5, 10, 20] as const).map((value) => <Pressable key={value} testID={`config-length-${value}`} onPress={() => setLimit(value)} style={[styles.lengthButton, limit === value && styles.lengthButtonActive]}><Text style={[styles.lengthValue, limit === value && styles.lengthValueActive]}>{value}</Text><Text style={styles.lengthLabel}>questions</Text></Pressable>)}</View>
      <View style={styles.configSummary}><Text style={styles.configSummaryLabel}>{topicLabel}{selectedSubthemes.length ? ` - ${selectedSubthemes.length} sous-theme(s)` : ''} - niveaux {difficulties.join(', ')}</Text><Text style={styles.configSummaryValue}>{limit} questions maximum</Text></View>
      <Pressable testID="launch-configured-session" accessibilityRole="button" onPress={() => onStart({ topicIds, difficulties, subthemes: selectedSubthemes, limit })} style={styles.primaryButton}><Text style={styles.primaryButtonText}>Lancer la session</Text></Pressable>
    </ScrollView>
  );
}

type QuizProps = {
  topic: Topic; questions: QuizQuestion[]; index: number; selected: number | null;
  freeText: string; answerCorrect: boolean; onFreeTextChange: (value: string) => void; onSubmitFreeText: () => void;
  fieldValues: Record<string, string>; answerCredit: number; onFieldChange: (id: string, value: string) => void; onSubmitMultiText: () => void;
  mapGuess: GeoPoint | null; onMapGuess: (point: GeoPoint) => void; onSubmitMapPoint: () => void;
  onSelect: (index: number) => void; onToggleFavorite: () => void; onReportQuestion: () => void; onContinue: () => void; onClose: () => void;
  infiniteDifficulty?: Difficulty | null;
  confidence?: 1 | 2 | 3; onConfidence: (confidence: 1 | 2 | 3) => void;
};

function Quiz({ topic, questions, index, selected, freeText, fieldValues, mapGuess, answerCorrect, answerCredit, confidence, infiniteDifficulty, onConfidence, onFreeTextChange, onFieldChange, onMapGuess, onSubmitFreeText, onSubmitMultiText, onSubmitMapPoint, onSelect, onToggleFavorite, onReportQuestion, onContinue, onClose }: QuizProps) {
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
        {infinite && <Text style={styles.infiniteQuizHint}>Mode infini - niveau {infiniteDifficulty} - touche × pour arrêter et sauvegarder</Text>}
        {imageSource && <View style={styles.questionImageWrap}><Image source={imageSource} style={styles.questionImage} resizeMode="cover" accessibilityLabel={question.imageAlt} /></View>}
        <Text style={styles.question}>{question.prompt}</Text>
        {(question.type ?? 'multiple-choice') === 'multiple-choice' ? <View style={styles.choices}>
          {(question.choices ?? []).map((choice, choiceIndex) => {
            const correct = answered && choiceIndex === question.answerIndex;
            const wrong = answered && choiceIndex === selected && !correct;
            const choiceImageAsset = question.choiceImageAssets?.[choiceIndex];
            const choiceImageSource = choiceImageAsset ? QUESTION_IMAGES[choiceImageAsset] : undefined;
            return (
              <Pressable key={choice} testID={`choice-${choiceIndex}`} accessibilityRole="button" accessibilityLabel={`Réponse ${String.fromCharCode(65 + choiceIndex)} : ${choice}`} onPress={() => onSelect(choiceIndex)} style={({ pressed }) => [styles.choice, choiceImageSource ? styles.choiceWithImage : undefined, correct ? styles.choiceCorrect : undefined, wrong ? styles.choiceWrong : undefined, pressed && !answered ? styles.pressed : undefined]}>
                <View style={[styles.choiceLetter, correct && styles.choiceLetterCorrect, wrong && styles.choiceLetterWrong]}><Text style={[styles.choiceLetterText, (correct || wrong) && styles.choiceLetterActive]}>{String.fromCharCode(65 + choiceIndex)}</Text></View>
                {choiceImageSource && <Image source={choiceImageSource} style={styles.choiceImage} resizeMode="cover" accessibilityLabel={question.choiceImageAlts?.[choiceIndex] ?? choice} />}
                <Text style={styles.choiceText}>{choice}</Text><Text style={styles.choiceMark}>{correct ? '✓' : wrong ? '×' : ''}</Text>
              </Pressable>
            );
          })}
        </View> : question.type === 'map-point' ? <View>
          <SatelliteMapPicker question={question} guess={mapGuess} target={answered ? question.geoTarget : undefined} disabled={answered} onPick={onMapGuess} />
          {!answered && <Pressable testID="check-map-answer" accessibilityRole="button" disabled={!mapGuess} onPress={onSubmitMapPoint} style={[styles.checkButton, !mapGuess && styles.disabled]}><Text style={styles.checkButtonText}>Valider le point</Text></Pressable>}
          {answered && question.geoTarget && <View style={styles.mapFeedback}><Text style={styles.mapFeedbackTitle}>Correction spatiale</Text><Text style={styles.mapFeedbackText}>Distance : {mapGrade.distanceKm ?? '?'} km{mapGrade.direction && !mapGrade.correct ? ` - vise ${mapGrade.direction}` : ''}</Text><Text style={styles.mapFeedbackText}>Tolerance : {question.geoTarget.toleranceKm} km autour de {question.geoTarget.label}.</Text></View>}
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
        {answered && <View style={[styles.explanation, answerCredit === 1 ? styles.explanationCorrect : answerCredit > 0 ? styles.explanationPartial : styles.explanationWrong]}><Text style={styles.explanationTitle}>{answerCredit === 1 ? 'Bien vu' : answerCredit > 0 ? 'Réponse partielle' : 'À retenir'}</Text>{answerCredit > 0 && answerCredit < 1 && <Text style={styles.partialCredit}>{Math.round(answerCredit * 100)} % des éléments trouvés</Text>}<Text style={styles.explanationText}>{question.explanation}</Text><View style={styles.explanationActions}>{question.learnMoreUrl && <Pressable onPress={() => Linking.openURL(question.learnMoreUrl!)} style={styles.learnMore}><Text style={styles.learnMoreText}>En savoir plus  →</Text></Pressable>}<Pressable testID="report-question" onPress={onReportQuestion} style={styles.reportQuestion}><Text style={styles.reportQuestionText}>Signaler</Text></Pressable></View></View>}
        {answered && <View style={styles.confidenceCard}><Text style={styles.confidenceTitle}>Tu le savais vraiment ?</Text><Text style={styles.confidenceHint}>Facultatif - ajuste seulement la prochaine révision</Text><View style={styles.confidenceRow}>{([{ value: 1, label: 'Hésitant' }, { value: 2, label: 'Moyen' }, { value: 3, label: 'Sûr' }] as const).map((item) => <Pressable key={item.value} testID={`confidence-${item.value}`} onPress={() => onConfidence(item.value)} style={[styles.confidenceButton, confidence === item.value && styles.confidenceButtonActive]}><Text style={[styles.confidenceButtonText, confidence === item.value && styles.confidenceButtonTextActive]}>{item.label}</Text></Pressable>)}</View></View>}
      </ScrollView>
      {answered && <View style={styles.quizFooter}><Pressable testID="continue-quiz" accessibilityRole="button" onPress={onContinue} style={styles.primaryButton}><Text style={styles.primaryButtonText}>{infinite ? 'Question suivante' : index === questions.length - 1 ? 'Voir mon bilan' : 'Continuer'}</Text></Pressable></View>}
    </KeyboardAvoidingView>
  );
}

function SatelliteMapPicker({ question, guess, target, disabled, onPick }: { question: QuizQuestion; guess: GeoPoint | null; target?: GeoPoint & { toleranceKm?: number }; disabled: boolean; onPick: (point: GeoPoint) => void }) {
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
        source={{ html: satelliteMapHtml(question, guess, target, disabled) }}
        javaScriptEnabled
        domStorageEnabled
        allowFileAccess
        allowFileAccessFromFileURLs
        allowUniversalAccessFromFileURLs={false}
        onMessage={handleMapMessage}
        scrollEnabled={false}
        nestedScrollEnabled={false}
        overScrollMode="never"
        style={styles.satelliteMap}
      />
      <Text style={styles.mapHint}>{disabled ? 'Point vert: ta réponse - cible rouge' : 'Pince pour zoomer, glisse pour naviguer, touche pour placer ton point'}</Text>
    </View>
  );
}

function satelliteMapHtml(question: QuizQuestion, guess: GeoPoint | null, target: (GeoPoint & { toleranceKm?: number }) | undefined, disabled: boolean) {
  const isFranceMap = question.topicId === 'france-map' || question.tags.includes('carte-france') || question.tags.includes('carte-france-dediee');
  const bounds = isFranceMap
    ? { minLon: -5.8, maxLon: 10.0, minLat: 41.1, maxLat: 51.3 }
    : { minLon: -180, maxLon: 180, minLat: -58, maxLat: 83 };
  const boundaryGeoJson = isFranceMap ? franceDepartmentBoundaryGeoJson : worldBoundaryGeoJson;
  const title = isFranceMap ? 'France' : 'Monde';
  const satelliteUri = OFFLINE_SATELLITE_URI;
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
  <style>
    html, body, #map { height: 100%; width: 100%; margin: 0; background: #0B1519; overflow: hidden; overscroll-behavior: none; touch-action: none; user-select: none; }
    #map { position: relative; font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; }
    canvas { width: 100%; height: 100%; display: block; background: #0F2028; touch-action: none; }
    .badge { position: absolute; z-index: 4; top: 10px; left: 10px; padding: 7px 10px; border-radius: 999px; background: rgba(7,17,12,0.78); color: #dce6e1; font: 900 11px system-ui; pointer-events: none; backdrop-filter: blur(6px); }
    .controls { position: absolute; z-index: 4; right: 10px; top: 10px; display: grid; overflow: hidden; border-radius: 14px; border: 1px solid rgba(255,255,255,0.18); background: rgba(10,14,13,0.86); }
    .controls button { width: 42px; height: 42px; border: 0; border-bottom: 1px solid rgba(255,255,255,0.14); background: transparent; color: #f3f7f5; font: 900 22px system-ui; }
    .controls button:last-child { border-bottom: 0; }
    .scale { position: absolute; z-index: 4; left: 12px; bottom: 12px; width: 74px; height: 3px; border-radius: 999px; background: rgba(220,230,225,0.8); box-shadow: 0 0 0 1px rgba(7,17,12,0.7); pointer-events: none; }
  </style>
</head>
<body>
  <div id="map">
    <div class="badge">${title}</div>
    <div class="controls"><button id="zoom-in" type="button">+</button><button id="zoom-out" type="button">-</button></div>
    <canvas id="canvas" aria-label="${title}"></canvas>
    <div class="scale"></div>
  </div>
  <script>
    (function () {
      var bounds = ${JSON.stringify(bounds)};
      var boundaryGeoJson = ${JSON.stringify(boundaryGeoJson)};
      var guess = ${JSON.stringify(guess)};
      var target = ${JSON.stringify(target ?? null)};
      var disabled = ${disabled ? 'true' : 'false'};
      var satelliteUri = ${JSON.stringify(satelliteUri)};
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d', { alpha: false });
      var satellite = new Image();
      var satelliteReady = false;
      var dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));
      var width = 0;
      var height = 0;
      var projectedBounds = null;
      var baseScale = 1;
      var zoom = 1;
      var minZoom = 0.95;
      var maxZoom = ${isFranceMap ? '36' : '48'};
      var center = null;
      var pointers = {};
      var pointerCount = 0;
      var dragStart = null;
      var pinchStart = null;
      var moved = false;
      var lastTap = 0;
      var velocity = { x: 0, y: 0 };
      var lastMove = null;
      var inertiaFrame = 0;
      var pendingGuess = null;
      var rings = [];
      satellite.onload = function () { satelliteReady = true; draw(); };
      satellite.src = satelliteUri;

      function project(lon, lat) {
        var sin = Math.sin(Math.max(-85.05112878, Math.min(85.05112878, lat)) * Math.PI / 180);
        return { x: (lon + 180) / 360, y: 0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI) };
      }
      function unproject(x, y) {
        var lon = x * 360 - 180;
        var lat = Math.atan(Math.sinh(Math.PI * (1 - 2 * y))) * 180 / Math.PI;
        return { lon: lon, lat: lat };
      }
      function screenToWorld(x, y) {
        return { x: center.x + (x - width / 2) / (baseScale * zoom), y: center.y + (y - height / 2) / (baseScale * zoom) };
      }
      function worldToScreen(point) {
        return { x: (point.x - center.x) * baseScale * zoom + width / 2, y: (point.y - center.y) * baseScale * zoom + height / 2 };
      }
      function clampCamera() {
        if (!projectedBounds || !center) return;
        var padX = width / (baseScale * zoom) * 0.46;
        var padY = height / (baseScale * zoom) * 0.46;
        center.x = Math.max(projectedBounds.minX - padX, Math.min(projectedBounds.maxX + padX, center.x));
        center.y = Math.max(projectedBounds.minY - padY, Math.min(projectedBounds.maxY + padY, center.y));
      }
      function zoomAround(nextZoom, sx, sy) {
        var before = screenToWorld(sx, sy);
        zoom = Math.max(minZoom, Math.min(maxZoom, nextZoom));
        var after = screenToWorld(sx, sy);
        center.x += before.x - after.x;
        center.y += before.y - after.y;
        clampCamera();
        draw();
      }
      function eachGeometryRing(geometry, callback) {
        if (!geometry) return;
        if (geometry.type === 'Polygon') geometry.coordinates.forEach(callback);
        if (geometry.type === 'MultiPolygon') geometry.coordinates.forEach(function (polygon) { polygon.forEach(callback); });
      }
      function prepareRings() {
        var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        boundaryGeoJson.features.forEach(function (feature) {
          eachGeometryRing(feature.geometry, function (ring) {
            var projected = ring.map(function (coord) {
              var point = project(coord[0], coord[1]);
              minX = Math.min(minX, point.x); minY = Math.min(minY, point.y);
              maxX = Math.max(maxX, point.x); maxY = Math.max(maxY, point.y);
              return point;
            });
            if (projected.length > 1) rings.push(projected);
          });
        });
        var sw = project(bounds.minLon, bounds.minLat);
        var ne = project(bounds.maxLon, bounds.maxLat);
        projectedBounds = { minX: Math.min(sw.x, ne.x, minX), maxX: Math.max(sw.x, ne.x, maxX), minY: Math.min(sw.y, ne.y, minY), maxY: Math.max(sw.y, ne.y, maxY) };
        center = { x: (projectedBounds.minX + projectedBounds.maxX) / 2, y: (projectedBounds.minY + projectedBounds.maxY) / 2 };
      }
      function resize() {
        var rect = canvas.getBoundingClientRect();
        width = Math.max(1, rect.width);
        height = Math.max(1, rect.height);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        baseScale = Math.min(width / (projectedBounds.maxX - projectedBounds.minX), height / (projectedBounds.maxY - projectedBounds.minY)) * ${isFranceMap ? '0.92' : '0.96'};
        clampCamera();
        draw();
      }
      function drawGrid() {
        var lonStep = ${isFranceMap ? '2' : '30'};
        var latStep = ${isFranceMap ? '2' : '20'};
        ctx.strokeStyle = 'rgba(255,255,255,0.055)';
        ctx.lineWidth = 1;
        for (var lon = Math.ceil(bounds.minLon / lonStep) * lonStep; lon <= bounds.maxLon; lon += lonStep) {
          var a = worldToScreen(project(lon, bounds.minLat));
          var b = worldToScreen(project(lon, bounds.maxLat));
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
        for (var lat = Math.ceil(bounds.minLat / latStep) * latStep; lat <= bounds.maxLat; lat += latStep) {
          var c = worldToScreen(project(bounds.minLon, lat));
          var d = worldToScreen(project(bounds.maxLon, lat));
          ctx.beginPath(); ctx.moveTo(c.x, c.y); ctx.lineTo(d.x, d.y); ctx.stroke();
        }
      }
      function normalizedLon(lon) {
        return ((lon + 180) % 360 + 360) % 360 - 180;
      }
      function satelliteX(lon) {
        return ((normalizedLon(lon) + 180) / 360) * satellite.width;
      }
      function satelliteY(lat) {
        return ((90 - Math.max(-90, Math.min(90, lat))) / 180) * satellite.height;
      }
      function drawSatelliteRow(y, rowHeight, leftLon, rightLon, lat) {
        var sy = satelliteY(lat);
        var sh = Math.max(1, satellite.height / 1024);
        var span = rightLon - leftLon;
        if (span >= 359) {
          ctx.globalAlpha = 0.96;
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(satellite, 0, sy, satellite.width, sh, 0, y, width, rowHeight + 1);
          ctx.globalAlpha = 1;
          return;
        }
        var left = normalizedLon(leftLon);
        var right = normalizedLon(rightLon);
        ctx.globalAlpha = 0.96;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        if (right >= left) {
          ctx.drawImage(satellite, satelliteX(left), sy, Math.max(1, satelliteX(right) - satelliteX(left)), sh, 0, y, width, rowHeight + 1);
        } else {
          var firstWidth = (180 - left) / ((180 - left) + (right + 180)) * width;
          ctx.drawImage(satellite, satelliteX(left), sy, Math.max(1, satellite.width - satelliteX(left)), sh, 0, y, firstWidth, rowHeight + 1);
          ctx.drawImage(satellite, 0, sy, Math.max(1, satelliteX(right)), sh, firstWidth, y, width - firstWidth, rowHeight + 1);
        }
        ctx.globalAlpha = 1;
      }
      function drawSatelliteBase() {
        var gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#0B1B24');
        gradient.addColorStop(1, '#071116');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        if (!satelliteReady) return;
        var rowHeight = zoom > 12 ? 1 : 2;
        for (var y = 0; y < height; y += rowHeight) {
          var leftWorld = screenToWorld(0, y + rowHeight / 2);
          var rightWorld = screenToWorld(width, y + rowHeight / 2);
          var leftGeo = unproject(leftWorld.x, leftWorld.y);
          var rightGeo = unproject(rightWorld.x, rightWorld.y);
          drawSatelliteRow(y, rowHeight, leftGeo.lon, rightGeo.lon, leftGeo.lat);
        }
        ctx.fillStyle = 'rgba(0,0,0,0.14)';
        ctx.fillRect(0, 0, width, height);
      }
      function drawBoundaries() {
        function stroke(style, widthValue) {
          ctx.strokeStyle = style;
          ctx.lineWidth = widthValue;
          ctx.lineJoin = 'round';
          ctx.lineCap = 'round';
          rings.forEach(function (ring) {
            ctx.beginPath();
            ring.forEach(function (point, index) {
              var s = worldToScreen(point);
              if (index === 0) ctx.moveTo(s.x, s.y);
              else ctx.lineTo(s.x, s.y);
            });
            ctx.closePath();
            ctx.stroke();
          });
        }
        var baseWidth = Math.max(0.65, Math.min(${isFranceMap ? '1.55' : '1.15'}, 1.65 / Math.sqrt(zoom)));
        stroke('rgba(3,8,7,0.88)', baseWidth + 1.8);
        stroke(${isFranceMap ? "'rgba(255,246,210,0.92)'" : "'rgba(228,241,236,0.88)'"}, baseWidth);
      }
      function drawMarker(point, color, label) {
        var s = worldToScreen(project(point.lon, point.lat));
        ctx.beginPath();
        ctx.arc(s.x, s.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#07110C';
        ctx.stroke();
        ctx.font = '700 12px system-ui';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'rgba(7,17,12,0.9)';
        ctx.lineWidth = 4;
        ctx.strokeText(label, s.x + 12, s.y - 10);
        ctx.fillStyle = '#DCE6E1';
        ctx.fillText(label, s.x + 12, s.y - 10);
      }
      function drawAnswers() {
        var currentGuess = pendingGuess || guess;
        if (target && target.toleranceKm) {
          var p = worldToScreen(project(target.lon, target.lat));
          var earthKm = 40075 * Math.cos(target.lat * Math.PI / 180);
          var radius = (target.toleranceKm / Math.max(1, earthKm)) * baseScale * zoom;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(8, radius), 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(228,125,112,0.16)';
          ctx.fill();
          ctx.strokeStyle = '#E47D70';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        if (currentGuess) drawMarker(currentGuess, '#68D7A2', 'Ta réponse');
        if (target) drawMarker(target, '#E47D70', target.label || 'Cible');
      }
      function draw() {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, width, height);
        drawSatelliteBase();
        drawGrid();
        drawBoundaries();
        drawAnswers();
      }
      function pointerMidpoint() {
        var keys = Object.keys(pointers);
        var a = pointers[keys[0]];
        var b = pointers[keys[1]];
        return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, distance: Math.hypot(a.x - b.x, a.y - b.y) };
      }
      function startInertia() {
        cancelAnimationFrame(inertiaFrame);
        function step() {
          center.x -= velocity.x / (baseScale * zoom);
          center.y -= velocity.y / (baseScale * zoom);
          velocity.x *= 0.92;
          velocity.y *= 0.92;
          clampCamera();
          draw();
          if (Math.abs(velocity.x) + Math.abs(velocity.y) > 0.18) inertiaFrame = requestAnimationFrame(step);
        }
        inertiaFrame = requestAnimationFrame(step);
      }
      document.getElementById('zoom-in').addEventListener('click', function () { zoomAround(zoom * 1.8, width / 2, height / 2); });
      document.getElementById('zoom-out').addEventListener('click', function () { zoomAround(zoom / 1.8, width / 2, height / 2); });
      canvas.addEventListener('pointerdown', function (event) {
        cancelAnimationFrame(inertiaFrame);
        var rect = canvas.getBoundingClientRect();
        pointers[event.pointerId] = { x: event.clientX - rect.left, y: event.clientY - rect.top };
        pointerCount = Object.keys(pointers).length;
        moved = false;
        lastMove = { x: pointers[event.pointerId].x, y: pointers[event.pointerId].y, time: performance.now() };
        if (pointerCount === 1) dragStart = { x: pointers[event.pointerId].x, y: pointers[event.pointerId].y, centerX: center.x, centerY: center.y };
        if (pointerCount === 2) {
          var mid = pointerMidpoint();
          pinchStart = { distance: mid.distance, zoom: zoom, world: screenToWorld(mid.x, mid.y), x: mid.x, y: mid.y };
        }
        canvas.setPointerCapture(event.pointerId);
      });
      canvas.addEventListener('pointermove', function (event) {
        if (!pointers[event.pointerId]) return;
        var rect = canvas.getBoundingClientRect();
        var point = pointers[event.pointerId];
        var nx = event.clientX - rect.left;
        var ny = event.clientY - rect.top;
        var now = performance.now();
        if (Math.abs(nx - point.x) + Math.abs(ny - point.y) > 1) moved = true;
        point.x = nx; point.y = ny;
        pointerCount = Object.keys(pointers).length;
        if (pointerCount === 2 && pinchStart) {
          var mid = pointerMidpoint();
          zoom = Math.max(minZoom, Math.min(maxZoom, pinchStart.zoom * (mid.distance / Math.max(1, pinchStart.distance))));
          var after = screenToWorld(mid.x, mid.y);
          center.x += pinchStart.world.x - after.x;
          center.y += pinchStart.world.y - after.y;
        } else if (pointerCount === 1 && dragStart) {
          var dx = nx - dragStart.x;
          var dy = ny - dragStart.y;
          center.x = dragStart.centerX - dx / (baseScale * zoom);
          center.y = dragStart.centerY - dy / (baseScale * zoom);
          if (lastMove) {
            var dt = Math.max(8, now - lastMove.time);
            velocity.x = (nx - lastMove.x) / dt * 16;
            velocity.y = (ny - lastMove.y) / dt * 16;
          }
          lastMove = { x: nx, y: ny, time: now };
        }
        clampCamera();
        draw();
      });
      function endPointer(event) {
        if (!pointers[event.pointerId]) return;
        var ended = pointers[event.pointerId];
        delete pointers[event.pointerId];
        pointerCount = Object.keys(pointers).length;
        canvas.releasePointerCapture(event.pointerId);
        var now = performance.now();
        var isDoubleTap = !moved && now - lastTap < 280;
        if (isDoubleTap) {
          zoomAround(zoom * 2, ended.x, ended.y);
        } else if (!moved && !disabled) {
          var world = screenToWorld(ended.x, ended.y);
          var geo = unproject(world.x, world.y);
          pendingGuess = { lat: geo.lat, lon: geo.lon };
          draw();
          window.ReactNativeWebView.postMessage(JSON.stringify(pendingGuess));
        }
        if (!moved) lastTap = now;
        else if (pointerCount === 0 && Math.abs(velocity.x) + Math.abs(velocity.y) > 1.2) {
          startInertia();
        }
        if (pointerCount === 0) { dragStart = null; pinchStart = null; }
      }
      canvas.addEventListener('pointerup', endPointer);
      canvas.addEventListener('pointercancel', endPointer);
      canvas.addEventListener('wheel', function (event) {
        event.preventDefault();
        var rect = canvas.getBoundingClientRect();
        zoomAround(zoom * (event.deltaY < 0 ? 1.25 : 0.8), event.clientX - rect.left, event.clientY - rect.top);
      }, { passive: false });
      prepareRings();
      resize();
      window.addEventListener('resize', resize);
    })();
  </script>
</body>
</html>`;
}
function Result({ topic, questions, answers, onAgain, onHome }: { topic: Topic; questions: QuizQuestion[]; answers: SessionAnswer[]; onAgain: () => void; onHome: () => void }) {
  const score = answers.reduce((total, answer) => total + (answer.credit ?? (answer.correct ? 1 : 0)), 0);
  const percent = Math.round((score / answers.length) * 100);
  const message = percent >= 80 ? 'Solide !' : percent >= 50 ? 'Bonne progression' : 'Chaque erreur fait apprendre';
  const interactionStats = summarizeByInteraction(questions, answers);
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
      {interactionStats.length > 1 && <View style={styles.breakdownCard}>
        <Text style={styles.calibrationTitle}>Par type</Text>
        {interactionStats.map((stat) => (
          <View key={stat.type} style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>{stat.label}</Text>
            <Text style={styles.breakdownMeta}>{stat.answered} rep.</Text>
            <Text style={styles.breakdownScore}>{Number.isInteger(stat.score) ? stat.score : stat.score.toFixed(1)}/{stat.answered}</Text>
            <Text style={styles.breakdownPercent}>{stat.accuracy}%</Text>
          </View>
        ))}
      </View>}
      <Pressable onPress={onAgain} style={styles.primaryButton}><Text style={styles.primaryButtonText}>Rejouer ce thème</Text></Pressable>
      <Pressable onPress={onHome} style={styles.secondaryButton}><Text style={styles.secondaryButtonText}>Retour aux thèmes</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: palette.bg, paddingTop: Platform.OS === 'android' ? 24 : 0, paddingBottom: Platform.OS === 'android' ? 48 : 0 }, loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: palette.bg, gap: 16, paddingTop: Platform.OS === 'android' ? 24 : 0, paddingBottom: Platform.OS === 'android' ? 48 : 0 }, loadingText: { color: palette.muted },
  homeRoot: { flex: 1, backgroundColor: '#0A0E0D' }, homePager: { flex: 1 }, homePanel: { paddingHorizontal: 22, paddingBottom: 44 }, homeTabs: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 22, marginTop: -24, marginBottom: 18, minHeight: 38, borderRadius: 999, borderWidth: 1, borderColor: '#222C27', backgroundColor: '#101714', overflow: 'hidden' }, homeTabIndicator: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '33.3333%', backgroundColor: '#68D7A2', borderRadius: 999 }, homeTab: { flex: 1, minHeight: 38, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8, zIndex: 1 }, homeTabText: { color: '#8A9791', fontSize: 11, fontWeight: '800', textAlign: 'center' }, homeTabActive: { color: '#07110C', fontWeight: '900' },
  page: { padding: 22, paddingBottom: 40 }, brandRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 38, paddingHorizontal: 22, paddingTop: 22 }, logo: { width: 40, height: 40, borderRadius: 13, backgroundColor: '#68D7A2', alignItems: 'center', justifyContent: 'center' }, logoText: { color: '#09110E', fontSize: 22, fontWeight: '900' }, brand: { fontSize: 23, fontWeight: '800', color: '#F3F7F5', marginLeft: 11 }, libraryShortcut: { marginLeft: 'auto', backgroundColor: '#17211D', borderWidth: 1, borderColor: '#28362F', paddingHorizontal: 13, paddingVertical: 9, borderRadius: 20 }, libraryShortcutText: { color: '#91E8BD', fontSize: 12, fontWeight: '800' },
  logoImage: { width: 42, height: 42, borderRadius: 13 }, dashboardHeader: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 14 }, dashboardTitle: { color: '#F3F7F5', fontSize: 25, fontWeight: '800', letterSpacing: -0.5 }, dashboardCaption: { color: '#6F7C75', fontSize: 11, marginLeft: 'auto' }, kpiGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 16 }, kpiCard: { width: '48%', minHeight: 108, borderRadius: 18, backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', padding: 15 }, kpiDot: { width: 7, height: 7, borderRadius: 4, marginBottom: 12 }, kpiValue: { color: '#F1F6F3', fontSize: 25, fontWeight: '900' }, kpiLabel: { color: '#7F8C85', fontSize: 11, fontWeight: '700', marginTop: 4 },
  progressCard: { borderRadius: 22, backgroundColor: '#111714', borderWidth: 1, borderColor: '#26312C', padding: 15, marginBottom: 18 }, progressHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 }, progressTitle: { color: '#EAF3EE', fontSize: 15, fontWeight: '900' }, progressHint: { marginLeft: 'auto', color: '#68756E', fontSize: 10, fontWeight: '800' }, progressEmptyTitle: { color: '#EAF3EE', fontSize: 14, fontWeight: '900' }, progressEmptyText: { color: '#7F8C85', fontSize: 11, lineHeight: 17, marginTop: 5 }, progressRow: { minHeight: 44, flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#202A25', paddingTop: 10, marginTop: 9 }, progressTopicWrap: { flex: 1, paddingRight: 10 }, progressTopic: { color: '#DDE8E3', fontSize: 12, fontWeight: '900' }, progressMeta: { color: '#6F7C75', fontSize: 10, marginTop: 2 }, progressCells: { flexDirection: 'row', gap: 6 }, progressCell: { width: 30, height: 30, borderRadius: 10, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }, progressCellStrong: { backgroundColor: '#1A3B2B', borderColor: '#4EBA88' }, progressCellMedium: { backgroundColor: '#332A15', borderColor: '#E6B759' }, progressCellWeak: { backgroundColor: '#351D1A', borderColor: '#C96358' }, progressCellEmpty: { backgroundColor: '#151B18', borderColor: '#2B3530' }, progressCellText: { color: '#EAF3EE', fontSize: 11, fontWeight: '900' }, progressCta: { minHeight: 40, borderRadius: 13, backgroundColor: '#18271F', alignItems: 'center', justifyContent: 'center', marginTop: 13 }, progressCtaText: { color: '#8EE0B5', fontSize: 12, fontWeight: '900' },
  historyCard: { borderRadius: 22, backgroundColor: '#111714', borderWidth: 1, borderColor: '#26312C', padding: 15, marginBottom: 18 }, historyRow: { minHeight: 38, flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#202A25', paddingTop: 9, marginTop: 8 }, historyMain: { flex: 1, paddingRight: 10 }, historyTitle: { color: '#DDE8E3', fontSize: 12, fontWeight: '900' }, historyDate: { color: '#6F7C75', fontSize: 10, marginTop: 2 }, historyScore: { color: '#EAF3EE', fontSize: 12, fontWeight: '900', minWidth: 44, textAlign: 'right' }, historyPercent: { color: '#8EE0B5', fontSize: 12, fontWeight: '900', minWidth: 44, textAlign: 'right' },
  modeStack: { gap: 12, marginBottom: 18 }, recommendCard: { minHeight: 98, borderRadius: 22, backgroundColor: '#121815', borderWidth: 1, borderColor: '#28342F', padding: 15, flexDirection: 'row', alignItems: 'center', gap: 13, marginBottom: 12 }, recommendRail: { width: 4, alignSelf: 'stretch', borderRadius: 99 }, recommendEyebrow: { color: '#78857F', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, recommendTitle: { color: '#EFF6F2', fontSize: 15, fontWeight: '900', marginTop: 5 }, recommendText: { color: '#84918A', fontSize: 11, lineHeight: 16, marginTop: 5 }, recommendAction: { fontSize: 12, fontWeight: '900' }, composeCard: { minHeight: 96, borderRadius: 22, backgroundColor: '#18271F', borderWidth: 1, borderColor: '#2E5944', padding: 17, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, composeEyebrow: { color: '#68D7A2', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, composeTitle: { color: '#EAF3EE', fontSize: 15, fontWeight: '800', marginTop: 5 }, modeText: { color: '#8CA39A', fontSize: 11, lineHeight: 16, marginTop: 6, maxWidth: 250 }, composeArrow: { color: '#68D7A2', fontSize: 25 }, enduranceCard: { minHeight: 132, borderRadius: 22, backgroundColor: '#151A23', borderWidth: 1, borderColor: '#31446F', padding: 16, flexDirection: 'row', alignItems: 'center', gap: 14 }, enduranceText: { color: '#8D9CAE', fontSize: 11, lineHeight: 16, marginTop: 6 }, enduranceButtons: { width: 112, gap: 7 }, enduranceButton: { minHeight: 35, borderRadius: 12, backgroundColor: '#1C2638', borderWidth: 1, borderColor: '#40557F', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 11 }, enduranceButtonText: { color: '#E9F0FF', fontSize: 14, fontWeight: '900' }, enduranceDots: { color: '#8FB3FF', fontSize: 8, letterSpacing: 1.5 }, infiniteCard: { minHeight: 132, borderRadius: 22, backgroundColor: '#1E1826', borderWidth: 1, borderColor: '#4B3463', padding: 16, flexDirection: 'row', alignItems: 'center', gap: 14 }, infiniteEyebrow: { color: '#C29BFF', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, infiniteText: { color: '#A899B8', fontSize: 11, lineHeight: 16, marginTop: 6 }, infiniteButton: { minHeight: 35, borderRadius: 12, backgroundColor: '#2A2036', borderWidth: 1, borderColor: '#594073', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 11 }, infiniteButtonText: { color: '#F1E8FF', fontSize: 14, fontWeight: '900' }, infiniteDots: { color: '#C29BFF', fontSize: 13, fontWeight: '900' }, configPage: { padding: 22, paddingBottom: 60, backgroundColor: '#0A0E0D' }, configTitle: { color: '#F3F7F5', fontSize: 30, lineHeight: 35, fontWeight: '900', letterSpacing: -0.8 }, configLead: { color: '#87938D', fontSize: 14, marginTop: 8, marginBottom: 30 }, configSection: { color: '#68756E', fontSize: 10, fontWeight: '900', letterSpacing: 1.5, marginTop: 12, marginBottom: 12 }, chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 }, filterChip: { borderWidth: 1, borderColor: '#2A3530', backgroundColor: '#121815', borderRadius: 20, paddingHorizontal: 13, paddingVertical: 10 }, filterChipActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, filterChipText: { color: '#A1ACA6', fontSize: 12, fontWeight: '700' }, filterChipTextActive: { color: '#07110C', fontWeight: '900' }, difficultyGrid: { gap: 9, marginBottom: 20 }, difficultyCard: { minHeight: 66, borderRadius: 16, borderWidth: 1, borderColor: '#2A3530', backgroundColor: '#121815', paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center' }, difficultyCardActive: { borderColor: '#68D7A2', backgroundColor: '#13251E' }, difficultyNumber: { color: '#68D7A2', fontSize: 20, fontWeight: '900', width: 32 }, difficultyName: { color: '#DCE4E0', fontSize: 13, fontWeight: '800', flex: 1 }, difficultyDots: { color: '#68D7A2', fontSize: 10, letterSpacing: 2 }, lengthRow: { flexDirection: 'row', gap: 9, marginBottom: 22 }, lengthButton: { flex: 1, minHeight: 70, borderRadius: 16, borderWidth: 1, borderColor: '#2A3530', backgroundColor: '#121815', alignItems: 'center', justifyContent: 'center' }, lengthButtonActive: { borderColor: '#68D7A2', backgroundColor: '#13251E' }, lengthValue: { color: '#A4B0AA', fontSize: 20, fontWeight: '900' }, lengthValueActive: { color: '#68D7A2' }, lengthLabel: { color: '#6D7972', fontSize: 9, marginTop: 2 }, configSummary: { backgroundColor: '#101512', borderRadius: 14, padding: 14, marginBottom: 16 }, configSummaryLabel: { color: '#B8C2BD', fontSize: 12, fontWeight: '700' }, configSummaryValue: { color: '#67736D', fontSize: 10, marginTop: 4 },
  resumeCard: { borderRadius: 19, backgroundColor: '#151B18', borderWidth: 1, borderColor: '#34423B', padding: 16, marginBottom: 14, overflow: 'hidden' }, resumeProgress: { height: 4, borderRadius: 3, backgroundColor: '#27312C', marginBottom: 14, overflow: 'hidden' }, resumeProgressFill: { height: 4, borderRadius: 3 }, resumeEyebrow: { color: '#7F8D86', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, resumeRow: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 6 }, resumeTitle: { color: '#EDF4F0', fontSize: 17, fontWeight: '900' }, resumeText: { color: '#74817A', fontSize: 11, marginTop: 3 }, resumeArrow: { fontSize: 12, fontWeight: '900' },
  hero: { color: '#F3F7F5', fontSize: 41, lineHeight: 45, fontWeight: '800', letterSpacing: -1.3 }, lead: { color: '#96A29C', fontSize: 16, lineHeight: 24, marginTop: 14, marginBottom: 28, maxWidth: 350 },
  statsCard: { flexDirection: 'row', backgroundColor: '#131917', borderRadius: 20, paddingVertical: 18, paddingHorizontal: 10, borderWidth: 1, borderColor: '#242D29', marginBottom: 34 }, stat: { flex: 1, alignItems: 'center' }, statValue: { color: '#EFF5F2', fontSize: 21, fontWeight: '800' }, statLabel: { color: '#78857F', fontSize: 11, marginTop: 3 }, divider: { width: 1, backgroundColor: '#27312C' }, sectionRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 14 }, sectionTitle: { color: '#E8EFEB', fontSize: 19, fontWeight: '800' }, sectionHint: { marginLeft: 'auto', color: '#738079', fontSize: 12 },
  quickRow: { flexDirection: 'row', gap: 9, marginBottom: 28 }, quickAction: { flex: 1, minHeight: 74, borderRadius: 18, borderWidth: 1, borderColor: '#26312C', backgroundColor: '#111614', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4 }, quickIcon: { color: '#79DDAA', fontSize: 20, fontWeight: '800', marginBottom: 5 }, quickText: { color: '#AAB5AF', fontSize: 10.5, fontWeight: '800', textAlign: 'center' },
  languageHero: { minHeight: 112, borderRadius: 22, borderWidth: 1, borderColor: '#285262', backgroundColor: '#102027', flexDirection: 'row', alignItems: 'center', padding: 15, gap: 13 }, languageHeroIcon: { width: 52, height: 52, borderRadius: 16, backgroundColor: '#5FB8C9', alignItems: 'center', justifyContent: 'center' }, languageHeroIconText: { color: '#071116', fontSize: 18, fontWeight: '900' }, languageHeroEyebrow: { color: '#6FC8D9', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, languageHeroTitle: { color: '#EDF6F8', fontSize: 15, fontWeight: '900', marginTop: 5 }, languageHeroText: { color: '#78949C', fontSize: 11, marginTop: 4 },
  languagePanelHero: { borderRadius: 26, backgroundColor: '#102027', borderWidth: 1, borderColor: '#285262', padding: 20, marginBottom: 14 }, languagePanelEyebrow: { color: '#6FC8D9', fontSize: 10, fontWeight: '900', letterSpacing: 1.4 }, languagePanelTitle: { color: '#F3F9FA', fontSize: 29, lineHeight: 33, fontWeight: '900', letterSpacing: -0.8, marginTop: 8 }, languagePanelText: { color: '#8EA6AD', fontSize: 13, lineHeight: 19, marginTop: 8 }, languageMiniGrid: { gap: 10, marginTop: 14 }, languageMiniCard: { borderRadius: 18, backgroundColor: '#121815', borderWidth: 1, borderColor: '#25302B', padding: 15 }, languageMiniCode: { color: '#5FB8C9', fontSize: 11, fontWeight: '900' }, languageMiniName: { color: '#EAF3EE', fontSize: 16, fontWeight: '900', marginTop: 4 }, languageMiniText: { color: '#7C8B85', fontSize: 11, marginTop: 4 },
  languageProgressCard: { borderRadius: 18, backgroundColor: '#101B1D', borderWidth: 1, borderColor: '#26464D', padding: 13, marginTop: 12, marginBottom: 16 }, languageProgressHeader: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 10 }, languageProgressTitle: { color: '#E6F2F4', fontSize: 13, fontWeight: '900' }, languageProgressMeta: { color: '#78949C', fontSize: 10, fontWeight: '800', marginLeft: 'auto' }, languageProgressGrid: { flexDirection: 'row', gap: 7 }, languageProgressCell: { flex: 1, minHeight: 62, borderRadius: 14, borderWidth: 1, borderColor: '#2A3B3F', backgroundColor: '#121815', alignItems: 'center', justifyContent: 'center', paddingVertical: 8 }, languageProgressCellActive: { borderColor: '#5FB8C9', backgroundColor: '#163039' }, languageProgressLevel: { color: '#DCE6E1', fontSize: 12, fontWeight: '900' }, languageProgressAccuracy: { color: '#8EE0B5', fontSize: 13, fontWeight: '900', marginTop: 3 }, languageProgressCount: { color: '#718079', fontSize: 9, fontWeight: '800', marginTop: 2 },
  languagePage: { padding: 22, paddingBottom: 60, backgroundColor: '#0A0E0D' }, languageChoices: { gap: 9, marginBottom: 20 }, languageChoice: { minHeight: 67, borderRadius: 17, borderWidth: 1, borderColor: '#293631', backgroundColor: '#121815', paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' }, languageChoiceActive: { borderColor: '#5FB8C9', backgroundColor: '#12252B' }, languageChoiceName: { color: '#DCE6E1', fontSize: 15, fontWeight: '800' }, languageChoiceNative: { color: '#70827A', fontSize: 12, marginLeft: 'auto' }, cefrRow: { flexDirection: 'row', gap: 7 }, cefrButton: { flex: 1, height: 48, borderRadius: 14, borderWidth: 1, borderColor: '#2A3530', backgroundColor: '#121815', alignItems: 'center', justifyContent: 'center' }, cefrText: { color: '#A1ACA6', fontWeight: '900' }, levelHelp: { color: '#718079', fontSize: 11, lineHeight: 17, marginTop: 9, marginBottom: 14 }, skillList: { gap: 9, marginBottom: 18 }, skillCard: { minHeight: 72, borderRadius: 17, borderWidth: 1, borderColor: '#29332F', backgroundColor: '#121815', padding: 13, flexDirection: 'row', alignItems: 'center' }, skillCardActive: { borderColor: '#417B86', backgroundColor: '#102126' }, skillCheck: { width: 29, height: 29, borderRadius: 9, borderWidth: 1, borderColor: '#39443E', alignItems: 'center', justifyContent: 'center', marginRight: 12 }, skillCheckActive: { backgroundColor: '#5FB8C9', borderColor: '#5FB8C9' }, skillTitle: { color: '#E4ECE8', fontSize: 13, fontWeight: '800' }, skillDetail: { color: '#718079', fontSize: 10, marginTop: 4 }, languageMethod: { borderRadius: 17, backgroundColor: '#121A17', borderWidth: 1, borderColor: '#29352F', padding: 15, marginBottom: 18 }, languageMethodTitle: { color: '#8EDCB6', fontSize: 13, fontWeight: '900' }, languageMethodText: { color: '#7E8C85', fontSize: 11, lineHeight: 18, marginTop: 6 },
  topicGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 }, topicCard: { width: '48%', minHeight: 176, padding: 16, borderRadius: 22, backgroundColor: '#121815', borderWidth: 1, borderColor: '#26312C' }, pressed: { opacity: 0.72, transform: [{ scale: 0.985 }] }, topicIcon: { width: 44, height: 44, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginBottom: 15 }, topicIconText: { fontSize: 17, fontWeight: '900' }, topicTitle: { color: '#ECF2EF', fontWeight: '900', fontSize: 16 }, topicSubtitle: { color: '#84918A', fontSize: 11.5, lineHeight: 17, marginTop: 4 }, go: { fontSize: 12, fontWeight: '900', marginTop: 'auto' }, privacy: { textAlign: 'center', color: '#66736D', fontSize: 11, marginTop: 28 },
  quizPage: { flex: 1, backgroundColor: '#0A0E0D' }, quizHeader: { height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, gap: 13 }, close: { fontSize: 32, color: '#829089', lineHeight: 34 }, progressTrack: { flex: 1, height: 7, borderRadius: 8, backgroundColor: '#202925', overflow: 'hidden' }, progressFill: { height: '100%', borderRadius: 8 }, counter: { color: '#78857F', fontWeight: '700', fontSize: 12 }, favoriteStar: { color: '#64716A', fontSize: 24 }, favoriteStarActive: { color: '#E6B759' }, quizBody: { padding: 22, paddingBottom: 32 }, metaRow: { flexDirection: 'row', alignItems: 'center' }, pill: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, fontSize: 12, fontWeight: '800' }, difficulty: { marginLeft: 'auto', color: '#59655F', letterSpacing: 2, fontSize: 11 }, infiniteQuizHint: { color: '#9B8CB2', fontSize: 11, fontWeight: '800', marginTop: 12 }, questionImageWrap: { height: 190, overflow: 'hidden', borderRadius: 20, backgroundColor: '#17201C', marginTop: 20 }, questionImage: { width: '100%', height: '100%' }, question: { color: '#F1F6F3', fontSize: 28, lineHeight: 35, fontWeight: '800', marginTop: 22, marginBottom: 28 }, choices: { gap: 11 }, choice: { minHeight: 68, borderRadius: 17, borderWidth: 1.5, borderColor: '#2A3530', backgroundColor: '#131917', padding: 12, flexDirection: 'row', alignItems: 'center' }, choiceWithImage: { minHeight: 102 }, choiceImage: { width: 78, height: 78, borderRadius: 12, backgroundColor: '#0B100E', marginRight: 12 }, choiceCorrect: { borderColor: '#68D7A2', backgroundColor: '#13271F' }, choiceWrong: { borderColor: '#E47D70', backgroundColor: '#291816' }, choiceLetter: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#222B27', alignItems: 'center', justifyContent: 'center', marginRight: 13 }, choiceLetterCorrect: { backgroundColor: '#4EBA88' }, choiceLetterWrong: { backgroundColor: '#C96358' }, choiceLetterText: { color: '#A0ACA6', fontWeight: '800' }, choiceLetterActive: { color: '#07110C' }, choiceText: { color: '#E3EAE6', flex: 1, fontSize: 15, fontWeight: '600' }, choiceMark: { color: '#68D7A2', fontSize: 21, fontWeight: '900', marginHorizontal: 6 }, freeInput: { minHeight: 62, borderWidth: 1.5, borderColor: '#303B36', backgroundColor: '#131917', borderRadius: 17, paddingHorizontal: 17, color: '#EDF4F0', fontSize: 16 }, checkButton: { minHeight: 50, backgroundColor: '#68D7A2', borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginTop: 12 }, checkButtonText: { color: '#07110C', fontSize: 15, fontWeight: '900' }, acceptedAnswer: { color: '#F09A8E', fontSize: 13, fontWeight: '700', marginTop: 10 }, explanation: { borderRadius: 17, padding: 17, marginTop: 20, borderLeftWidth: 4 }, explanationCorrect: { backgroundColor: '#13251E', borderLeftColor: '#68D7A2' }, explanationWrong: { backgroundColor: '#281917', borderLeftColor: '#E47D70' }, explanationTitle: { color: '#EDF4F0', fontWeight: '800', fontSize: 16, marginBottom: 6 }, explanationText: { color: '#A4B0AA', lineHeight: 21 }, explanationActions: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 13 }, learnMore: { alignSelf: 'flex-start', paddingVertical: 5 }, learnMoreText: { color: '#83E3B3', fontWeight: '800', fontSize: 13 }, reportQuestion: { paddingVertical: 5, paddingHorizontal: 2 }, reportQuestionText: { color: '#8A9791', fontWeight: '800', fontSize: 13 },
  satelliteMapWrap: { height: 520, borderRadius: 14, borderWidth: 1, borderColor: '#2E4238', backgroundColor: '#0F1D23', overflow: 'hidden', marginBottom: 12 }, satelliteMap: { flex: 1, backgroundColor: '#0F1D23' }, mapHint: { position: 'absolute', left: 12, right: 12, bottom: 10, color: '#D5E1DC', fontSize: 11, fontWeight: '800', textAlign: 'center', paddingHorizontal: 10, paddingVertical: 7, borderRadius: 999, backgroundColor: '#07110CCC', overflow: 'hidden' }, mapFeedback: { borderRadius: 16, borderWidth: 1, borderColor: '#2A3A33', backgroundColor: '#111714', padding: 14, marginTop: 10 }, mapFeedbackTitle: { color: '#E6EFEA', fontSize: 13, fontWeight: '900', marginBottom: 6 }, mapFeedbackText: { color: '#8FA19A', fontSize: 12, lineHeight: 18 },
  multiFields: { gap: 14 }, multiFieldLabel: { color: '#AAB5AF', fontSize: 11, fontWeight: '800', marginBottom: 7, marginLeft: 3 }, explanationPartial: { backgroundColor: '#2A2414', borderLeftColor: '#E6B759' }, partialCredit: { color: '#E6B759', fontSize: 11, fontWeight: '800', marginBottom: 8 },
  confidenceCard: { borderRadius: 17, borderWidth: 1, borderColor: '#28342E', backgroundColor: '#111714', padding: 15, marginTop: 13 }, confidenceTitle: { color: '#DEE8E3', fontSize: 14, fontWeight: '800' }, confidenceHint: { color: '#65736C', fontSize: 10, marginTop: 3, marginBottom: 12 }, confidenceRow: { flexDirection: 'row', gap: 7 }, confidenceButton: { flex: 1, minHeight: 42, borderRadius: 12, borderWidth: 1, borderColor: '#303C36', alignItems: 'center', justifyContent: 'center' }, confidenceButtonActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, confidenceButtonText: { color: '#8D9A93', fontSize: 11, fontWeight: '800' }, confidenceButtonTextActive: { color: '#07110C' },
  quizFooter: { padding: 18, borderTopWidth: 1, borderTopColor: '#222B27', backgroundColor: '#0A0E0D' }, primaryButton: { backgroundColor: '#68D7A2', minHeight: 56, borderRadius: 17, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28 }, primaryButtonText: { color: '#07110C', fontWeight: '900', fontSize: 16 }, disabled: { opacity: 0.32 },
  resultPage: { flex: 1, padding: 28, justifyContent: 'center', alignItems: 'stretch', backgroundColor: '#0A0E0D' }, resultCircle: { width: 180, height: 180, borderRadius: 90, borderWidth: 10, backgroundColor: '#131917', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }, resultPercent: { fontSize: 43, fontWeight: '900' }, resultScore: { color: '#839089', marginTop: 2 }, resultTitle: { color: '#F0F5F2', fontSize: 30, fontWeight: '800', textAlign: 'center' }, resultText: { color: '#96A29C', fontSize: 15, lineHeight: 22, textAlign: 'center', marginTop: 12, marginBottom: 20 }, calibrationCard: { borderRadius: 18, borderWidth: 1, borderColor: '#26332D', backgroundColor: '#111714', padding: 15, marginBottom: 22 }, calibrationTitle: { color: '#E6EFEA', fontSize: 13, fontWeight: '900', marginBottom: 12 }, calibrationRow: { flexDirection: 'row', gap: 8 }, calibrationItem: { flex: 1, borderRadius: 13, backgroundColor: '#171F1B', paddingVertical: 12, alignItems: 'center' }, calibrationValue: { color: '#68D7A2', fontSize: 22, fontWeight: '900' }, calibrationLabel: { color: '#7F8D86', fontSize: 10, fontWeight: '800', marginTop: 3, textAlign: 'center' }, breakdownCard: { borderRadius: 18, borderWidth: 1, borderColor: '#26332D', backgroundColor: '#111714', padding: 15, marginBottom: 22 }, breakdownRow: { minHeight: 34, flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#202A25', paddingTop: 8, marginTop: 7 }, breakdownLabel: { color: '#E6EFEA', fontSize: 12, fontWeight: '900', flex: 1 }, breakdownMeta: { color: '#7F8D86', fontSize: 10, minWidth: 44, textAlign: 'right' }, breakdownScore: { color: '#DDE8E3', fontSize: 11, fontWeight: '900', minWidth: 48, textAlign: 'right' }, breakdownPercent: { color: '#8EE0B5', fontSize: 12, fontWeight: '900', minWidth: 42, textAlign: 'right' }, secondaryButton: { minHeight: 54, alignItems: 'center', justifyContent: 'center', marginTop: 8 }, secondaryButtonText: { color: '#8DDBB2', fontWeight: '800', fontSize: 15 },
  libraryPage: { padding: 22, paddingBottom: 40, backgroundColor: '#0A0E0D' }, libraryHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 }, back: { color: '#83E3B3', fontSize: 40, lineHeight: 40, marginRight: 12 }, libraryTitle: { color: '#E8EFEB', fontSize: 20, fontWeight: '800' }, libraryHero: { color: '#F3F7F5', fontSize: 36, lineHeight: 41, fontWeight: '800', letterSpacing: -1 }, libraryStats: { flexDirection: 'row', backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', borderRadius: 20, paddingVertical: 17, marginBottom: 22 }, actionCard: { flexDirection: 'row', alignItems: 'center', minHeight: 86, borderRadius: 19, backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', padding: 14, marginBottom: 12 }, actionIcon: { width: 48, height: 48, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }, actionIconText: { color: '#68D7A2', fontWeight: '900', fontSize: 23 }, actionCopy: { flex: 1, paddingHorizontal: 13 }, actionTitle: { color: '#E9F0EC', fontSize: 15, fontWeight: '800' }, actionText: { color: '#84918A', fontSize: 12, lineHeight: 17, marginTop: 3 }, actionArrow: { color: '#5F6C65', fontSize: 28 }, report: { backgroundColor: '#13251E', borderRadius: 15, padding: 15, marginTop: 8 }, reportText: { color: '#8BE4B7', fontSize: 13, fontWeight: '700', lineHeight: 19 }, formatCard: { marginTop: 22, borderTopWidth: 1, borderTopColor: '#28312D', paddingTop: 20 }, formatTitle: { color: '#DDE6E1', fontWeight: '800', marginBottom: 7 }, formatText: { color: '#84918A', fontSize: 12, lineHeight: 19 },
  preparePage: { padding: 22, paddingBottom: 36, backgroundColor: '#0A0E0D' }, prepareEyebrow: { color: '#748079', fontSize: 11, fontWeight: '900', letterSpacing: 1.4 }, prepareBadge: { width: 58, height: 58, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginBottom: 18 }, prepareBadgeText: { fontSize: 20, fontWeight: '900' }, prepareTitle: { color: '#F2F7F4', fontSize: 36, lineHeight: 40, fontWeight: '900', letterSpacing: -1 }, prepareMeta: { color: '#85918B', fontSize: 13, marginTop: 9, marginBottom: 28 }, calmCard: { backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', borderRadius: 21, padding: 18, marginBottom: 12 }, calmTitle: { color: '#E9F0EC', fontSize: 16, fontWeight: '800' }, calmText: { color: '#89968F', fontSize: 12, lineHeight: 18, marginTop: 5 }, tensionRow: { flexDirection: 'row', gap: 9, marginTop: 18 }, tensionButton: { flex: 1, aspectRatio: 1, maxHeight: 48, borderRadius: 14, borderWidth: 1, borderColor: '#303A35', alignItems: 'center', justifyContent: 'center' }, tensionActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, tensionText: { color: '#A4B0AA', fontWeight: '800' }, tensionTextActive: { color: '#07110C' }, tensionLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 }, tensionLabel: { color: '#626F68', fontSize: 10 }, breathCard: { backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', borderRadius: 21, padding: 16, marginBottom: 18, flexDirection: 'row', alignItems: 'center' }, breathOrb: { width: 54, height: 54, borderRadius: 27, backgroundColor: '#202A25', borderWidth: 1, borderColor: '#344139', alignItems: 'center', justifyContent: 'center' }, breathOrbActive: { borderColor: '#68D7A2', backgroundColor: '#163024' }, breathOrbText: { color: '#B7E8CE', fontWeight: '900', fontSize: 16 }, breathCopy: { flex: 1, paddingHorizontal: 13 }, breathButton: { paddingVertical: 9, paddingHorizontal: 11 }, breathButtonText: { color: '#7DDEAD', fontWeight: '800', fontSize: 12 }, reassurance: { color: '#A5B0AA', fontSize: 13, lineHeight: 20, textAlign: 'center', marginHorizontal: 12, marginBottom: 20 }, healthNote: { color: '#5F6B65', fontSize: 10, lineHeight: 15, textAlign: 'center', marginTop: 16 },
  searchPage: { flex: 1, paddingTop: 20, backgroundColor: '#0A0E0D' }, searchInput: { marginHorizontal: 22, height: 58, borderRadius: 17, borderWidth: 1, borderColor: '#303B36', backgroundColor: '#131917', color: '#EFF5F2', fontSize: 16, paddingHorizontal: 17 }, searchHint: { color: '#748079', fontSize: 11, marginHorizontal: 24, marginTop: 9 }, searchResults: { padding: 22, gap: 10, paddingBottom: 120 }, searchResult: { minHeight: 74, borderRadius: 17, backgroundColor: '#131917', borderWidth: 1, borderColor: '#242D29', padding: 13, flexDirection: 'row', alignItems: 'center' }, searchResultActive: { borderColor: '#68D7A2', backgroundColor: '#12231C' }, searchCheck: { width: 28, height: 28, borderRadius: 9, borderWidth: 1, borderColor: '#39443E', marginRight: 12, alignItems: 'center', justifyContent: 'center' }, searchCheckActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, searchCheckText: { color: '#07110C', fontWeight: '900' }, searchQuestion: { color: '#E5ECE8', fontSize: 14, fontWeight: '700', lineHeight: 19 }, searchTags: { color: '#6F7C75', fontSize: 10, marginTop: 4 }, searchFooter: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: 18, backgroundColor: '#0A0E0DEE', borderTopWidth: 1, borderTopColor: '#222B27' },
  dailyVocabCard: { minHeight: 104, borderRadius: 20, backgroundColor: '#211A0F', borderWidth: 1, borderColor: '#4A3518', padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }, dailyVocabEyebrow: { color: '#E6B759', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, dailyVocabTitle: { color: '#FFF3D7', fontSize: 16, fontWeight: '900', marginTop: 5 }, dailyVocabText: { color: '#A99570', fontSize: 11, lineHeight: 16, marginTop: 5, maxWidth: 260 },
  adminPage: { padding: 22, paddingBottom: 54, backgroundColor: '#0A0E0D' }, adminSearchRow: { flexDirection: 'row', gap: 8, marginBottom: 16 }, adminSearchInput: { flex: 1, minHeight: 52, borderRadius: 15, borderWidth: 1, borderColor: '#303B36', backgroundColor: '#131917', color: '#EFF5F2', fontSize: 14, paddingHorizontal: 14 }, adminSearchButton: { width: 58, borderRadius: 15, backgroundColor: '#68D7A2', alignItems: 'center', justifyContent: 'center' }, adminSearchButtonText: { color: '#07110C', fontWeight: '900' }, adminTopicRow: { gap: 8, paddingRight: 20, paddingBottom: 16 }, adminSummary: { minHeight: 42, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, adminSummaryText: { color: '#8A9791', fontSize: 12, fontWeight: '800' }, adminList: { gap: 11 }, adminQuestionCard: { borderRadius: 18, borderWidth: 1, borderColor: '#25302B', backgroundColor: '#121815', padding: 14 }, adminQuestionHeader: { flexDirection: 'row', gap: 8, alignItems: 'center', marginBottom: 8 }, adminTopic: { color: '#68D7A2', fontSize: 11, fontWeight: '900' }, adminId: { color: '#5D6963', fontSize: 10, marginLeft: 'auto' }, adminPrompt: { color: '#EAF0ED', fontSize: 14, fontWeight: '800', lineHeight: 20 }, adminMeta: { color: '#78857F', fontSize: 11, marginTop: 8 }, adminActions: { flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 12 }, adminDifficultyButton: { width: 36, height: 34, borderRadius: 11, borderWidth: 1, borderColor: '#334039', alignItems: 'center', justifyContent: 'center' }, adminDifficultyActive: { backgroundColor: '#68D7A2', borderColor: '#68D7A2' }, adminDifficultyText: { color: '#AAB5AF', fontWeight: '900' }, adminDifficultyTextActive: { color: '#07110C' }, adminDeleteButton: { marginLeft: 'auto', minHeight: 34, borderRadius: 11, borderWidth: 1, borderColor: '#70413B', paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center' }, adminDeleteText: { color: '#F09A8E', fontSize: 12, fontWeight: '900' },
});
