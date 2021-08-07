import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigator from "./tabNavigator";
import formScreen from "../screens/FormScreen";
import statusScreen from "../screens/statusScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Form" component={formScreen} />
      <Stack.Screen name="Status" component={statusScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
