import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const CreateGroup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  function create() {
    setDoc(doc(db, "groups", "testing1 "), {
      description: description,
      groupName: groupName,
    });
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
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => create()}
                >
                  <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Create New Group</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CreateGroup;
