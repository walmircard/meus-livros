import React from 'react';
import { WebView } from 'react-native';
import { Constants } from 'expo';

export default class DetalhesScreen extends React.Component {
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
        source={{uri: ''}}
        style={{marginTop: 20}}
      />
    );
  }
}