import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import s from './styles/color';

const Header = () => {
  const { viewStyle, textStyle, circle } = styles;

  return (
    <View style={viewStyle}>
      <View style={circle}>
        <Text style={[textStyle, { marginBottom: -45 }]}>Quote</Text>
        <Text style={[textStyle, { marginLeft: 45 }]}>Finder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'fayet scripts',
    fontSize: 72,
  },
  circle: {
    width: 216,
    height: 216,
    borderRadius: 216 / 2,
    backgroundColor: s.logoColor.backgroundColor,
    marginTop: 60
  },
});

export default Header;
