import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  ImageBackground,
  Image,
  Text,
} from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const onLogin = () => {
    console.log("Name:", name);
    console.log("Email", mail);
    console.log("Password:", password);
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./images/mainbg.png")}
        >
          <View style={styles.contentContainer}>
            <ImageBackground
              style={styles.formImage}
              source={require("./images/registrationbg.png")}
            >
              <View style={styles.formContainer}>
                <RegistrationScreen
                  styles={styles}
                  onLogin={onLogin}
                  {...{ name, setName, mail, setMail, password, setPassword }}
                />
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.photoImage}
          source={require("./images/photoimg.png")}
        ></ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    paddingTop: 70,
  },
  formImage: {
    resizeMode: "cover",
    height: "500",
  },
  formContainer: {
    paddingHorizontal: 40,
    paddingVertical: 50,
    marginTop: 40, // Меняем это значение для регулирования отступа вниз
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    borderRadius: 6,
    height: 50,
    width: 345,
    backgroundColor: "#E8E8E8",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "#212121",
    marginBottom: 10,
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 20, // Меняем это значение для регулирования отступа вниз
  },
  buttonContainer: {
    marginTop: 10,
  },
  loginLink: {
    marginTop: 10,
    alignSelf: "center",
  },
  loginLinkText: {
    color: "#1B4371",
    textDecorationLine: "none",
  },
  photoImage: {
    height: 120,
    width: 120,
    position: "relative",
    bottom: 570,
    zIndex: 1,
  },
});
