import Screen4a from "../views/Screen4a";
import Screen4b from "../views/Screen4b";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const Tab = createMaterialBottomTabNavigator();

export default function TabBottom() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "hsla(203, 100%, 55%, 1)" }}
      activeColor="white"
      inactiveColor="white"
    >
      <Tab.Screen
        name="Chat"
        component={Screen4a}
        options={{
          tabBarLabel: "Screen4a",
          tabBarIcon: () => (
            <Icon name="view-headline" size={30} color='white' />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Screen4b}
        options={{
          tabBarLabel: "Screen4b",
          tabBarIcon: () => (
            <Icon name="home" size={30} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Back"
        component={() => {
          navigation.navigate("Chat");
        }}
        options={{
          tabBarIcon: () => (
            <Icon name="arrow-left" size={30} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
