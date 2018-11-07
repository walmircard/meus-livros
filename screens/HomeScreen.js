import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  CheckBox,
  Switch,
  Text,
  Alert, TextInput
} from 'react-native';
import { Constants } from 'expo';
import Colors from '../constants/Colors';
import Label from '../components/Label';
import InputLabel from '../components/InputLabel';
import LivrosList from '../components/LivroList';
import {consultarLivros} from '../services/LivroService';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: "Pesquisa",
    headerStyle: {
      backgroundColor: Constants.manifest.primaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      autor: '',
      titulo: '',
      somentePortugues: false,
      livros: []
    };

  }

  onChangeAutor = (text) => {
    this.setState({autor: text})
  };

  onChangeTitulo = (text) => {
    this.setState({titulo: text});
  };

  onChangeSomentePortugres = (value) => {
    this.setState({somentePortugues: value});
  }

  onPesquisa = () => {
    this.setState({livros: []});

    let filtros = (this.state.titulo != '' ? this.state.titulo : '[]') +
                  '+inauthor:' + (this.state.autor != '' ? this.state.autor : '[]') +
                  '&langRestrict=' + (this.state.somentePortugues ? 'pt' : '[]');

    let URL = 'https://www.googleapis.com/books/v1/volumes?q=' + filtros;

    fetch(URL)
    .then(function(response) {
       let data = response.json()
       return data;
    })
    .then((json) => {

      var data = json.items.map(function(item) {
        return {
           key: item.id,
           titulo: item.volumeInfo.title,
           subTitulo: item.volumeInfo.subtitle,
           dataPublicacao: item.volumeInfo.publishedDate,
           descricao: item.volumeInfo.description,
           urlimagem: (item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : ''),
           preview: item.volumeInfo.previewLink
        };
      });

      this.setState({livros: data});
    })
    .catch(function(ex) {
       console.log('parsing failed', ex)
    })
  }

  render() {
    console.log("render home");
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
          <InputLabel texto="Autor" onChange={this.onChangeAutor}/>
          <InputLabel texto="Título" onChange={this.onChangeTitulo}/>

          <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
            <Label texto='Somente Portugês'/>
            <Switch value={this.state.somentePortugues} onValueChange={this.onChangeSomentePortugres}/>
          </View>

          <View style={{margin: 15}}>
            <Button title="Pesquisar" color={Colors.tintColor} onPress={this.onPesquisa}/>         
          </View>

          <LivrosList livros={this.state.livros}/> 
      </View>
    );
  }
}