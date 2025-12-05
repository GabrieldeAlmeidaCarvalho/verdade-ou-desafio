import { StyleSheet } from 'react-native';

export const buttonColors: Record<string, string> = {
  safe: '#FF6B6B',
  dalhe: '#FF4B4B',
  caliente: '#E53935',
  proibidano: '#B71C1C',
  gb: '#800000',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
  textAlign: 'center',
  marginTop: 15,
  marginBottom: 5,
  fontSize: 14,
  color: '#aaa',
},

});
