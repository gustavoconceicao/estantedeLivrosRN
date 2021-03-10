import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import {searchBooks} from "../../services/searchApi"
import { useSelector, useDispatch } from 'react-redux';

export default function HeaderSearch({navigation}) {
  const dispatch = useDispatch();
  const [value, onChangeText] = React.useState('');
  
  return (   
          <View style ={{ }}>
          <Header            
              backgroundColor='white'
              centerComponent={
                <View>
                  <TextInput 
                    placeholder={'Procure pelo nome do autor'} 
                    style={{ width: 300, backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 5 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                  />
                </View>
              }
              leftComponent= {
                  <Icon
                    name='chevron-left'
                    type='evilicon'
                    color='#517fa4'
                    size = {50}
                    onPress={() => navigation.goBack()}

                  />}
              rightComponent={ 
                <Icon
                  name='search'
                  type='evilicon'
                  color='#517fa4'
                  size = {32}  
                  onPress={() => dispatch (searchBooks(value))}
                                           
              />}
          />
        </View>
  );
}

const styles = StyleSheet.create({
  styles:{
     
  }
})