import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';
import Hotel from '../../components/week3/Hotel';
//import Card from '../../components/week3/card';
import MyIcon from '../../components/week3/MyIcon';
import Menu from '../../components/week3/Menu';

export default function Travel() {
    return (        
        <ScrollView>
        <View style={{ flex: 1, paddingTop : 50 }}>
            {/* <Text> Week 3 </Text> */}
            <Menu/>
            <Card/>
            <Hotel/>
            <MyIcon/>
            <Signup />
          
        </View>
        
        </ScrollView>

    );
}
