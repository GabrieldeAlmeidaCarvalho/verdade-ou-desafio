import { StyleSheet } from 'react-native';

export const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  scoreButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 10,
    zIndex: 1,
  },
  scoreText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
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
  options: {
    width: '100%',
    gap: 16,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  truth: {
    backgroundColor: '#8e44ad',
  },
  dare: {
    backgroundColor: '#e67e22',
  },
  backButton: {
    backgroundColor: '#999',
    width: '100%',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
