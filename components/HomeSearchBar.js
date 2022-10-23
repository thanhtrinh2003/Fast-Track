import React from 'react';
import { View } from "react-native"
import { TextInput } from 'react-native-gesture-handler';

export default function HomeSearchBar() {
    return (
        <View style={{width: 350, height: 100, alignItems: "center"}}>
            <TextInput style= {{marginTop: 112, width: 200, height: 30, backgroundColor: "white", borderRadius: 10}}/>
        </View>
    );
}