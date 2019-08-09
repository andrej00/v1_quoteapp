import React, { Component } from 'react';
import { 
  View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity 
} from 'react-native';
import font from '../styles/font';
import c from '../styles/color';

class Success extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { submit, closeModals, noVisibility } = this.props;
    return (
      <View>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
            closeModals();
          }}
        >
          <View style={[c.modalBackground, { justifyContent: 'center' }]}>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setModalVisible(false);
                closeModals();              
              }}
            >
              <View style={styles.modalStyle}>
                <Text style={styles.textStyle}>
                  Your submission was successful!
              </Text>

                <Text style={styles.textStyle}>
                  We'll let you know when your submission goes live after review
              </Text>

                <Text
                  style={[styles.textStyle, { marginBottom: 50 }]}
                >Thank you for contribution!</Text>
              </View>
            </TouchableWithoutFeedback>

          </View>
        </Modal>
        
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
            noVisibility();
            submit();
          }}
        >
          <Text style={[font.mediumText, font.thinFont]}>Submit</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: c.tintedWhite.backgroundColor,
    marginHorizontal: 50,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  textStyle: {
    fontSize: 24,
    marginTop: 35,
    textAlign: 'center',
    fontFamily: font.thinFont.fontFamily
  }
});

export default Success;
