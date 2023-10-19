import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
// import { TextInput } from "react-native-web";
import { useState } from "react"
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

export default function MakeGroup() {
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');


    function create() {
        setDoc(doc(db, "groups", "testing1 "), {
            description: description,
            groupName: groupName,
        });
    }
    return (
        <View>
            <Text>Make new group here</Text>
            <TextInput value={groupName} onChangeText={(groupName) => { setGroupName(groupName) }} placeholder="Group Name" style={borderWidth = 0.2}></TextInput>

            <TextInput value={description} onChangeText={(description) => { setDescription(description) }} placeholder="Description"></TextInput>

            <button onClick={create}>Create</button>
        </View>
    )
}