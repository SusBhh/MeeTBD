import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textBoxes: {
    borderColor: "#ecdff4",
    borderWidth: 4,
    borderRadius: 10,
    padding: 3,
    margin: 3,
  },
  buttons: {
    color: "#ffffff",
    backgroundColor: "#ecdff4",
    borderRadius: 10,
    padding: 3,
    margin: 3,
    elevation: 2,
  },
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
  groupScreen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  group: {
    backgroundColor: "#f9c2ff",
    borderRadius: 4,
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupText: {
    paddingRight: 8,
  },
  groupIcons: {
    display: "flex",
    flexDirection: "row",
  },
  groupIcon: {
    width: 20,
    height: 20,
    alignSelf: "flex-end",
  },
});

export { styles };
