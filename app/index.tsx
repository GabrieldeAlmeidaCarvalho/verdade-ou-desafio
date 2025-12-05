import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={{ backgroundColor: '#151515', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 32, marginBottom: 80 }}>
        Verdade ou Desafio
      </Text>

      <Link href="/(tabs)/home" asChild>
        <TouchableOpacity style={{ backgroundColor: '#6200ee', padding: 16, borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontSize: 18 }}>Start Game</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
