import { StyleSheet, Dimensions } from "react-native";

export const CardCarouselStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",

    padding: 30,
    borderRadius: 10,

    marginHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2.84,
    marginBottom: 10,
    elevation: 1,
  },

  paginationContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  dotStyle: {
    width: 16.33,
    height: 16.33,
    borderRadius: 10,
    backgroundColor: "#E44444",
    marginHorizontal: 0,
  },
  inactiveDotStyle: {
    width: 20.33,
    height: 20.33,
    borderRadius: 10,
    backgroundColor: "white",
    marginHorizontal: 0,
    borderColor: "#BCBCBC",
    borderWidth: 2,
  },

  attendee: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  status: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  dottedLineContainer: {
    height: 1, // Set the height of the container (line thickness)
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  status_container: {
    marginVertical: 5,
    flexDirection: "row",
    paddingHorizontal: 30,
    padding: 5,
  },

  dottedLine: {
    flex: 1,
    height: 0,
    borderStyle: "dotted",
    borderColor: "#BCBCBC",
    borderWidth: 1,
  },
});
