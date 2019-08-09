import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Search from './Search/Search';
import Submit from './Submit/Submit';
import c from './styles/font';

const ButtonContainer = () => {
  const { viewStyle, textStyle } = styles;
  
  return (
    <View style={viewStyle}>
      <Submit />
      <Text style={textStyle}>or</Text>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: c.mediumText.fontSize,
    fontFamily: c.boldFont.fontFamily,
    marginVertical: 32
  }
});

export default ButtonContainer;
