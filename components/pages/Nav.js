import { StyleSheet, Text, View,Image ,Button , TextInput, FlatList, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Nav(props) {
      const [enteredValue, setEnteredValue] = useState('');
      const [confirmed, setConfirmed] = useState(false);
      const [selectedNumber, setSelectedNumber] = useState('');
    
      const HandlerInputNumber =(text)=>{
        setEnteredValue(text.replace(/[^0-9]/g, ''))
      }
      const HandlerResetInput=()=>{
        setConfirmed(false)
        setEnteredValue('')
      }
      const HandlerConfirmInput=()=>{
        let ChoseNumber = parseInt(enteredValue)
        if(ChoseNumber===NaN || ChoseNumber<0 || ChoseNumber>99)
        return
          setConfirmed(true)
          setSelectedNumber(parseInt(enteredValue))
          setEnteredValue('')
      }
  return (
    <View style={styles.Title}>
        <View>
            <TextInput
            placeholder='EDAD'
            keyboardType='numeric'
            style={styles.TextInput}
            value={enteredValue}
            onChangeText={HandlerInputNumber}
        />
        {enteredValue.length>0 && (
          <View>
            <Button
                title='Confirmar'
                onPress={HandlerConfirmInput}
            />
            <Button
                title='Limpiar'
                onPress={HandlerResetInput}
            />
          </View> 
        )}
        <View>
          {confirmed && (
            <View>
            <Text>{selectedNumber}</Text>
            <Button
              title='Ingresar'
              onPress={()=>props.onStart(selectedNumber)}
            />
            </View>
          )}
        </View>
     </View> 
    </View>
  );
}
const styles = StyleSheet.create({
    TextTitle: {
        marginTop:100,
        color:'orange',
        fontSize:20,        
      },
      Title: {
        display:'flex',
        flexDirection:'row'
      },
      imgTitle:{
        marginTop:50,
        width: 100,
        height: 100
      }, TextInput:{
        color:'blue',
        fontSize: 25,
        marginTop: 70,
      },
});