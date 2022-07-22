import { StyleSheet, Text, View, Image,Button, TextInput, FlatList, TouchableOpacity} from 'react-native';


export default function Item() {
  
  return (
    <View style={styles.item}>
        <Text>Hola</Text>
        <Image
          source={{ uri: 'https://elpoderdelconsumidor.org/wp-content/uploads/2016/11/mandarina.jpg' }}
          style={{ width: 250, height: 250 }}
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
    fontFamily:'Italic'
  },
});
