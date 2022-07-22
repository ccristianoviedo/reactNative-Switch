import React from'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity} from 'react-native';
import Item from './components/pages/Item';
import Nav from './components/pages/Nav';
import Title from './components/pages/title';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({
    Bold: require('./assets/fonts/Ubuntu-Bold.ttf'),
    BoldItalic: require('./assets/fonts/Ubuntu-BoldItalic.ttf'),
    Italic: require('./assets/fonts/Ubuntu-Italic.ttf'),
    Medium: require('./assets/fonts/Ubuntu-Medium.ttf'),
  })
  const [userNumber, setUserNumber] = useState();

  const HandlerStartApp=(selectedNumber)=>{
    setUserNumber(selectedNumber)
  }

  let content = <Nav onStart={HandlerStartApp}/>

  if(userNumber){
    content = <Item/>
  }

  if (!loaded) return <AppLoading/>
  return (
    <View style={styles.container}>
        <Title/>
        {content}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  text:{
    color:'red',
    fontSize: 65,
  },
 
  
  
});
