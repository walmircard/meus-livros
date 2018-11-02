import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';
import Label from './Label';

export default class InputLabel extends React.Component {
    render() {
      console.log("render inputlabel render");
      return (
        <View> 
          <Label texto={this.props.texto}/>
          <TextInput onChangeText={this.props.onChange} style={{fontSize: 20, color: 'blue', marginLeft: 15, marginRight: 15}}/>
        </View>
      );
    }
  }