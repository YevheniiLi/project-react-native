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


export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const nameHandler = (text) => setName(text);
  // const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={ require ('./images/mainbg.png') }
      >
        {/* <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      > */}
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>LOGIN</Text>
            <TextInput style={styles.input} textAlign="center" />
          </View>
          <View style={{ marginTop: 20}}>
            <Text style={styles.inputTitle}>EMAIL ADRESS</Text>
            <TextInput style={styles.input} textAlign="center" />
          </View>
          <View style={{ marginTop: 20, marginBottom: 45}}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput style={styles.input} 
            textAlign="center" 
            secureTextEntry={true} 
            />
          </View>
        </View>

        {/* <TextInput
          value={password}
          placeholder="Password"
          onChangeText={passwordHandler}
          style={styles.input}
        /> */}
        <Button title={"Login"} style={styles.input} onPress={onLogin} />
        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 450,
    height: 1000,
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
    color: '#f0f8ff',
    marginBottom: 10,
    fontSize: 18,
  }
});
