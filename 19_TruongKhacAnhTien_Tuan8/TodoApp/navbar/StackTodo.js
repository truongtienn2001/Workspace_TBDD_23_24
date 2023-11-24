import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen01 from "../views/Screen01";
import Screen02 from "../views/Screen02";
import Screen03 from "../views/Screen03";
import Screen04 from "../views/Screen04";
import Screen05 from "../views/Screen05";
import NavBar from "./NavBarInterface";
import {View} from "react-native";
import ScreenNhapTen from "../views/ScreenNhapTen";

export default function StackToDo() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNav = () => (
    <Tab.Navigator
      initialRouteName="Nhập todo" // khoi tao route "Danh sách công việc"
      backBehavior="history"
      screenOptions={({ navigation, route }) => ({
        headerLeft: () => (
          <NavBar title="Quay lại" onPress={() => navigation.goBack()} />
        ),
      })}
    >
      <Tab.Screen name="Chào mừng" component={Screen01}></Tab.Screen>
      <Tab.Screen
        name="Danh sách công việc"
        component={Screen02}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <NavBar title="Quay lại" onPress={() => navigation.goBack()} />
          ),
          headerRight: () => (
            <View style={{flexDirection: "row"}}>
              <NavBar title="Thêm" onPress={() => navigation.navigate("Nhập công việc")} />
              <NavBar title="Tìm kiếm" onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      ></Tab.Screen>
      <Tab.Screen name="Chi tiết công việc" component={Screen03}></Tab.Screen>
      <Tab.Screen name="Nhập công việc" component={Screen04} />
      <Tab.Screen name="Nhập todo" component={Screen05}></Tab.Screen>
    </Tab.Navigator>
  );

  const StackNav = () => (
    <Stack.Navigator screenOptions={({ navigation, route }) => ({
      headerLeft: () => (
        <NavBar title="Quay lại" onPress={() => navigation.goBack()} />
      ),
    })}>
      <Stack.Screen name="Nhập tên người dùng" component={ScreenNhapTen} />
      <Stack.Screen name="Nhập todo" component={Screen05} />
      <Stack.Screen name="Chào mừng" component={Screen01} />
      <Stack.Screen name="Danh sách công việc" component={Screen02} />
      <Stack.Screen name="Chi tiết công việc" component={Screen03} />
      <Stack.Screen name="Nhập công việc" component={Screen04} />
    </Stack.Navigator>
  );

  return <StackNav></StackNav>;
}

