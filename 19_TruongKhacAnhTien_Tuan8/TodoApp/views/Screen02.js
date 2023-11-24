import {
  View,
  Text,
  Button,
  SectionList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import NavBar from "../navbar/NavBarInterface";
import DATA from "../db/DataTodo";

export default function Screen02({ navigation, route }) {
  const [selectedId, setSelectedId] = useState();
  const { data } = route?.params ?? DATA;
  console.log(data)
  

  function handleItemClick({ item }) {
    navigation.navigate({
      name: "Chi tiết công việc",
      params: {
        data: item
      }
    });
    console.log(item);
  }

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        extraData={setSelectedId}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: "row", fontSize: 36, margin: 10 }}
            onPress={() => handleItemClick({ item })}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/adaptive-icon.png")}
            ></Image>
            <View>
              <Text>{item.firstname + " " + item.lastname}</Text>
              <Text>{item.cellphone}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TouchableOpacity>
            <Text style={{ fontSize: 36, border: "1px solid grey" }}>
              {title}
            </Text>
          </TouchableOpacity>
        )}
      ></SectionList>
    </View>
  );
}
