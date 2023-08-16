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
import { LoginButton } from "./Screens/LoginScreen";


export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const onLogin = () => {
    console.log('Name:', name)
    console.log('Email', mail)
    console.log('Password:', password)
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./images/mainbg.png')}
      >
        <View style={styles.contentContainer}>
          <ImageBackground
            style={styles.formImage}
            source={require('./images/registrationbg.png')}
          >
            <View style={styles.formContainer}>
              <RegistrationScreen
                styles={styles}
                {...{ name, setName, mail, setMail, password, setPassword }} 
              />
              <LoginButton styles={styles} onPress={onLogin} />
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 450,
    height: 1000,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 40,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
  },
  formImage: {
    resizeMode: "cover",
    height: 500,
  },
  formContainer: {
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    borderRadius: 6,
    height: 40,
    width: 300,
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: '#212121',
    marginBottom: 10,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    marginTop: 10,
  }
});
