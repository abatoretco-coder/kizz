import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type QuestionStyle =
  | 'TTMC'
  | 'Trivial Poursuite'
  | 'Jeu TV'
  | 'Question pour un champion'
  | 'Pays & capitales'
  | 'Carte de France';

type Question = {
  id: string;
  style: QuestionStyle;
  theme: string;
  question: string;
  answer: string;
  difficulty?: number;
};

const QUESTION_BANK: Question[] = [
  {
    id: 'ttmc-1',
    style: 'TTMC',
    theme: 'Géographie',
    difficulty: 2,
    question: 'Quel océan borde la côte ouest de l’Afrique ?',
    answer: "L'océan Atlantique.",
  },
  {
    id: 'ttmc-2',
    style: 'TTMC',
    theme: 'Monuments',
    difficulty: 5,
    question: 'Dans quelle ville se trouve le Colisée ?',
    answer: 'À Rome.',
  },
  {
    id: 'ttmc-3',
    style: 'TTMC',
    theme: 'Relief',
    difficulty: 7,
    question: 'Quel massif sépare la France et l’Espagne ?',
    answer: 'Les Pyrénées.',
  },
  {
    id: 'trivial-1',
    style: 'Trivial Poursuite',
    theme: 'Histoire',
    question: 'Quelle capitale fut divisée par un mur de 1961 à 1989 ?',
    answer: 'Berlin.',
  },
  {
    id: 'trivial-2',
    style: 'Trivial Poursuite',
    theme: 'Sciences',
    question: 'Quel est le plus grand désert chaud du monde ?',
    answer: 'Le Sahara.',
  },
  {
    id: 'trivial-3',
    style: 'Trivial Poursuite',
    theme: 'Monde',
    question: 'Quel pays a Lima pour capitale ?',
    answer: 'Le Pérou.',
  },
  {
    id: 'tvt-1',
    style: 'Jeu TV',
    theme: 'Capitales',
    question: 'Top chrono : capitale du Canada ?',
    answer: 'Ottawa.',
  },
  {
    id: 'tvt-2',
    style: 'Jeu TV',
    theme: 'Pays',
    question: "Dans quel pays se trouve la ville d'Oslo ?",
    answer: 'En Norvège.',
  },
  {
    id: 'tvt-3',
    style: 'Jeu TV',
    theme: 'Relief',
    question: "Quel est le plus haut sommet d'Europe occidentale ?",
    answer: 'Le Mont Blanc.',
  },
  {
    id: 'qpc-1',
    style: 'Question pour un champion',
    theme: 'Indices',
    question:
      'Je suis un pays enclavé entre la France, l’Espagne et l’Atlantique. Qui suis-je ?',
    answer: 'Andorre.',
  },
  {
    id: 'qpc-2',
    style: 'Question pour un champion',
    theme: 'Indices',
    question:
      'Je suis traversé par le Nil et ma capitale est Le Caire. Quel pays suis-je ?',
    answer: "L'Égypte.",
  },
  {
    id: 'qpc-3',
    style: 'Question pour un champion',
    theme: 'Indices',
    question:
      'Je suis la capitale la plus haute d’Europe, située à 3 640 m. Qui suis-je ?',
    answer: 'La Paz (Bolivie).',
  },
  {
    id: 'cap-1',
    style: 'Pays & capitales',
    theme: 'Europe',
    question: 'Associe : Portugal → ?',
    answer: 'Lisbonne.',
  },
  {
    id: 'cap-2',
    style: 'Pays & capitales',
    theme: 'Asie',
    question: 'Associe : Japon → ?',
    answer: 'Tokyo.',
  },
  {
    id: 'cap-3',
    style: 'Pays & capitales',
    theme: 'Afrique',
    question: 'Associe : Kenya → ?',
    answer: 'Nairobi.',
  },
  {
    id: 'cap-4',
    style: 'Pays & capitales',
    theme: 'Amérique du Sud',
    question: 'Associe : Argentine → ?',
    answer: 'Buenos Aires.',
  },
  {
    id: 'cap-5',
    style: 'Pays & capitales',
    theme: 'Placement de pays',
    question:
      'Quel pays est situé entre la France, la Belgique et l’Allemagne, sans accès à la mer ?',
    answer: 'Le Luxembourg.',
  },
  {
    id: 'fr-map-1',
    style: 'Carte de France',
    theme: 'Régions',
    question: 'Quelle région se situe à l’extrême nord de la France métropolitaine ?',
    answer: 'Les Hauts-de-France.',
  },
  {
    id: 'fr-map-2',
    style: 'Carte de France',
    theme: 'Façades maritimes',
    question:
      'Sur quelle mer se trouve Marseille : Manche, Atlantique ou Méditerranée ?',
    answer: 'La mer Méditerranée.',
  },
  {
    id: 'fr-map-3',
    style: 'Carte de France',
    theme: 'Frontières',
    question: 'Quel pays est frontalier de la France au sud-ouest ?',
    answer: "L'Espagne.",
  },
  {
    id: 'fr-map-4',
    style: 'Carte de France',
    theme: 'Repérage',
    question:
      'Si tu vas de Paris vers le sud-est, tu rejoins Lyon. Dans quel grand axe cardinal est Lyon ?',
    answer: 'Au sud-est de Paris.',
  },
  {
    id: 'fr-map-5',
    style: 'Carte de France',
    theme: 'Massifs',
    question: 'Quel massif se situe à la frontière entre la France et la Suisse ?',
    answer: 'Le Jura.',
  },
];

