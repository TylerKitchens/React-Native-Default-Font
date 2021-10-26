import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomText from './CustomText'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Standard Text</Text>
      <CustomText>Montserrat Text</CustomText>
      <CustomText style={{fontSize : 20}}>Big Montserrat Text</CustomText>
      <CustomText style={{fontWeight : 'bold'}}>Bold Text</CustomText>
      <CustomText style={{fontStyle : 'italic'}}>Italic Text</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
