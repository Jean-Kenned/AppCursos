import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
  },
  sourceImagem: require('../../../imagens/headerDetalhes.jpg'),
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.75,
  },
  textTitulo: {
    color: '#FF5D00',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textSubtitulo: {
    marginTop: 16,
    textAlign: 'center',
    width: '70%',
    color: '#EBEBEB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonBack: {
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textBackButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 1,
  },
});

export default styles;
