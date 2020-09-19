import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
  },
  sourceImagem: require('../../../imagens/headerImagem.png'),
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitulo: {
    color: '#FF5D00',
    fontSize: 20,
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
});

export default styles;
