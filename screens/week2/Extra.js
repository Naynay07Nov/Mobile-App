import React from 'react';
import { View } from 'react-native';

export default function Extra() {
  return (
    <View style={{ flex : 1 , flexDirection : 'column' }}>
      
      <View style={{ flex : 1 ,flexDirection : 'column',backgroundColor : '#ffebb6' }}></View> 
      <View style={{flex : 1 , backgroundColor: 'red'}} />
      <View style={{flex: 2, flexDirection: 'row'}}>  
        <View style={{flex : 1 , backgroundColor: 'green'}} />

        <View style={{flex : 2 , backgroundColor: 'orange'}}>
          <View style={{flex: 2, flexDirection: 'column'}}>  
            
          </View>
        

        </View>
            
      </View>
      
    
    </View>
    
  
  );
  
}
