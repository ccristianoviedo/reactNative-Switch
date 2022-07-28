import React from'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, useWindowDimensions} from 'react-native';
import MainStack from './navigation/MainStack';

export default function App() {

    return (
      <View style={styles.container}>
        <MainStack/>
      </View>
  );
}
