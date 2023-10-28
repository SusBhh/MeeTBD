import * as React from "react";
import { ActivityIndicator, ScrollView, View, Text } from "react-native";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

import Group from "./Group";

export default function Groups({ userEmail }) {
  const [groups, setGroups] = React.useState([]);

  if (userEmail != undefined) {
    React.useEffect(() => {
      const q = query(collection(db, "groups"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let groupsArray = [];
        querySnapshot.forEach((doc) => {
          if (userEmail && doc.data().members.includes(userEmail)) {
            groupsArray.push({ ...doc.data(), id: doc.id });
          }
        });
        setGroups(groupsArray);
      });
      return () => unsub();
    }, []);
  }

  return (
    <ScrollView>
      {groups.length == 0 ? (
        <Text>No groups to display</Text>
      ) : (
        <View>
          {groups.map((group, i) => (
            <Group group={group} userEmail={userEmail} key={group.id} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}
