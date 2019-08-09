import React, { Component } from 'react';
import {
  Modal, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput
} from 'react-native';
import axios from 'axios';
import Success from './Success';
import c from '../styles/color';
import font from '../styles/font';

class SearchWindow extends Component {
  // i added opacity to the submit window, because that way
  // i was able to remove the visibility of the submit
  // window to match the screen with
  // quoteapp-success-submit.jpg
  state = {
    modalVisible: false,
    opacity: 1,
    quote: '',
    source: '',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  closeModals() {
    this.setState({ opacity: 1, modalVisible: 'false' });
  }

  noVisibility() {
    this.setState({ opacity: 0 });
  }

  submit() {
    // use your ip address
    const url = 'http://192.168.0.40:3200/data';
    axios.post(url, {
      quote: this.state.quote,
      source: this.state.source
    })
      .catch(err => console.log(err));
    this.state.quote = '';
    this.state.source = '';
  }

  render() {
    const { buttonContainer, containerStyle, inputStyle } = styles;
    return (
      <View>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false); }}
        >
          <View 
            style={[c.modalBackground, { opacity: this.state.opacity }]}
          >
            <ScrollView>
              <View style={containerStyle}>
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={[{
                      marginTop: 35,
                      marginBottom: 5
                    }, font.thinFont, font.mediumText]}
                  >Quote</Text>
                  <TextInput
                    style={[inputStyle, { height: 165 }]}
                    multiline
                    autoCorrect={false}
                    value={this.state.quote}
                    onChangeText={quote => this.setState({ quote })}
                  />
                  <Text
                    style={[{ paddingVertical: 15 }, font.thinFont, font.mediumText]}
                  >Source</Text>
                  <TextInput
                    style={[inputStyle, { height: 125 }]}
                    multiline
                    autoCorrect={false}
                    value={this.state.source}
                    onChangeText={source => this.setState({ source })}
                  />
                </View>

                <View style={buttonContainer}>
                  <Success
                    quote={this.state.quote}
                    source={this.state.source}
                    submit={() => { this.submit(); }}
                    closeModals={() => { this.closeModals(); }}
                    noVisibility={() => { this.noVisibility(); }}
                  />
                  <TouchableOpacity onPress={() => { this.setModalVisible(false); }}>
                    <Text style={[font.mediumText, font.thinFont]}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
          <Text style={[font.bigText, font.thinFont]}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: c.tintedWhite.backgroundColor,
    marginHorizontal: 50,
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
    marginBottom: 20
  },
  inputStyle: {
    backgroundColor: c.logoColor.backgroundColor,
    width: '90%',
    textAlignVertical: 'top',
  }
});

export default SearchWindow;
