import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  Pressable,
} from "react-native";
import "boxicons";
import { useState } from "react";

export default function Screen2a() {
  const [result, setResult] = useState();
  const [lengthPassword, setLengthPassword] = useState(0);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);

  const handleGeneratePassword = (len) => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialSymbol = "!@#$%^&*()_+{}:\"<>?|[];',./`~";
    
    let strArr = '';
    for(let i = 0; i < len; i++) {
      if (isSelected1) {
        strArr += randomChar(isSelected1, lowerCase);
      }
      if (isSelected2) {
        strArr += randomChar(isSelected2, upperCase);
      }
      if (isSelected3) {
        strArr += randomChar(isSelected3, numbers);
      }
      if (isSelected4) {
        strArr += randomChar(isSelected4, specialSymbol);
      }
    }
    strArr = strArr.slice(0, len) // lay ra so ki tu can de thuc hien tron
    console.log('mat khau chua duoc tron:', strArr);
    let pwdShow = shuffleString(strArr) //tron chuoi
    console.log('mat khau da duoc tron:', pwdShow)
    setResult(pwdShow)
  };

  // tao ngau nhien 1 chuoi ki tu
  function randomChar(selected, type) {
    if (selected) {
      let iRandom = Math.floor(Math.random() * type.length);
      return type.charAt(iRandom);
    }
  }

  //tron chuoi
  function shuffleString(str) {
    let strArr = str.split("");
    let shfArr = strArr.sort(() => Math.random() - 0.5);
    return shfArr.join("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.top}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              alignSelf: "center",
              width: 200,
              textAlign: "center",
            }}
          >
            PASSWORD GENERATOR
          </Text>
        </View>
        <View style={styles.middle}>
          <TextInput
            readOnly={true}
            style={styles.textShow}
            value={result}
            onChangeValue={(e) => {
              setResult(e);
              console.log(result);
            }}
            placeholder="Show password generator"
          />
        </View>
        <View style={styles.middle1}>
          <View style={styles.layoutButton}>
            <Text style={styles.textLabel}>Password length</Text>
            <TextInput
              style={styles.textInput}
              value={lengthPassword}
              inputMode="numeric"
              onChangeText={(e) => {
                setLengthPassword(e);
              }}
            />
          </View>

          <View style={styles.layoutCheckbox}>
            <View style={styles.layoutCheckbox1}>
              <Text style={styles.textLabel}>Include lower case letters</Text>
              <Text style={styles.textLabel}>Include upcase letters</Text>
              <Text style={styles.textLabel}>Include number</Text>
              <Text style={styles.textLabel}>Include special symbol</Text>
            </View>
            <View style={styles.layoutCheckbox2}>
              <CheckBox
                style={styles.checkbox}
                value={isSelected1}
                onValueChange={(e) => {
                  setSelection1(e);
                  console.log("1 selected");
                }}
              />
              <CheckBox
                style={styles.checkbox}
                value={isSelected2}
                onValueChange={(e) => {
                  setSelection2(e);
                  console.log("2 selected");
                }}
              />
              <CheckBox
                style={styles.checkbox}
                value={isSelected3}
                onValueChange={(e) => {
                  setSelection3(e);
                  console.log("3 selected");
                }}
              />
              <CheckBox
                style={styles.checkbox}
                value={isSelected4}
                onValueChange={(e) => {
                  setSelection4(e);
                  console.log("4 selected");
                }}
              />
            </View>
          </View>

          <View style={styles.bottom}>
            <Pressable
              onPress={() => handleGeneratePassword(lengthPassword)}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "white" : "#3B3B98",
                },
                styles.button,
              ]}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.textButton,
                    { color: pressed ? "#3B3B98" : "white" },
                  ]}
                >
                  GENERATE PASSWORD
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundImage: "linear-gradient(190deg, #3B3B98, #C4C4C4)",
    width: "100%",
    height: "100%",
  },
  box: {
    flex: 1,
    backgroundColor: "#23235B",
    borderRadius: 18,
    width: "90%",
    height: "90%",
    margin: 20,
  },
  top: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  middle: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  middle1: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottom: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
  layoutButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  layoutCheckbox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  layoutCheckbox1: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: -20,
  },
  layoutCheckbox2: {
    flex: 0.1,
  },
  checkbox: {
    width: 45,
    height: 45,
  },
  button: {
    width: "320px",
    height: "50px",
    border: "1px solid #3B3B98",
    padding: "5px",
    borderRadius: "3px",
  },
  textLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  textShow: {
    height: 45,
    width: 320,
    border: "1px solid #151537",
    backgroundColor: "#151537",
    fontSize: 20,
    color: "rgba(101, 129, 209, 0.5)",
    textAlign: "center",
  },
  textInput: {
    height: 45,
    width: "30%",
    border: "1px solid white",
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 20,
  },
  iconEmail: {
    border: "3px solid #524f4e",
    margin: 12,
    height: 40,
    backgroundColor: "#C4C4C4",
  },
});
