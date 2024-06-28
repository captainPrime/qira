import { StyleSheet } from "react-native";

export const VCInputStyle = StyleSheet.create({
  text_input_container: {
    // backgroundColor: 'red'
  },

  select_container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  text_input_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    width: "100%",
    backgroundColor: "#00000000",
    borderRadius: 8,
    borderColor: "#C6C6C6",
    borderStyle: "solid",
    height: 52,
  },

  text_input_style: {
    flex: 1,
    color: "black",
    fontWeight: "400",
    height: 50,
    marginHorizontal: 10,
    fontSize: 14,
  },

  focused_input: {
    borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    width: "100%",
    backgroundColor: "#00000000",
    borderRadius: 8,

    borderStyle: "solid",
    height: 52,
  },

  input_label: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    color: "#232323",
    paddingVertical: 10,
  },

  input_label_right: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    color: "#232323",
    paddingVertical: 10,
  },

  input_label_important: {
    color: "red",
    marginTop: -10,
    fontSize: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});
