import React from 'react';
import { View, Button } from 'react-native';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export default function Headerhome() {
const navigation = useNavigation(); 

 return (
   <View>
       <Icon 
        name='search'
        type='evilicon'
        color='#517fa4'
        size = {50}
        onPress={() => navigation.navigate("Procurar")}  
        />

   </View>
  );
}