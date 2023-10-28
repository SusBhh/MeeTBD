import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { styles } from "./../constants/styles";

export default function Group({ group }) {
  const [newGroupName, setNewGroupName] = useState(group.groupName);

  const handleEdit = async (group, newGroupName) => {
    await updateDoc(doc(db, "groups", group.id), { groupName: newGroupName });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "groups", id));
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (group.complete === true) {
      setNewTitle(group.groupName);
    } else {
      group.groupName = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <View style={styles.group}>
      <Text>{group.groupName}</Text>
      <View style={styles.groupIcons}>
        <Pressable onPress={() => handleEdit(group, newGroupName)}>
          <Image
            style={styles.groupIcon}
            source={require("../constants/edit.png")}
          />
        </Pressable>
        <Pressable onPress={() => handleDelete(group.id)}>
          <Image
            style={styles.groupIcon}
            source={require("../constants/delete.png")}
          />
        </Pressable>
      </View>
    </View>
  );
}
