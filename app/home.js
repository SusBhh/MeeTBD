import "react-native-gesture-handler";
import * as React from "react";
import { ActivityIndicator, Button, View, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
    signInWithRedirect,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    getRedirectResult,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Stack, useRouter } from 'expo-router';

import SignInScreen from "../components/SignInScreen";
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
            console.log(response);
            // const { id_token } = response.params;
            // const credential = GoogleAuthProvider.credential(id_token);
            // signInWithCredential(auth, credential);

            // const auth = getAuth();
            const provider = new GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/calendar');

            signInWithRedirect(auth, provider);

            getRedirectResult(auth)
                .then((result) => {
                    console.log("result", result);
                    // This gives you a Google Access Token. You can use it to access Google APIs.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;

                    // The signed-in user info.
                    const user = result.user;
                    console.log(user);
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    console.log("error", error);
                    // The email of the user's account used.
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                })

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
            {/* {userInfo ? <Welcome /> : <SignInScreen promptAsync={promptAsync} />} */}
            {userInfo ? <Welcome /> : <Button title="Sign In" onPress={() => promptAsync()}
            />}
        </SafeAreaView>
    )
}

export default Home;