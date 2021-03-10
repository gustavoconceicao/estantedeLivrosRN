import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {useSelector} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Book from "../../components/book"
import { ScrollView } from 'react-native-gesture-handler';


export default function home({navigation}) {
    const books = useSelector((state) => state.listBooks)
    const tamanho = useSelector((state) => state.listBooks.length)


    const booksWait = useSelector((state) => state.listBooksWait)
    const tamBooksWait = useSelector((state) => state.listBooksWait.length)

 return (
     <ScrollView>
        <View style={styles.container}>     
            <View style={styles.containerLivros}>
                <Text style={styles.title}>  Livros já lidos </Text>
                <Text>{tamanho}</Text>
            </View>
            <View>
                <FlatList
                    horizontal
                    data={books}                   
                    renderItem={({item}) => (       
                        <Book
                        item = {item}                
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}           
                />
            </View>
            <View style={styles.containerLivros2}>
                <Text style={styles.title}>   Livros Para ler  </Text>     
                <Text> {tamBooksWait}</Text>             
            </View>
            <View>
                <FlatList
                    horizontal
                    data={booksWait}                   
                    renderItem={({item}) => (       
                        <Book
                        item = {item}                
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}           
                />   
             </View>                 
            <Button title="Pesquisar" onPress={() => navigation.navigate("Procurar")}></Button>
        </View>
   </ScrollView>
  );
  
}

const styles = StyleSheet.create({
    container:{
        margin: '2%'
    },
    containerLivros:{
        marginVertical: '5%',       
        alignItems: 'center'
        
    },
    containerLivros2:{
        marginVertical: '5%',       
        alignItems: 'center'
        
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',        
    }
})