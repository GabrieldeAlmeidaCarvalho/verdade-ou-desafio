import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { usePlayers } from '../../contexts/PlayerContext';

export default function AuthScreen() {
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setDifficulty } = usePlayers();

  const handleAccess = () => {
    if (password === 'Redgreenblue') {
      setDifficulty('gb');
      router.push('/game/game');
    } else {
      Alert.alert('Senha incorreta', 'Digite as palavras corespondentes para acessar');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#000000' }}>
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center', color: '#ffffff' }}>
        Acesso restrito
      </Text>

      <TextInput
        placeholder="Digite a senha"
        placeholderTextColor="#ffffff"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: '#ffffff',
          color: '#ffffff',
          backgroundColor: '#000000',
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleAccess}
        style={{
          backgroundColor: '#ffffff',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#000000' }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
