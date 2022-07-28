import { StyleSheet, Text, View, Image,Button, TextInput, FlatList, TouchableOpacity} from 'react-native';

export default function Title() {
    
  return (
    <View style={styles.Title}>
        <View>
            <Image
                source={{ uri: 'https://educacion30.b-cdn.net/wp-content/uploads/2020/10/pile-of-books-on-the-table-at-the-library-978x652.jpg' }}
                style={styles.imgTitle}
                />
        </View>
        <View>
            <Text style={styles.TextTitle}>
                 Libreria Fausto
            </Text>
        </View> 
    </View>
  );
}
const styles = StyleSheet.create({
    TextTitle: {
        marginTop:20,
        color:'white',
        fontSize:18,
        
      },
      Title: {
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        fontFamily:'Bold'
      },
      imgTitle:{
        marginTop:5,
        width: 100,
        height: 100,
        borderRadius:40,
        marginRight:40
      }
});