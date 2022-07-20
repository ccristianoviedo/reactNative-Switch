import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import { getItem } from './mooks/getItem';
import Item from './Item';


export default function ItemListContainer() {
    const [item, setItem] = useState([]);       

    useEffect(() => {        
         getItem().then((data) => {setItem(data)})
        .catch((error)=>console.error(error + 'HA OCURRIDO UN ERROR!!'))                   
    },[])
   
  return (
    <View style={styles.container}>
      <Text  style={styles.TextTitle}>
        Mandarinas
      </Text>
      <View>     
       {item.map((item)=><Item item={item} key={item.id}/>)}
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
