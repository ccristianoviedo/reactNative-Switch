import {Alert, StyleSheet, Text, View, Image,Button, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import Item from '../components/pages/Item';


export default function Category() {
  
  return (
    <View style={styles.item}>
        <Text>Categorias</Text>
        <Button
            title='Detalles'
            onPress={()=>{
                navigation.navigate('Details')}}
        />        
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  text:{
    color:'red',
    fontSize: 65,
    
  },
});
