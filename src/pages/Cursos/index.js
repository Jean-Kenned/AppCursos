import React, {useEffect, useState} from 'react';
import {View, Alert, ActivityIndicator, FlatList} from 'react-native';
import styles from './styles';
import Constantes from '../../constantes';
import Card from '../../components/Card';
import Header from './Header';
import NenhumCursoDisponivel from './NenhumCursoDisponivel';

const REQUEST_URL =
  'http://' + Constantes.API.HOST + ':' + Constantes.API.PORT + '/api/cursos';

const Cursos = (props) => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getCursos = () => {
    setLoading(true);
    setRefreshing(true);
    fetch(REQUEST_URL)
      .then(function (response) {
        response.json().then(async function (data) {
          setCursos(data);
          setLoading(false);
          setRefreshing(false);
        });
      })
      .catch(function (err) {
        Alert.alert(
          'Sem conexão com a internet',
          'Verifique sua conexão com a internet',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        );
      });
  };

  useEffect(() => {
    getCursos();
  }, []);

  const handleRefresh = () => {
    getCursos();
  };

  return (
    <View style={styles.container}>
      <Header />
      {loading ? (
        <ActivityIndicator color="black" />
      ) : cursos.length === 0 ? (
        <NenhumCursoDisponivel handleRefresh={handleRefresh} />
      ) : (
        <FlatList
          data={cursos}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          renderItem={(item) => <Card {...item} />}
        />
      )}
    </View>
  );
};

export default Cursos;