const STYLES: QuestionStyle[] = [
  'TTMC',
  'Trivial Poursuite',
  'Jeu TV',
  'Question pour un champion',
  'Pays & capitales',
  'Carte de France',
];

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState<QuestionStyle>(STYLES[0]);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const filteredQuestions = useMemo(
    () => QUESTION_BANK.filter((question) => question.style === selectedStyle),
    [selectedStyle]
  );

  const activeQuestion = filteredQuestions[index];

  const nextQuestion = () => {
    setShowAnswer(false);
    setIndex((previous) => (previous + 1) % filteredQuestions.length);
  };

  const previousQuestion = () => {
    setShowAnswer(false);
    setIndex((previous) =>
      previous === 0 ? filteredQuestions.length - 1 : previous - 1
    );
  };

  const pickStyle = (style: QuestionStyle) => {
    setSelectedStyle(style);
    setIndex(0);
    setShowAnswer(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Banque de questions Kizz</Text>
        <Text style={styles.subtitle}>
          TTMC, Trivial, jeux TV, champion, pays/capitales et carte de France
        </Text>

        <View style={styles.chips}>
          {STYLES.map((style) => (
            <Pressable
              key={style}
              onPress={() => pickStyle(style)}
              style={[
                styles.chip,
                selectedStyle === style ? styles.chipActive : undefined,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedStyle === style ? styles.chipTextActive : undefined,
                ]}
              >
                {style}
              </Text>
            </Pressable>
          ))}
        </View>

        {activeQuestion ? (
          <View style={styles.card}>
            <Text style={styles.meta}>
              {activeQuestion.style} • {activeQuestion.theme}
              {activeQuestion.difficulty
                ? ` • Niveau ${activeQuestion.difficulty}/10`
                : ''}
            </Text>
            <Text style={styles.question}>{activeQuestion.question}</Text>

            <Pressable
              onPress={() => setShowAnswer((previous) => !previous)}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButtonText}>
                {showAnswer ? 'Masquer la réponse' : 'Voir la réponse'}
              </Text>
            </Pressable>

            {showAnswer ? <Text style={styles.answer}>{activeQuestion.answer}</Text> : null}

            <View style={styles.row}>
              <Pressable onPress={previousQuestion} style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Précédente</Text>
              </Pressable>
              <Pressable onPress={nextQuestion} style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Suivante</Text>
              </Pressable>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0b1324',
  },
  container: {
    padding: 20,
    gap: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    color: '#cdd5e6',
    fontSize: 14,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4f5f87',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#16213d',
  },
  chipActive: {
    backgroundColor: '#6d8bff',
    borderColor: '#6d8bff',
  },
  chipText: {
    color: '#d8def0',
    fontWeight: '600',
    fontSize: 12,
  },
  chipTextActive: {
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#111a31',
    borderRadius: 16,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: '#2c3b62',
  },
  meta: {
    color: '#9eb2e5',
    fontSize: 12,
    fontWeight: '600',
  },
  question: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
  },
  answer: {
    color: '#95f4a8',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#3d62ff',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  secondaryButton: {
    flex: 1,
    borderColor: '#5f6f96',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#d5dff8',
    fontWeight: '600',
  },
});
