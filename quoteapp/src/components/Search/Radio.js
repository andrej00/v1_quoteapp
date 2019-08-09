import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import s from '../styles/color';
import font from '../styles/font';

class Radio extends Component {
  renderRadioButtons() {
    const { options, searchState, setRadio } = this.props;
    return options.map(item => (
      <View key={item.key} style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => { setRadio(item.key); }}
      >
        {searchState.radio === item.key && <View style={styles.checkedCircle} />}
      </TouchableOpacity>
      <Text style={styles.textStyle}>{item.text}</Text>
    </View>
    ));
  }

	render() {
		return this.renderRadioButtons();
	}
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: font.thinFont.fontFamily,
    marginLeft: 5,
  },
	buttonContainer: {
		flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10
	},
	circle: {
		height: 17,
		width: 17,
		borderRadius: 17 / 2,
		alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 4
	},
	checkedCircle: {
		width: 11,
		height: 11,
		borderRadius: 11 / 2,
    backgroundColor: s.logoColor.backgroundColor
	},
});

export default Radio;
