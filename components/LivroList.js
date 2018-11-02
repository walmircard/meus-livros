import React from 'react';
import {FlatList, Image, RefreshControl, StyleSheet, Text, View, Button} from 'react-native';
import Colors from '../constants/Colors';

onAdicionarFavorito = () => {
}

const renderItem = ({item}) => {
    console.log("item", item);

    return <View style={styles.tweetContainer}>
        <View style={[styles.innerTweet, styles.contentCol]}>
            <Image style={{width: 50, height: 50}} source={{uri: item.urlimagem}}/>
            <View style={styles.tweetHeader}><Text>Título</Text></View>
            <View><Text style={styles.tweetContent}>{item.titulo}</Text></View>
            <View style={styles.tweetHeader}><Text>Sub-Título</Text></View>
            <View><Text style={styles.tweetContent}>{item.subTitulo}</Text></View>
            <View style={styles.tweetHeader}><Text>Data Publicação</Text></View>
            <View><Text style={styles.tweetContent}>{item.dataPublicacao}</Text></View>
            <View style={styles.tweetHeader}><Text>Descrição</Text></View>
            <View><Text style={styles.tweetContent}>{item.descricao}</Text></View>
            <Button onPress={onAdicionarFavorito} title="Adicionar aos favoritos" color="#841584"/>
        </View>
    </View>
}

const getItemKey = (item) => item.id;

const LivrosList = (props) => {
    const {livros, getNextPage} = props;

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
    tweetContainer: {
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
    innerTweet: { display: 'flex', flexWrap: 'wrap'},
    tweetHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 5
    },
    tweetContent: {
      fontSize: 16,
      fontWeight: '700'
    },
    tweetPhoto: {
        width: 100,
        height: 100
    },
    contentCol: {
        display: 'flex',
        flex: 8,
    },
    photoCol: {
        display: 'flex',
        flex: 3
    }
})

export default LivrosList;