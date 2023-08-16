import React from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export const RegistrationScreen = ({
  styles,
  name,
  setName,
  mail,
  setMail,
  password,
  setPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.inputTitle}>REGISTRATION</Text>

      <View>
        <TextInput
          style={[styles.input, { paddingLeft: 10 }]}
          value={name}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          textAlign="left"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={[styles.input, { paddingLeft: 10 }]}
          value={mail}
          placeholder="Email"
          onChangeText={(text) => setMail(text)}
          textAlign="left"
        />
      </View>
      <View style={{ marginTop: 20, marginBottom: 45 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={[styles.input, { paddingLeft: 10, paddingRight: 30 }]}
            value={password}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            textAlign="left"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={{ position: "absolute", right: 10 }}
          >
            <Text>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
