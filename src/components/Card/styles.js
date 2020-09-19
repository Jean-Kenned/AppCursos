import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    minHeight: 150,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  tituloText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '60%',
  },
});

export default styles;
