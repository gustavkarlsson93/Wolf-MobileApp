import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
const MainStack = createStackNavigator();
export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={HomeScreen} />
    {/* <MainStack.Screen name="Post" component={Post} /> */}
  </MainStack.Navigator>
);
