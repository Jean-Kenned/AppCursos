import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Header from './Header';
import {ScrollView} from 'react-native-gesture-handler';

const DetalhesCurso = (props) => {
  const cursoInfos = props.route.params.cursoInfos;
  return (
    <View style={styles.container}>
      <Header {...cursoInfos} />
      <ScrollView style={styles.body}>
        <Text>{cursoInfos.descricao}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.imagem} source={{uri: cursoInfos.imagem}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetalhesCurso;
