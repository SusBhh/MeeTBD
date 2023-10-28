import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./../constants/styles";

export default function Group({ group }) {
  const [newTitle, setNewTitle] = useState(group.groupName);

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
        <Image
          style={styles.groupIcon}
          source={require("../constants/edit.png")}
        />
        <Image
          style={styles.groupIcon}
          source={require("../constants/delete.png")}
        />
      </View>
    </View>
  );
}
