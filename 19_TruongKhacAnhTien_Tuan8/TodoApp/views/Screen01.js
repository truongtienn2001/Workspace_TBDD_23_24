import { View, Text, Button } from "react-native";
import React from "react";
import NavBar from "../navbar/NavBarInterface";

export default function Screen01({ navigation }) {
  return (
    <View>
      <NavBar
        title="Bắt đầu"
        onPress={() => navigation.navigate("Danh sách công việc")}
      ></NavBar>
    </View>
  );
}
