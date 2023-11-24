import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

export default function Screen05({ navigation, route }) {

  console.log("user truyen qua: ", route.params.user)

  const template = {
    id: `${Math.floor(Math.random() * 10000)}`,
    createdAt: new Date().toISOString(),
    job: "",
    name: route.params?.user
  }
  var [todo, setTodo] = useState(template);
  const [refresh, setRefresh] = useState(1);
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(true);

  const api = 'http://localhost:8088/v1/todos';
  const handleAddToDo = () => {
    todo?.job ? setTodos((prev) => [...prev, todo]) : console.log("Khong co du lieu de them vao");
    setTodo(template);
  };

  const handleEdit = ({item}) => {
    let edit = todos.some((elem) => elem.id == item.id);
    navigation.navigate({
      name: "Chỉnh sửa Todo",
      params: {
          user: route.params.user,
          dataApi: todos,
          idEdit: edit.id
      }
  });
  }

  useEffect(() => {
    setTodos(route.params.dataApi)
    console.log("data duoc gui qua man hinh 2:", route.params.dataApi);
    console.log("data duoc them vao", todos);
  }, [setTodos]);

  console.log("data duoc them vao", todos);
  console.log(template.id);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Nhap todo</Text>
        <TextInput
          style={styles.input}
          value={todo.job}
          onChangeText={(e) => setTodo({ ...template, job: e })}
        ></TextInput>
        <Button title="submit" onPress={() => handleAddToDo()}></Button>
      </View>

      <View style={styles.middle}>
        {todos.length > 0 ? (<FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }} key={item.id}>
              <CheckBox
                value={checked}
                onValueChange={() =>
                  checked ? setChecked(false) : setChecked(true)
                }

              ></CheckBox>
              <Pressable onPress={() => handleEdit({item})}>
                <Text>{item.job}</Text>
              </Pressable>
            </View>
          )}
        ></FlatList>) : <Text>Khong co du lieu</Text>}

      </View>
      <View>
        <Button title="Refresh" onPress={() => setRefresh((prev) => prev + 1)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  top: {
    flex: 0.2,
  },
  middle: {
    flex: 1
  },
  input: {
    border: "1px solid black",
    height: 40,
    fontSize: 22,
    padding: 5,
  },
});
