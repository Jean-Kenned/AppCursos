import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={styles.sourceImagem} style={styles.image}>
        <Text style={styles.textTitulo}>CURSOS E TREINAMENTOS</Text>
        <Text style={styles.textSubtitulo}>
          Selecione o curso ou treinamento que deseja.
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Header;
