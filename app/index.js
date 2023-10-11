import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Welcome, ScreenHeaderBtn } from '../constants';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} demension="60%" />
                    ),
                    headerRight: () => (
                        < ScreenHeaderBtn iconUrl={icons.profile} demension="100%" />
                    ),
                }}
            />
        </SafeAreaView>
    )
}

export default Home;