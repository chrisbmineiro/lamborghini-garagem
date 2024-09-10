import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    marginBottom: 10,
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  logoImg: {
    flex: 1,
    width: '60%',
    resizeMode: 'contain',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 12,
  },
  carBrand: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    fontStyle: "italic",
  },
  carModel: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  priceControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: "#fff",
  },
});