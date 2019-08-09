import React, { Component } from 'react';
import { Modal, View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import font from '../styles/font';
import Radio from './Radio';
import Quote from './Quote';
import c from '../styles/color';

const options = [
  { key: 'quote', text: '...by word' },
  { key: 'source', text: '...by author' },
];

class SearchWindow extends Component {
  state = {
    modalVisible: false,
    text: '',
    radio: '',
    quotes: []
  };

  setRadio(key) {
    this.setState({ radio: key });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  search() {
    // use your ip address
    const url = `http://192.168.0.40:3200/data?radio=${this.state.radio}&text=${this.state.text}`;
    axios.get(url)
      .then((res) => { this.setState({ quotes: res.data }); })
      .catch(err => console.log(err));
  }

  render() {
    const { containerStyle, inputStyle } = styles;
    return (
      <View>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false); }}
        >
          <View style={[c.modalBackground, { justifyContent: 'flex-end' }]} >
            <TouchableOpacity
              style={{ height: '77.7%' }}
              onPress={() => { this.setModalVisible(false); }}
            />
            <View style={containerStyle}>
              <Radio
                options={options}
                searchState={this.state}
                setRadio={this.setRadio.bind(this)}
              />
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                  style={inputStyle}
                />
                <Quote
                  search={this.search.bind(this)}
                  quotes={this.state.quotes}
                />
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
          <Text style={[font.bigText, font.thinFont]}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: c.logoColor.backgroundColor,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10
  },
  inputStyle: {
    height: 50,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 20
  }
});

export default SearchWindow;
