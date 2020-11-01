/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Router from './src/router/Router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor='#004483' barStyle="default" />
      <Router/>
    </>
  );
};



export default App;
