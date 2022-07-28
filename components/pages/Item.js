import {Alert, StyleSheet, Text, View, Image,Button, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';


export default function Item() {
  
  return (
    <View style={styles.item}>
        <Text>Hola</Text>
        <ScrollView>
        <TouchableOpacity
            onPress={()=>Alert.alert('hola')}>
            <Image
              source={{ uri: 'https://www.cucinare.tv/wp-content/uploads/2020/02/Anana-1024x579.jpg' }}
              style={{ width: 250, height: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>Alert.alert('hola')}>
            <Image
              source={{ uri: 'https://www.agritotal.com/files/image/15/15535/563d9a7ed9996_720_960!.jpg?s=c9d5eb4a4af9e45ffe3c343dfc4ccf49&d=1597098521' }}
              style={{ width: 250, height: 150 }}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={()=>Alert.alert('hola')}>
            <Image
              source={{ uri: 'https://www.cucinare.tv/wp-content/uploads/2020/02/Anana-1024x579.jpg' }}
              style={{ width: 250, height: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>Alert.alert('hola')}>
            <Image
              source={{ uri: 'https://www.cucinare.tv/wp-content/uploads/2020/02/Anana-1024x579.jpg' }}
              style={{ width: 250, height: 150 }}
            />
          </TouchableOpacity>
        </ScrollView>
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
    fontFamily:'Italic'
  },
});
