import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './UI/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {

  

  return (
    <LinearGradient colors={['#52174B','#DA18C4']} style={styles.container}>
      <ImageBackground 
      source={require('./assets/typiara_i_mikrofala.jpg')} 
      resizeMode='cover' imageStyle={{opacity:0.5}} style={styles.container}>
      
      <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
