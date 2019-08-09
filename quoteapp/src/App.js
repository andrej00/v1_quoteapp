import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import ButtonContainer from './components/ButtonContainer';
import c from './components/styles/color';

// tested on android devices

const App = () => (
  <View style={[c.tintedWhite, { flex: 1 }]}>
    <Header />
    <ButtonContainer />
  </View>
);

export default App;
