import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import search from "./src/screens/search"
import home from "./src/screens/home"
import details from "./src/screens/details"
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux"
import store from "./src/store"
import HeaderSearch from './src/components/headerSearch';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const Stack = createStackNavigator()

function teste () {
  console.warn ("testado")
}

  return ( 
    <SafeAreaProvider>
      <Provider store = {store}>
          <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator initialRouteName="Pagina Inicial" screenOptions={{headerTitleAlign: 'center'}}>         
              <Stack.Screen name= "Seus_Livros" component={home}/>
              <Stack.Screen name= "Procurar" component={search} options={{
                header: (props) => <HeaderSearch {...props}/>     
              }}/>
              <Stack.Screen name="Detalhes" component={details}/>
          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
