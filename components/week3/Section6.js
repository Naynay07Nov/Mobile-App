import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{borderTopWidth : 0.5,borderColor:'gray',borderBottomWidth:0.5,borderBottomColor:'gray', padding : 15  }}>
            <View style={{ padding : 0 }}>
                <Text style={{ fontSize : 20 }}>Location</Text>
                <Text style={{ color : '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View> 
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 5/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
            {/* View ก้อนที่ 3 */}
           
        </View>    
    );
}
