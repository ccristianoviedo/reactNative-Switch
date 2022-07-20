import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity} from 'react-native';


export default function Item(item) {
  console.log(item)
  return (
    <View style={styles.container}>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.id}</Text>
        <Text>{item.stock}</Text>
      </View>
      
        
       
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
  TextInput:{
    color:'blue',
    fontSize: 25,
    marginTop: 70,
  },
  item:{
    marginTop:5,
    backgroundColor:'orange',
    width:300,
  },
  TextTitle: {
    marginTop:50,
    color:'orange',
    fontSize:40,
  } 
});
