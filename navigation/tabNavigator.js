import React from "react";
import { StyleSheet } from "react-native";
import statusScreen from "../screens/statusScreen";
import formScreen from "../screens/FormScreen";

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "form") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "status") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return (
            <Text>Tab Navigator</Text>
          );
        }
      })}
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
    >
    <Tab.Screen name="form" component={formScreen} />
    <Tab.Screen name="status" component={statusScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width:  50,
    height: 50
  }
});

export default BottomTabNavigator;
