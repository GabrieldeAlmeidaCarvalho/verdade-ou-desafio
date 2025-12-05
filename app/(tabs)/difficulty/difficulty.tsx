import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { usePlayers } from '../../../contexts/PlayerContext';
import { buttonColors, styles } from '../../../styles/(tabs)/difficulty/difficultyStyles';

export default function DifficultyScreen() {
  const router = useRouter();
  const { setDifficulty } = usePlayers();

  const handleSelect = (level: string) => {
    setDifficulty(level);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a Dificuldade</Text>

      <View style={styles.buttonsContainer}>

        {/* SAFE */}
        <Text style={styles.description}>Para jogar casualmente com os amigos:</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColors.safe }]}
          onPress={() => handleSelect('safe')}
        >
          <Text style={styles.buttonText}>SAFE</Text>
        </TouchableOpacity>

        {/* DALHE */}
        <Text style={styles.description}>Um pouco mais desafiador...:</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColors.dalhe }]}
          onPress={() => handleSelect('dalhe')}
        >
          <Text style={styles.buttonText}>DALHE</Text>
        </TouchableOpacity>

        {/* CALIENTE */}
        <Text style={styles.description}>Melhor dificuldade para se preparar pros finalmentes:</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColors.caliente }]}
          onPress={() => handleSelect('caliente')}
        >
          <Text style={styles.buttonText}>CALIENTE</Text>
        </TouchableOpacity>

        {/* PROIBIDANO */}
        <Text style={styles.description}>Se você namora, espero que não seja monogâmico:</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColors.proibidano }]}
          onPress={() => handleSelect('proibidano')}
        >
          <Text style={styles.buttonText}>PROIBIDANO</Text>
        </TouchableOpacity>

        {/* GB */}
        <Text style={styles.description}>Não.</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColors.gb }]}
          onPress={() => router.push('/gb/auth')}
        >
          <Text style={styles.buttonText}>GB</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
