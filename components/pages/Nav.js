import { StyleSheet, Text, View,Image ,Button , TextInput, FlatList, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Nav(props) {

  return (
    <View>
      <Text style={styles.TextTitle}>Categorias</Text>
    </View>       
  );
}
const styles = StyleSheet.create({
    TextTitle: {
        marginTop:1,
        color:'orange',
        fontSize:20,        
      },
      Title: {
        display:'flex',
        flexDirection:'row'
      },
      TextInput:{
        color:'blue',
        fontSize: 25,
        marginTop: 10,
      },
});