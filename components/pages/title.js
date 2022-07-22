import { StyleSheet, Text, View, Image,Button, TextInput, FlatList, TouchableOpacity} from 'react-native';


export default function Title() {
  
  return (
    <View style={styles.Title}>
        <View>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSkYfqFRG5zpIkobwhfqXcsESnZqN1T4hGRw&usqp=CAU' }}
                style={styles.imgTitle}
                />
        </View>
        <View>
            <Text style={styles.TextTitle}>
                BIENVENIDO A
            </Text>
            <Text style={styles.TextTitle}>
                FESTIVAL DE FRUTAS
            </Text>
        </View> 
    </View>
  );
}
const styles = StyleSheet.create({
    TextTitle: {
        marginTop:20,
        color:'orange',
        fontSize:20,        
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
        height: 100
      }
});