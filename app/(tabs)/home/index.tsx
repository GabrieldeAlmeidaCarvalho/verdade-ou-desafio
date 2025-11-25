import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { usePlayers } from '../../../contexts/PlayerContext';
import { indexStyles as styles } from '../home/indexStyles';
import DifficultyScreen from '../difficulty/difficulty'; // caminho relativo dentro de (tabs)


export default function HomeScreen() {

  const router = useRouter();
  const { players, order, startGame, resetPlayers } = usePlayers();

  function handleStartGame() {
    if (players.length < 2) {
      alert('Ohh seu Otário, adicione pelo menos 2 jogadores, burro');
      return;
    }

    if (order.length === 0) {
      startGame(); // só se ainda não começou
    }

    router.push('/game/game'); // certifique-se que está dentro de (tabs)
  }

  function handleReset() {
    Alert.alert(
      'Confirmar Reset',
      'Tem certeza que deseja resetar todos os jogadores e o jogo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim', onPress: () => resetPlayers() },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verdade ou Desafio</Text>

      <TouchableOpacity style={styles.button} 
        onPress={() => router.push('/(tabs)/player/player')}
      >
        <Text style={styles.buttonText}>Adicionar Jogador</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#0074D9' }]}
        onPress={() => router.push('/(tabs)/difficulty/difficulty')}
      >
        <Text style={styles.buttonText}>Dificuldade</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={[styles.button, { backgroundColor: players.length >= 2 ? '#00998a' : '#555' }]}
        onPress={handleStartGame}
      >
        <Text style={styles.buttonText}>INICIAR JOGO</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={[
            styles.button,
            styles.exitButton,
            { marginTop: 100 },
          ]}
        onPress={handleReset}
      >
        <Text style={styles.buttonText}>Resetar Jogo</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={[styles.button, styles.exitButton]} onPress={() => console.log('Sair')}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity> */}
    </View>
  );
}
