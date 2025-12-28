import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { usePlayers } from '../../contexts/PlayerContext';
import { answerStyles as styles } from '../../styles/answer/answerStyles';
import lists from '../game/lists/lists';
import { truthGb as TruthsGb } from '../../data/truth/truthGb';
import { dareGb as DaresGb } from '../../data/dare/dareGb';

export default function AnswerScreen() {
  const { jogador, prompt, type } = useLocalSearchParams<{
    jogador: string;
    prompt: string;
    type: 'truth' | 'dare';
  }>();
  const { nextPlayer, difficulty, addPoints, getPrompt } = usePlayers();
  const router = useRouter();

  const currentLists = difficulty === 'gb'
    ? { truths: TruthsGb, dares: DaresGb }
    : lists[difficulty] || lists.safe;

  const sourceList = type === 'truth' ? currentLists.truths : currentLists.dares;

  const handleAnother = () => {
    const newPrompt = getPrompt(jogador!, type!, sourceList);
    router.replace({
      pathname: '/answer/answer',
      params: {
        jogador,
        prompt: newPrompt,
        type,
      },
    });
  };

  const handleDoneDrink = () => {
    if (jogador) addPoints(jogador, 5);
    nextPlayer();
    router.push('/game/game');
  };

  const handleDone = () => {
    if (jogador) addPoints(jogador, 4);
    nextPlayer();
    router.push('/game/game');
  };

  const handleDrink = () => {
    if (jogador) addPoints(jogador, 3);
    nextPlayer();
    router.push('/game/game');
  };

  return (
    <View style={styles.container}>
      <Text style={{ alignSelf:'flex-start' , fontSize: 16, color: '#ccc', paddingBottom: 90 }}>
        Dificuldade: <Text style={{ fontWeight: 'bold', color: '#fff' }}>{difficulty.toUpperCase()}</Text>
      </Text>
      <Text style={styles.label}>Jogador:</Text>
      <Text style={styles.playerName}>{jogador}</Text>

      <Text style={styles.prompt}>{prompt}</Text>

      <TouchableOpacity style={styles.textButton} onPress={handleAnother}>
        <Text style={styles.textButtonText}>Mudar a frase</Text>
      </TouchableOpacity>

      <View style={styles.buttonGroup}>

        <TouchableOpacity style={styles.nextButton} onPress={handleDone}>
          <Text style={styles.nextButtonText}>Feito!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.nextButton, styles.blueButton]} onPress={handleDoneDrink}>
          <Text style={styles.nextButtonText}>Fiz e bebi!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.nextButton, styles.redButton]} onPress={handleDrink}>
          <Text style={styles.nextButtonText}>Me recuso, vou BEBER.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
