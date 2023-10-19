import * as React from 'react';
import { View, Text } from 'react-native';
import MakeGroup from './../../components/MakeGroup';

export default function GroupsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Groups Screen</Text>
            <MakeGroup/>
        </View>
    );
}