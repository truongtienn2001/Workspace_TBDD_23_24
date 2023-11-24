import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import "boxicons";
import { useState } from "react";

const dbUser = [
  {
    userName: "user",
    password: "password",
  },
  {
    userName: "20053331",
    password: "20053331Giau",
  },
  {
    userName: "1",
    password: "2",
  },
];

export default function Screen2a() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isShow, setIsShow] = useState(true);
  const [isEye, setIsEye] = useState();
  
  const handleShowPassword = () => {
    console.log(isEye)
    }
    
    //xu ly login
  const handleLogin = () => {
    if (
      dbUser.some(
        (data) => data.userName === userName && data.password === password
      )
    ) {
      //   Alert.alert("Login successful!!!");
      alert("login successful");
    } else {
      //   Alert.alert("Login failed!!!");
      alert("login failed");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text
          style={{ fontWeight: "bold", fontSize: "40px", textAlign: "center" }}
        >
          LOGIN
        </Text>
      </View>
      <View style={styles.middle}>
        <View>
          <box-icon
            style={{ marginBottom: -45, height: 40, zIndex: 1 }}
            name="user"
            type="solid"
            size="lg"
          ></box-icon>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            textContentType="username"
            inputMode="text"
            value={userName}
            onChangeText={setUserName}
          />
        </View>
        <View>
          <box-icon
            style={{ marginBottom: -45, height: 40, zIndex: 1 }}
            name="lock"
            size="lg"
          ></box-icon>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={isShow}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            style={{
                borderWidth: 1,
              width: 50,
              height: 45,
              marginTop: -45,
              marginLeft: 260,
            }}
            onPress={() => handleShowPassword()}
          >
            {({ pressed }) => (
              <box-icon
                name={isEye}
                type="solid"
                size="lg"
              >
              {pressed ? setIsEye("show") : setIsEye("low-vision")}
              </box-icon>
            )}
          </Pressable>
        </View>
      </View>
      <View style={styles.middle1}>
        <Pressable
          onPress={() => handleLogin()}
          style={({ pressed }) => [
            pressed ? styles.buttonPress : styles.button,
          ]}
        >
          {({ pressed }) => (
            <Text style={pressed ? styles.textButtonPress : styles.textButton}>
              LOGIN
            </Text>
          )}
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>CREATE ACCOUNT</Text>
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Pressable>
          <box-icon
            style={styles.buttonLink}
            type="logo"
            name="facebook"
            size="lg"
          ></box-icon>
        </Pressable>
        <Pressable>
          <box-icon
            style={styles.buttonLink}
            name="twitter"
            type="logo"
            size="lg"
          ></box-icon>
        </Pressable>
        <Pressable>
          <box-icon
            style={styles.buttonLink}
            type="logo"
            name="google-plus"
            size="lg"
          ></box-icon>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(190deg, #FBCB10, #BF9A40)",
    width: "100%",
  },
  top: {
    flex: 0.1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  middle: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  middle1: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottom: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "320px",
    height: "50px",
    border: "1px solid #000000",
    padding: "5px",
    backgroundColor: "#000000",
    borderRadius: "5px",
  },
  buttonPress: {
    width: "320px",
    height: "50px",
    border: "1px solid #000000",
    padding: "5px",
    backgroundColor: "rgba(210, 230, 255, 0.1)",
    borderRadius: "5px",
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "30px",
    color: "#ffffff",
  },
  textButtonPress: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "30px",
    color: "#00000",
  },
  textInput: {
    height: 45,
    width: 320,
    margin: 1,
    border: "1px solid #ffffff",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: "50px",
  },
  iconEmail: {
    border: "3px solid #524f4e",
    margin: 12,
    height: 40,
    backgroundColor: "#C4C4C4",
  },
  buttonLink: {
    border: "1px solid #000000",
    width: 100,
  },
});
