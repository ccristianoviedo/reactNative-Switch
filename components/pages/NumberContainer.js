import { StyleSheet, Text, View, Image,Button, TextInput, FlatList, TouchableOpacity} from 'react-native';

export default function NumberContainer(props) {
  
  return (
    <View style={styles.Number}>
        <Text style={styles.TextNumber}>{props.children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Number: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  TextNumber:{
    color:'red',
    fontSize: 165,
  },
});
