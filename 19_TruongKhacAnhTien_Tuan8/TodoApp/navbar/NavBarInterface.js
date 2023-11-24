import {Button} from "react-native";
import React from "react";

export default function NavBar({ title, onPress}) {
  return (
    <Button title={title} onPress={onPress}></Button>
  );
}
