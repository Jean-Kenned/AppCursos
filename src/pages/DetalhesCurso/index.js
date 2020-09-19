import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const DetalhesCurso = (props) => {
  const {titulo, descricao} = props.route.params.cursoInfos;
  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
    </View>
  );
};

export default DetalhesCurso;
