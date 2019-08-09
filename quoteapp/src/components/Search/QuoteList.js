import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import c from '../styles/color';
import font from '../styles/font';

class QuoteList extends Component {
  renderQuotes() {
    const { quoteContainer, quoteText, sourceText } = styles;
    return this.props.quotes.map(q => (
      <View style={quoteContainer} key={q._id}>
        <Text style={quoteText}>{q.quote}</Text>
        <Text style={sourceText}>-{q.source}</Text>
      </View>
    ));
  }

  render() {
    return this.renderQuotes();
  }
}

const styles = StyleSheet.create({
  quoteContainer: {
    backgroundColor: c.tintedWhite.backgroundColor,
    borderBottomColor: c.logoColor.backgroundColor,
    borderBottomWidth: 1,
  },
  quoteText: {
    paddingTop: 20,
    paddingHorizontal: 10,
    fontFamily: font.thinFont.fontFamily,
    fontSize: 18
  },
  sourceText: {
    textAlign: 'left',
    fontFamily: font.regularFont.fontFamily,
    fontSize: 18,
    paddingBottom: 10,
    paddingLeft: '50%',
    paddingRight: 30
  }
});

export default QuoteList;
