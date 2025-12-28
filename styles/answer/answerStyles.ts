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
    backgroundColor: '#008000',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  blueButton: {
    backgroundColor: 'rgba(41, 85, 180, 1)',
  },
  redButton: {
    backgroundColor: 'rgba(167, 17, 17, 1)',
  },
  nextButtonText: {
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize: 19,
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
