import { Link, router } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function RegisterScreen() {
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.alignMainContainer}
    >
       <Text style={styles.registerText}>Register</Text>

       <View style={styles.viewInput}>
        <Text>Email</Text>
        <TextInput
        style={styles.textInput}
        placeholder="Email"
      />
       </View>
       <View style={styles.viewInput}>
        <Text>Username</Text>
        <TextInput
        style={styles.textInput}
        placeholder="Username"
      />
       </View>
       
       <View style={styles.viewInput}>
        <Text>Masukan Password</Text>
        <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Password"
        returnKeyType='go'
        autoCorrect={false}
      />
       </View>
       <View style={styles.viewInput}>
        <Text>Konfirmasi Password</Text>
        <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Konfirmasi Password"
        returnKeyType='go'
        autoCorrect={false}
      />
       </View>
       
       <View  style={styles.viewInput}>
       <TouchableOpacity
        style={styles.MasukHome}
        onPress={() => router.navigate("login")}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

       </View>
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
  textInput:{
    backgroundColor: "#EBBFCB",
    height: 50,
    width: "100%",
    borderWidth: 2,
    padding: 10,
    borderColor:  "#2596be",
    marginTop: 10

  },
  viewInput:{
    width: "100%",
    padding: 10,
    // backgroundColor:"black"
  },
  MasukHome:{
    borderWidth: 2,
    borderColor: "#2596be",
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});
