import React from 'react';
import {FlatList, Image, RefreshControl, StyleSheet, Text, View, Button} from 'react-native';
import Colors from '../constants/Colors';

onDetalhes = (item) => {
    console.log(item.preview);
  }

const renderItem = ({item}) => {
    console.log("item", item);

    return <View style={styles.container}>
        <View style={[styles.inner, styles.contentCol]}>
            <Image style={{width: 50, height: 50}} source={{uri: item.urlimagem}}/>
            <View style={styles.header}><Text>Título</Text></View>
            <View><Text style={styles.content}>{item.titulo}</Text></View>
            <View style={styles.header}><Text>Sub-Título</Text></View>
            <View><Text style={styles.content}>{item.subTitulo}</Text></View>
            <View style={styles.header}><Text>Data Publicação</Text></View>
            <View><Text style={styles.content}>{item.dataPublicacao}</Text></View>
            <View style={styles.header}><Text>Descrição</Text></View>
            <View><Text style={styles.content}>{item.descricao}</Text></View>
            <View style={styles.button}>
                    <Button onPress={this.onDetalhes(item)} title="Detalhes" color={Colors.tintColor}/>
            </View>
        </View>
    </View>
}

const getItemKey = (item) => item.id;

const LivrosList = (props) => {
    const {livros} = props;

    return (
        <FlatList
            data={livros}
            renderItem={renderItem}
            keyExtractor={getItemKey}
            onEndReachedTreshold={0.6}>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    inner: { display: 'flex', flexWrap: 'wrap'},
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 5
    },
    content: {
      fontSize: 16,
      fontWeight: '700'
    },
    contentCol: {
        display: 'flex',
        flex: 8,
    },
    button: {
        marginVertical: 5
    }
})

export default LivrosList;