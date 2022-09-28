import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyScreen from "./screens/BuyScreen";
import ColorScreen from "./screens/ColorScreen";
import DetailScreen from "./screens/DetailScreen";
import MainScreen from "./screens/MainScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="BuyScreen" component={BuyScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
