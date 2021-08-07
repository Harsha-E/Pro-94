import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class logoutScreen extends Component{
    render(){
  return (
    <View style={styles.container}>
      <Text>Logout Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
