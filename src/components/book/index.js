import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ImageLoader} from 'react-native-image-fallback';
import {novaString} from "../../utils/tamanhoString"

export default function Book({item}) {
    const fallbacks = 'https://cdn2.iconfinder.com/data/icons/image-1/64/Image-12-512.png';

 return (
     <View style={{marginHorizontal: 2}}>
        <View style={styles.container}>
            <Text>
                 {novaString(item.titulo)}
            </Text>
                <ImageLoader
                    source={item.thumb}
                    fallback={fallbacks}   
                    style={styles.img}
                />
                <Text>
                    {item.autor}
                </Text>
        </View>
     </View>
   
  );
}

const styles = StyleSheet.create({
    container:{        
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,   
    },
    img:{
        width: 100,
        height: 130
    }
})