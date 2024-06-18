import { Link, router } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function IntroScreen() {
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.alignMainContainer}
    >
      <Image source={require("../../assets/images/logo.jpg")} />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.navigate("login")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => router.navigate("register")}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
  alignMainContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  loginButton: {
    backgroundColor: "#2596be",
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  registerButton: {
    borderWidth: 2,
    borderColor: "#2596be",
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  registerText: {
    color: "#2596be",
    fontWeight: "bold",
    fontSize: 18,
  },
});
