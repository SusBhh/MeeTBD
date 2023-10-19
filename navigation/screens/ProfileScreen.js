import * as React from 'react';
import { View, Text } from 'react-native';
import SignOutButton from '../../components/SignOutButton';

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
        
           <SignOutButton />
        </View>
    );
}