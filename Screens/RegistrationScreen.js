import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native-web";

export const RegistrationScreen = ({
  styles,
  name,
  setName,
  mail,
  setMail,
  password,
  setPassword,
  onLogin,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAvoidingView
      style={styles.form}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.inputTitle}>Реєстрація</Text>

      <View>
        <TextInput
          style={[styles.input, { paddingLeft: 10 }]}
          value={name}
          placeholder="Логін"
          onChangeText={(text) => setName(text)}
          textAlign="left"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={[styles.input, { paddingLeft: 10 }]}
          value={mail}
          placeholder="Адреса електронної пошти"
          onChangeText={(text) => setMail(text)}
          textAlign="left"
        />
      </View>
      <View style={{ marginTop: 20, marginBottom: 45 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={[styles.input, { paddingLeft: 10, paddingRight: 30 }]}
            value={password}
            placeholder="Пароль"
            onChangeText={(text) => setPassword(text)}
            textAlign="left"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={{ position: "absolute", right: 10 }}
          >
            <Text>Показати</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Зареєструватися"} onPress={onLogin} />
      </View>
      <TouchableOpacity onPress={onLogin} style={styles.loginLink}>
        <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
