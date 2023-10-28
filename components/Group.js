import React, { useState } from "react";
import {
  Modal,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";

import {
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { styles } from "./../constants/styles";

export default function Group({ group, userEmail }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [newGroupName, setNewGroupName] = useState(group.groupName);

  const handleEdit = async (id, GroupName) => {
    await updateDoc(doc(db, "groups", id), { groupName: GroupName });
    setModalVisible(false);
  };

  const handleDelete = async (id) => {
    // TODO: add are you sure alert
    await deleteDoc(doc(db, "groups", id));
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(false);
          }}
        >
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <Text>Edit Group</Text>
                  <TextInput
                    style={styles.input}
                    value={newGroupName}
                    onChangeText={(newGroupName) => {
                      setNewGroupName(newGroupName);
                    }}
                    placeholder={group.groupName}
                  ></TextInput>
                </View>
                <Pressable
                  style={[styles.buttons, styles.buttonClose]}
                  onPress={() => handleEdit(group.id, newGroupName)}
                >
                  <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      <View style={styles.group}>
        <Text style={styles.groupText}>{group.groupName}</Text>
        <View style={styles.groupIcons}>
          <Pressable onPress={() => setModalVisible(true)}>
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
    </View>
  );
}
