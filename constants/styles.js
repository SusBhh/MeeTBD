import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textBoxes: {
    borderColor: "#ecdff4",
    borderWidth: 4,
    borderRadius: 10,
    padding: 3,
    margin: 3,
  },
  button: {
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  centerText: {
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  input: {
    backgroundColor: "#F5F5F5",
    borderColor: "#f9c2ff",
    borderRadius: 10,
    borderWidth: 2,
    height: 40,
    margin: 12,
    padding: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  addGroupView: {
    borderColor: "#f9c2ff",
    borderWidth: 3,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
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
