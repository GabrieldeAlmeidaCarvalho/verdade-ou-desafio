import { StyleSheet } from 'react-native';

export const playerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#2C2C2C',
    color: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#03DAC6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  player: {
    color: '#FFF',
    fontSize: 18,
    paddingVertical: 4,
  },
  goBack: {
    marginTop: 30,
    alignItems: 'center',
  },
  goBackText: {
    color: '#999',
  },
  playerRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#222',
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 8,
  marginBottom: 8,
  },
  removeButton: {
  color: '#FF5252',
  fontSize: 18,
  fontWeight: 'bold',
  },
});