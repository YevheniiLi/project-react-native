// import React from "react";
// import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";

// const LoginScreen = ({
//   styles,
//   onLogin,
//   email,
//   setEmail,
//   password,
//   setPassword,
// }) => {
//   return (
//     <View style={styles.form}>

// <Text style={styles.inputTitle}>Увійти</Text>

//       <TextInput
//         style={[styles.input, { paddingLeft: 10, paddingRight: 30 }]}
//         placeholder="Email"
//         onChangeText={setEmail}
//         value={email}
//       />
//       <TextInput
//         style={[styles.input, { paddingLeft: 10, paddingRight: 30 }]}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={setPassword}
//         value={password}
//       />
//         <TouchableOpacity onPress={onLogin} style={styles.loginLink}>
//         <Text style={styles.loginLinkText}>
//         Немає акаунту??{" "}
//           <Text
//             onPress={onLogin}
//             style={{
//               textDecorationLine: "none",
//               color: "blue",
//               textDecorationColor: "transparent",
//             }}
//           >
//             Зареєструватися
//           </Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginScreen;
