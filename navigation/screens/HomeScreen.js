import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {styles} from './../../constants/styles'
export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>My Availability</Text>
            <Button
                style={styles.buttons}
                title="Automatically Fill in Using Google Calendar"
                color="#ecdff4"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}