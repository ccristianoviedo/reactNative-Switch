import React from'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, useWindowDimensions} from 'react-native';
import Nav from './components/pages/Nav';
import Title from './components/pages/title';
;

export default function Home({navigation}) {

    return (
    <View >     
       
        <Button
            title='Categorias'
            onPress={()=>
                navigation.navigate('Category')}
        />
    </View>
  );
}