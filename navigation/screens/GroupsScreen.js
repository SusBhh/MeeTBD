import * as React from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { styles } from "./../../constants/styles";

import CreateGroup from "../../components/CreateGroup";
import Groups from "../../components/Groups";

export default function GroupsScreen() {
  const [userEmail, setUserEmail] = React.useState();
  const [loading, setLoading] = React.useState("");
  const [groupID, setGroupID] = React.useState("");

  const handleJoin = async () => {
    //  TODO: add check for if groupID does not exist
    try {
      await updateDoc(doc(db, "groups", groupID), {
        members: arrayUnion(userEmail),
      });
    } catch {
      console.log("error while updating group: " + groupID);
    }

    setGroupID("");
  };

  const getLocalUser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      setUserEmail(userData.email);
    } catch (e) {
      console.log(e, "Error getting local user");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getLocalUser();
  }, []);

  return (
    <View>
      {loading || userEmail === undefined ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.groupScreen}>
          <Groups userEmail={userEmail} />

          <View style={styles.addGroupView}>
            <Text style={styles.centerText}>Join an Existing Group by ID</Text>
            <TextInput
              style={styles.input}
              value={groupID}
              onChangeText={(groupID) => {
                setGroupID(groupID);
              }}
              placeholder="Group ID here"
            ></TextInput>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleJoin()}
            >
              <Text style={styles.button}>Join</Text>
            </Pressable>
            <Text style={styles.centerText}>or</Text>
            <CreateGroup userEmail={userEmail} />
          </View>
        </View>
      )}
    </View>
  );
}
