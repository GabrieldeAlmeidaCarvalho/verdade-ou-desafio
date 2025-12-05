import { StyleSheet } from 'react-native';

export const answerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  label: {
    fontSize: 20,
    color: '#AAA',
    marginBottom: 8,
  },
  playerName: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 30,
    textAlign: 'center',
  },
  prompt: {
    color: '#FFF',
    fontSize: 21,
    textAlign: 'center',
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    width: '100%',
  },
  nextButton: {
    backgroundColor: '#03DAC6',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  redButton: {
    backgroundColor: '#c44',
  },
  nextButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonGroup: {
    gap: 10,
    width: '100%',
  },
  textButton: {
  backgroundColor: 'transparent',
  alignItems: 'center',
  marginBottom: 60,
  },
  textButtonText: {
    color: '#FFF',
    fontSize: 16,
    // textDecorationLine: 'underline',
  },
});
