import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding: 10 }}>
            <View style={{ paddingLeft: 6 }}>
                <Text style={{ fontSize: 18 }}>Room Type</Text>

            </View>

            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 90, height: 110, borderRadius: 10 / 2 }} source={require("../../assets/week3/room-8.jpg")} />
                
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18 }}>Standard Twin Room</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: 'red' }} >$399.99</Text>
                    </View>
                    <Text style={{ color: '#5F9EA0' }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>


        </View>
    );
}
