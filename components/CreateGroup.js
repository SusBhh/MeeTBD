import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { styles } from "./../constants/styles";

const CreateGroup = ({userEmail}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");


  async function handleCreate() {
    if (groupName !== "") {
      owner = userEmail;
      members = [userEmail];
      await addDoc(collection(db, "groups"), {
        owner,
        groupName,
        description,
        members,
      });
      setGroupName("");
      setDescription("");
    }
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.centeredView}>
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
                  <Text>Make new group here</Text>
                  <TextInput
                    style={styles.input}
                    value={groupName}
                    onChangeText={(groupName) => {
                      setGroupName(groupName);
                    }}
                    placeholder="Group Name"
                  ></TextInput>
                  <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={(description) => {
                      setDescription(description);
                    }}
                    placeholder="Description"
                  ></TextInput>
                </View>
                <Pressable
                  style={[styles.buttons, styles.buttonClose]}
                  onPress={() => handleCreate()}
                >
                  <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      <Pressable
        style={[styles.buttons, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Create New Group</Text>
      </Pressable>
    </View>
  );
};

export default CreateGroup;
