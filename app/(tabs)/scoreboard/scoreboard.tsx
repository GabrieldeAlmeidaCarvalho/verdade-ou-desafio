import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { usePlayers } from '../../../contexts/PlayerContext';

export default function PlacarScreen() {
  const { scores } = usePlayers();
  const router = useRouter();

  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  return (
    <View style={{ flex: 1, marginTop: 30, padding: 20, backgroundColor: '#111' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Placar</Text>
      {sortedScores.map(([player, score], index) => (
        <Text key={player} style={{ fontSize: 18, color: 'white', marginBottom: 10 }}>
          {index + 1}. {player}: {score} ponto(s)
        </Text>
      ))}
      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: '#555',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
        }}
        onPress={() => router.push('/game/game')}
      >
        <Text style={{ color: 'white' }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
