import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex09';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import Extra from './screens/week2/Extra';
import { TextInput,StyleSheet,View } from 'react-native';
import Travel from './screens/week3/Travel'; 
import TestPaper from './screens/week4/TestPaper';
import { PaperProvider } from 'react-native-paper';
import Resort from './screens/week3/Resort';
export default function App() {
  return (
    //<Ex12 />
    //<Travel />
    //<PaperProvider>
      //<TestPaper />
    //</PaperProvider>
    <Resort />
   
 
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});