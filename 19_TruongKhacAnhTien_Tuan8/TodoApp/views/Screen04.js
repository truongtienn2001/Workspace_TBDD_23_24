import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";

export default function Screen04({ navigation, route }) {
  const df = {
    id: "",
    firstname: "",
    lastname: "",
    cellphone: "",
    email: "",
    image: "",
  };

  const [infoUser, setInfoUser] = useState(df);

  const dataAdd = useRef({
    firstname: infoUser.firstname,
    lastname: infoUser.lastname,
    cellphone: infoUser.cellphone,
    email: infoUser.email,
    image: infoUser.image,
  });

  const handleSubmit = () => {
    
    dataAdd.current = {
      id: Math.floor(Math.random() * 1000),
      firstname: infoUser.firstname,
      lastname: infoUser.lastname,
      cellphone: infoUser.cellphone,
      email: infoUser.email,
      image: infoUser.image,
    };
    console.log(dataAdd.current);
    navigation.navigate({
      name: "Danh sách công việc",
      params: { data: dataAdd.current },
    });
    setInfoUser(df);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flex: 0.7,
          alignContent: "space-between",
        }}
      >
        <View style={styles.form}>
          <Text>First Name: </Text>
          <TextInput
            style={styles.input}
            value={infoUser.firstname}
            onChangeText={(firstname) => setInfoUser({ ...infoUser, firstname })}
            // keyboardType="text"
          ></TextInput>
        </View>
        <View style={styles.form}>
          <Text>Last name:</Text>
          <TextInput
            style={styles.input}
            value={infoUser.lastname}
            onChangeText={(lastname) => setInfoUser({ ...infoUser, lastname })}
            // keyboardType="text"
          ></TextInput>
        </View>
        <View style={styles.form}>
          <Text>Cell Phone:</Text>
          <TextInput
            style={styles.input}
            value={infoUser.cellphone}
            onChangeText={(cellphone) => setInfoUser({ ...infoUser, cellphone })}
            // keyboardType="text"
          ></TextInput>
        </View>
        <View style={styles.form}>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            value={infoUser.email}
            onChangeText={(email) => setInfoUser({ ...infoUser, email })}
            // keyboardType="text"
          ></TextInput>
        </View>
        <View style={styles.form}>
          <Text>Image:</Text>
          <TextInput
            style={styles.input}
            value={infoUser.image}
            onChangeText={(image) => setInfoUser({ ...infoUser, image })}
            // keyboardType="text"
          ></TextInput>
        </View>
        <Button
          style={{ flex: 0.1 }}
          title="Thêm"
          onPress={() => handleSubmit()}
        ></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    border: "1px solid black",
    height: 30,
    borderRadius: 10,
    marginLeft: 10,
    padding: 10,
  },
  form: {
    flexDirection: "row",
    marginL: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
