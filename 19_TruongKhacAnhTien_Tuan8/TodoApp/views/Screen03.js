import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

export default function Screen03({ navigation, route }) {
  const df = {
    id: "",
    firstname: "",
    lastname: "",
    cellphone: "",
    email: "",
    image: "adaptive-icon.png",
  };
  const { data } = route?.params ?? df;
  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.3, alignItems: "center" }}>
        <Image
          style={{ width: 100, height: null, flex: 1, resizeMode: "contain" }}
          source={require(`../assets/${data.image}`)}
        ></Image>
        <TouchableOpacity style={{margin: 20}}>
          <Text style={{ fontSize: 24, marginLeft: 20 }}>
            {data.firstname + " " + data.lastname}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.5}}>
        <TouchableOpacity style={{margin: 20, borderBottom: "1px solid grey" }} >
          <Text style={{ fontSize: 24, paddingLeft: 20 }}>Full name: </Text>
          <Text style={{ fontSize: 24, paddingLeft: 20 }}>
            {data.firstname + " " + data.lastname}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{margin: 20, borderBottom: "1px solid grey" }}>
          <Text style={{ fontSize: 24, paddingLeft: 20 }}>Cell phone: </Text>
          <Text style={{ fontSize: 24, paddingLeft: 20 }}>{data.cellphone}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{margin: 20, borderBottom: "1px solid grey" }}>
          <Text style={{ fontSize: 24, paddingLeft: 20 }}>Email: </Text>
          <Text style={{ fontSize: 24, paddingLeft: 20 }}>{data.email}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
