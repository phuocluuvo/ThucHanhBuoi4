import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuyScreen from "./screens/BuyScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BuyScreen" component={BuyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
