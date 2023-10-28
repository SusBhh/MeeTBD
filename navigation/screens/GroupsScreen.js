import * as React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CreateGroup from "../../components/CreateGroup";
import Groups from "../../components/Groups";

export default function GroupsScreen() {
  const [userEmail, setUserEmail] = React.useState();
  const [loading, setLoading] = React.useState("");

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
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>
            Groups Screen
          </Text>
          <CreateGroup userEmail={userEmail} />
          <Text> </Text>
          <Groups userEmail={userEmail} />
        </View>
      )}
    </View>
  );
}
