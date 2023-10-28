import * as React from "react";
import { ActivityIndicator, ScrollView, View, Text } from "react-native";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

import Group from "./Group";

export default function Groups() {
  const [loading, setLoading] = React.useState(false);
  const [groups, setGroups] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "groups"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let groupsArray = [];
      querySnapshot.forEach((doc) => {
        groupsArray.push({ ...doc.data(), id: doc.id });
      });
      setGroups(groupsArray);
      console.log(groups);
    });
    return () => unsub();
  }, []);

  console.log(groups);
  console.log(groups.length);

  return (
    <ScrollView>
      {groups.length == 0 ? (
        <ActivityIndicator />
      ) : (
        <View>
          {groups.map((group, i) => <Group group={group} key={group.id} />)}
        </View>
      )}
    </ScrollView>
  );
}
