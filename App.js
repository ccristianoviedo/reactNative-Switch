import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import ItemListContainer from './components/pages/ItemListContainer';


export default function App() {
  const [textName, setTextName] = useState('');
  const [textAge, setTextAge] = useState('');
  const [itemList, setItemList] = useState([]);
  
  const onHandlerChangeName = (textItem)=> setTextName(textItem)

  const onHandlerChangeAge = (Number)=> setTextAge(Number)

  const onHandlerAddItem =()=> {
    setItemList(currentItems=>[...currentItems,
      {
        id: Date.now(), 
        value: textName,
        textAge: textAge,
      }])
    setTextName('')
    setTextAge('')
  }  
  return (
    <View style={styles.container}>
      <Text  style={styles.TextTitle}>
        Mandarinas
        <ItemListContainer/>
      </Text>         
      
      <FlatList
        data={itemList}
        renderItem={data=>(
          <TouchableOpacity
            style={styles.item}>
            <Text>{data.item.value}</Text>
            <Text>{data.item.id}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        
     />      
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
