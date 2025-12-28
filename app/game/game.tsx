import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { usePlayers } from '../../contexts/PlayerContext';
import { gameStyles as styles } from '../../styles/game/gameStyles';
import lists from './lists/lists';
import { truthGb as TruthsGb } from '../../data/truth/truthGb';
import { dareGb as DaresGb } from '../../data/dare/dareGb';

export default function JogoScreen() {
  const {
    players,
    order,
    currentPlayer,
    startGame,
    difficulty,
    getPrompt,
  } = usePlayers();
  const router = useRouter();

  useEffect(() => {
    if (players.length < 2) {
      alert('Ohh seu otário, adicione pelo menos 2 jogadores, burro');
      router.push('/home');
      return;
    }

    if (order.length === 0) {
      startGame();
    }
  }, []);

  const handleOption = (type: 'truth' | 'dare' | 'random') => {
    const currentLists = difficulty === 'gb'
      ? { truths: TruthsGb, dares: DaresGb }
      : lists[difficulty] || lists.safe;

    let promptType: 'truth' | 'dare' =
      type === 'random' ? (Math.random() < 0.5 ? 'truth' : 'dare') : type;

    const sourceList = promptType === 'truth' ? currentLists.truths : currentLists.dares;

    const randomPrompt = getPrompt(currentPlayer, promptType, sourceList);

    router.push({
      pathname: '/answer/answer',
      params: {
        jogador: currentPlayer,
        prompt: randomPrompt,
        type: promptType,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, color: '#ccc', marginBottom: 8 }}>
        Dificuldade: <Text style={{ fontWeight: 'bold', color: '#fff' }}>{difficulty.toUpperCase()}</Text>
      </Text>
      <TouchableOpacity
        onPress={() => router.push('/(tabs)/scoreboard/scoreboard')}
        style={styles.scoreButton}
      >
        <Text style={styles.scoreText}>Placar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.label}>Vez de:</Text>
        <Text style={styles.playerName}>{currentPlayer}</Text>

        <View style={styles.options}>
          <TouchableOpacity style={[styles.button, styles.truth]} onPress={() => handleOption('truth')}>
            <Text style={styles.buttonText}>VERDADE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.dare]} onPress={() => handleOption('dare')}>
            <Text style={styles.buttonText}>DESAFIO</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={[styles.button, styles.random]} onPress={() => handleOption('random')}>
            <Text style={styles.buttonText}>Aleatório</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.buttonText}>Voltar ao Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
