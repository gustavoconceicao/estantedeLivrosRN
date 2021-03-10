import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ImageLoader} from 'react-native-image-fallback';

export default function BookSearch({item}) {
  const navigation = useNavigation();
  const fallbacks = 'https://cdn2.iconfinder.com/data/icons/image-1/64/Image-12-512.png';
  var thumb = ""
  if(item.volumeInfo.imageLinks){
    thumb = item.volumeInfo.imageLinks.thumbnail
  }
 return (
   <TouchableHighlight
          onPress={() => navigation.navigate("Detalhes", {
            titulo: item.volumeInfo.title, thumbnail: thumb,
            autor: item.volumeInfo.authors, lancamento: item.volumeInfo.publishedDate,
            resumo: item.volumeInfo.description
            }
          )}
          underlayColor="#DDDDDD"
   >
      <View style={styles.container}>
          <ImageLoader
              style={styles.img}
              source={thumb}
              fallback={fallbacks}
              
            />
            <View style={styles.containerTextos}>
              <Text style={styles.titulo}>
                  {item.volumeInfo.title}
              </Text>
              <Text>
                  {item.volumeInfo.authors}
              </Text>
              <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>
                <Text>
                    {item.volumeInfo.publishedDate}
                </Text> 
              </View>                
            </View>
      </View>
   </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginVertical: '1%',
        marginHorizontal: '1%',
         
    },
    img:{
        width: 64,
        height: 100,
    },
    containerTextos:{
      flexDirection: "column",
      justifyContent: 'center',
      marginHorizontal: '2%',     
    },
    titulo:{
      flexWrap: 'wrap',
      fontSize: 12,
      color: 'red',      
    },
})