import React, { Component } from 'react';
import { Modal, View, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import QuoteList from './QuoteList';
import SearchHeader from './SearchHeader';
import c from '../styles/color';

class QuoteWindow extends Component {
  state = { modalVisible: false };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false); }}
        >
          <ScrollView style={[c.tintedWhite, { flex: 1 }]}>
            <SearchHeader onPress={() => { this.setModalVisible(false); }} />
            <QuoteList quotes={this.props.quotes} />
          </ScrollView>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
            this.props.search();
          }}
        >
          <Icon
            name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
            color='#fff'
            size={55}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuoteWindow;
