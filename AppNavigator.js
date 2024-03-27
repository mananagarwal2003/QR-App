import { View, Text } from "react-native";
import React, { createRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Generate from "./screens/Generate";
import Scan from "./screens/Scan";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Generate"
          component={Generate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
