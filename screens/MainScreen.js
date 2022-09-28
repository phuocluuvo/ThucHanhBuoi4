import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

function MainScreen() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
  }, []);
  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity
        className="bg-slate-600 hover:bg-slate-500  flex-[0.5]  m-20 justify-center items-center"
        onPress={() => nav.navigate("BuyScreen")}
      >
        <Text className="text-4xl text-white">Lab 02</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-slate-600 hover:bg-slate-500 flex-[0.5] m-20 justify-center items-center"
        onPress={() => nav.navigate("DetailScreen")}
      >
        <Text className="text-4xl text-white">Lab 03</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainScreen;
