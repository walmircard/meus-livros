import React from 'react';
import {Text} from 'react-native'
import PropTypes from 'prop-types';

export default class Label extends React.Component {
    render() {
      return (
        <Text style={{marginRight: 15,  marginLeft: 15, 
                      fontSize: this.props.tamanhofonte != null ? this.props.tamanhofonte : 20,
                      color: this.props.cor != null ? this.props.cor : 'black'}}>
            {this.props.texto}
        </Text>
      );
    }
  }

  Label.propTypes = {
    texto: PropTypes.string.isRequired,
    tamanhofonte: PropTypes.number,
    cor: PropTypes.string
  };