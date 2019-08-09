import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import s from '../styles/color';

const SearchHeader = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerStyle}>Quote Finder</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  headerStyle: {
    fontFamily: 'fayet scripts',
    fontSize: 36,
    paddingVertical: 5,
    paddingLeft: 35
  },
  headerContainer: {
    backgroundColor: s.logoColor.backgroundColor
  }
});

export default SearchHeader;
