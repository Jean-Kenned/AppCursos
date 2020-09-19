import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={styles.sourceImagem}
        style={styles.image}
        resizeMode="cover">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonBack}>
          <Text style={styles.textBackButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.textTitulo}>{props.titulo}</Text>
      </ImageBackground>
    </View>
  );
};

export default Header;
