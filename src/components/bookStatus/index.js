import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from "react";

export default function BookStatus({funcao, funcaoWait, item}) {
    const [star, setStarValue] = useState({stars: 0})
 return (
   <View style={styles.container}>
       <Text>
           DEFINA UMA NOTA PARA ESSE LIVRO
       </Text>
       <Stars
            half={true}
            default={1}
            update={(val)=>{setStarValue({stars: val})}}
            spacing={2}
            starSize={50}
            count={5}
            fullStar={<Icon name={'star'} size={30} style={styles.stars}></Icon>}
            emptyStar={<Icon name={'star-outline'} size={30} ></Icon>}
            halfStar={<Icon name={'star-half'} size={30} ></Icon>}
        />
         <TouchableHighlight onPress={() => funcao(item, star)}>
             <Text style={styles.opc}>Eu ja li esse livro</Text>   
         </TouchableHighlight>
         <TouchableHighlight onPress={() => funcaoWait(item, star)} >
             <Text style={styles.opc}>Planejo ler esse livro</Text>  
         </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: '10%',        
        alignItems: 'center'
    },  
    opc:{
        textTransform:'uppercase',
        fontSize: 18,
        marginVertical: '5%'
    },  
})