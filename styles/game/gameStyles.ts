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
    marginBottom: 50,
    textAlign: 'center',
  },
  options: {
    width: '100%',
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',
  },
  truth: {
    backgroundColor: '#6c009bff',

  },
  dare: {
    backgroundColor: '#eb6d00ff',
    
  },
  random: {

  },
  backButton: {
    backgroundColor: '#999',
    width: '60%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
