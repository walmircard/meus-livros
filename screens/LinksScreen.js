import React from 'react';
import { ScrollView, StyleSheet, WebView } from 'react-native';
import { Constants } from 'expo';

export default class LinksScreen extends React.Component {
  /*static navigationOptions = {
    title: 'Links',
  };*/
  static navigationOptions = {
    title: "Detalhes",
    headerStyle: {
      backgroundColor: Constants.manifest.primaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}