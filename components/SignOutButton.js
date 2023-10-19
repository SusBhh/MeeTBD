import { signOut } from "firebase/auth";
import { Button, View } from "react-native";
import { auth } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignOutButton() {
    return (
        <View>
            <Button
                title="Sign Out"
                onPress={async () => {
                    await signOut(auth);
                    await AsyncStorage.removeItem("@user");
                    location.reload();
                }}
            />
        </View>
    );
}