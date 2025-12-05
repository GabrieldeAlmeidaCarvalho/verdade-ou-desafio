// app/(tabs)/player/player.tsx
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import { usePlayers } from '../../../contexts/PlayerContext';
import { playerStyles as styles } from '../../../styles/(tabs)/player/playerStyles';

export default function AddPlayerScreen() {
  const router = useRouter();
  const { players, addPlayer, removePlayer, shouldShuffle, setShouldShuffle } = usePlayers();
  const [playerName, setPlayerName] = useState('');

  function handleAddPlayer() {
    if (playerName.trim().length > 0) {
      addPlayer(playerName.trim());
      setPlayerName('');
    }
  }

  function handleRemovePlayer(indexToRemove: number) {
    removePlayer(indexToRemove);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Jogador</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do jogador"
        placeholderTextColor="#AAA"
        value={playerName}
        onChangeText={setPlayerName}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddPlayer}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.playerRow}>
            <Text style={styles.player}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemovePlayer(index)}>
              <Text style={styles.removeButton}>✖</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: '#FFF', marginRight: 10 }}>Embaralhar ordem dos jogadores</Text>
        <Switch
          value={shouldShuffle}
          onValueChange={setShouldShuffle}
        />
      </View>

      <TouchableOpacity style={styles.goBack} onPress={() => router.back()}>
        <Text style={styles.goBackText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
