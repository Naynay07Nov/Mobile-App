import React from 'react';
import { View, TextInput } from "react-native";
import MyIcon from "./MyIcon";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text } from 'react-native';
export default function Section2() {
    return (
        <View style={{ padding: 20 }}>
            

            {/* View ก้อนที่ 3 */}

            <View style={{ alignItems: 'center', flex: 1, marginTop: -50, padding: 10, backgroundColor: '#fffafa', borderRadius: 10}}>
                <View style={{ marginTop:2 }}>
                    <Text style={{ fontSize: 20 }}>Hilton San Francisco</Text>
                </View>
                {/* View ก้อนที่ 4 */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="star" size={15} color="orange" />
                        <FontAwesome name="star" size={15} color="orange" />
                        <FontAwesome name="star" size={15} color="orange" />
                        <FontAwesome name="star" size={15} color="orange" />
                        <FontAwesome name="star-half" size={15} color="orange" />
                    </View>
                </View>
                <View style={{ alignItems: 'center',justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ textAlign: 'center',fontSize: 12 ,color:'gray'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                </View>
               
            </View>

        </View>
    );
}
