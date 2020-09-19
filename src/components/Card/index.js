import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Card = (props) => {
  const navigation = useNavigation();
  const cursoInfos = {
    titulo: props.item.titulo,
    descricao: props.item.descricao,
    imagem: props.item.imagem,
  };

  const openDescricaoCurso = () => {
    navigation.navigate('DetalhesCurso', {
      cursoInfos: cursoInfos,
    });
  };

  return (
    <TouchableOpacity onPress={openDescricaoCurso}>
      <View elevation={5} style={styles.container}>
        <Text style={styles.tituloText}>{cursoInfos.titulo}</Text>
        <Image source={{uri: cursoInfos.imagem}} style={styles.imagem} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
