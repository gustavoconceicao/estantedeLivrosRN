import React from 'react';
import { View,  Text, StyleSheet, ScrollView} from 'react-native';
import {ImageLoader} from 'react-native-image-fallback';
import BookStatus from "../../components/bookStatus"
import {useSelector, useDispatch} from "react-redux"
import {addBooksinList} from "../../store/ducks/booksList"
import {addBooksinListWait} from '../../store/ducks/bookListWait'
import {bookItem} from "../../store/ducks/booksList"

export default function details({route, navigation}) {
    var {titulo, thumbnail, autor, lancamento, resumo} = route.params;
    const fallbacks = 'https://cdn2.iconfinder.com/data/icons/image-1/64/Image-12-512.png';
    const dispatch = useDispatch()

    function addBookList (bookItem, value){
        bookItem.value = value
        dispatch(addBooksinList(bookItem))
    }

    function addBookListWait (bookItem, value){
        bookItem.value = value
        dispatch(addBooksinListWait(bookItem))
    }
    
 return (
     <View>    
        <View style={styles.container}>
            <View>
                <ImageLoader
                    style={styles.img}
                    source={thumbnail}
                    fallback={fallbacks}              
                />
             </View>                
            <View style={styles.containerTextos}>
                <Text style={styles.titulo}>
                    {titulo}
                </Text>
                <Text style={styles.autor}>
                    {autor}
                </Text>
                <Text>
                    Data de lançamento: {lancamento}
                </Text> 
                <ScrollView>
                    <Text style={styles.resumo}>
                        {resumo}
                    </Text>
                </ScrollView>                                  
            </View>    
        </View>
        <BookStatus        
            funcao = {addBookList}   
            funcaoWait = {addBookListWait}  
            item = { currentBook = new bookItem(titulo, resumo, autor, lancamento, thumbnail)}               
        />        
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 10,
        height: 250
    },
    img:{
        width: 140,
        height: 250,
    },
    containerTextos:{
        flex: 1,
        flexDirection: 'column',
        margin: '1%',
    },
    autor:{
        fontWeight: 'bold',
        marginBottom: 5
    },
    titulo:{
        fontSize: 18,
        color: 'red',
        marginBottom: 5
    },
    resumo:{
        fontSize: 13,
        padding: 3,
        flexWrap: 'wrap'
    }
})