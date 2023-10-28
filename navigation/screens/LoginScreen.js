import "react-native-gesture-handler";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
} from "firebase/auth";

import Menu from "../Menu"
import { auth } from "../../firebaseConfig";
import SignInScreen from "../../components/SignInScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, ActivityIndicator, View, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../../constants';
WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
    const [userInfo, setUserInfo] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: "101201286652-97a68ilqe0vo1ij6d00tujcbqq72bl9o.apps.googleusercontent.com",
        webClientId: "101201286652-003g9m57t01v0idpss6d0cchadlun1i2.apps.googleusercontent.com",
        androidClientId: "101201286652-9fsvons223rn4lob5qou47d9jrcj2g7r.apps.googleusercontent.com",
        scopes: [
            'openid',
            'email',
            'profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/calendar',
        ],
    });

    React.useEffect(() => {
        handleSignInWithGoogle();
    }, [response])
    async function handleSignInWithGoogle() {
        const user = await AsyncStorage.getItem("@user");
        if (!user) {
            if (response?.type === "success") {
                await getUserInfo(response.authentication.accessToken);
            }
            else {
                setUserInfo(JSON.parse(user));
            }
        }
    }

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            setUserInfo(user);

        }
        catch (error) {
            console.log(e, "Error getting local user");
        }
    }

    //const getLocalUser = async () => {
    //    try {
    //        setLoading(true);
    //        const userJSON = await AsyncStorage.getItem("@user");
    //        const userData = userJSON ? JSON.parse(userJSON) : null;
    //        setUserInfo(userData);
    //    } catch (e) {
    //        console.log(e, "Error getting local user");
    //    } finally {
    //        setLoading(false);
    //    }
    //};

    //React.useEffect(() => {
    //    if (response?.type === "success") {
    //        const { id_token } = response.params;
    //        const credential = GoogleAuthProvider.credential(id_token);
    //        signInWithCredential(auth, credential);
    //    }
    //}, [response]);

    //React.useEffect(() => {
    //    getLocalUser();
    //    const unsub = onAuthStateChanged(auth, async (user) => {
    //        if (user) {
    //            await AsyncStorage.setItem("@user", JSON.stringify(user));
    //            console.log(JSON.stringify(user, null, 2));
    //            setUserInfo(user);
    //        } else {
    //            console.log("user not authenticated");
    //        }
    //    });
    //    return () => unsub();
    //}, []);

    //if (loading)
    //    return (
    //        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //            <ActivityIndicator size={"large"} />
    //        </View>
    //    );

    const router = useRouter();
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            {/*<Button title="delete local storage" onPress={() => AsyncStorage.removeItem("@user")}></Button>*/}
            {userInfo ? <Menu /> : <SignInScreen promptAsync={promptAsync} />}
            <StatusBar style="auto" />
        </View>
    )
};

export default LoginScreen;
