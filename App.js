/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cursos from './src/pages/Cursos';
import DetalhesCurso from './src/pages/DetalhesCurso';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cursos" headerMode="none">
        <Stack.Screen name="Cursos" component={Cursos} />
        <Stack.Screen name="DetalhesCurso" component={DetalhesCurso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
