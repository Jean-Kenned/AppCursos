import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NenhumCursoDisponivel = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textAviso}>
        Não há cursos cadastrados no momento.
      </Text>
      <TouchableOpacity style={styles.button} onPress={props.handleRefresh}>
        <Text style={styles.textButton}>Recarregar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NenhumCursoDisponivel;
