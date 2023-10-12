import "react-native-gesture-handler";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import SignInScreen from "../components/SignInScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Welcome, ScreenHeaderBtn } from '../components';

WebBrowser.maybeCompleteAuthSession();

const Home = () => {
    const [userInfo, setUserInfo] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        // iosClientId: "",
        webClientId: "101201286652-003g9m57t01v0idpss6d0cchadlun1i2.apps.googleusercontent.com",
        androidClientId: "101201286652-9fsvons223rn4lob5qou47d9jrcj2g7r.apps.googleusercontent.com",
    });

    const getLocalUser = async () => {
        try {
            setLoading(true);
            const userJSON = await AsyncStorage.getItem("@user");
            const userData = userJSON ? JSON.parse(userJSON) : null;
            setUserInfo(userData);
        } catch (e) {
            console.log(e, "Error getting local user");
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (response?.type === "success") {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response]);

    React.useEffect(() => {
        getLocalUser();
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                await AsyncStorage.setItem("@user", JSON.stringify(user));
                console.log(JSON.stringify(user, null, 2));
                setUserInfo(user);
            } else {
                console.log("user not authenticated");
            }
        });
        return () => unsub();
    }, []);

    if (loading)
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={"large"} />
            </View>
        );

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
            {userInfo ? <Welcome /> : <SignInScreen promptAsync={promptAsync} />}
        </SafeAreaView>
    )
}

export default Home;