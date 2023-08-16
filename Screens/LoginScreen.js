import React from "react";
import { View, Button } from "react-native";

export const LoginButton = ({ styles, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={"Login"} onPress={onPress} />
    </View>
  );
};
