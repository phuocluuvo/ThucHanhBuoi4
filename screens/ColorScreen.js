import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const phoneData = {
  colors: [
    {
      imgLink: "../assets/vsmart_live_xanh_1.png",
      colorName: "Xanh Nước Biển",
      color: "#234896",
    },
    {
      imgLink: "../assets/vs_red_a_2.png",
      colorName: "Đỏ",
      producer: "Tiki Traiding",
      color: "#F30D0D",
    },
    {
      imgLink: "../assets/vsmart_black_start_1.png",
      colorName: "Đen",
      color: "#000",
    },
    {
      imgLink: "../assets/vs_bac_1.png",
      colorName: "Bạc",
      color: "#C5F1FB",
    },
  ],
  name: "Điện thoại Vsmart Joy 3 - Hàng chính hãng",
  discount: 0,
  price: 1790000,
};
function ColorScreen() {
  const [phone, setPhone] = useState({
    imgLink: "../assets/vsmart_live_xanh_1.png",
    colorName: "Xanh Nước Biển",
    color: "#234896",
  });
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row p-3">
        <Image
          source={require("../assets/vsmart_live_xanh_1.png")}
          className="w-[100px] h-32 mx-2"
        />
        <View className="flex-1">
          <Text className="text-lg flex-[0.6]">
            {phoneData.name} {"-" + phone.colorName}
          </Text>
          {phone?.producer && (
            <Text className="text-sm">
              Cung cấp bởi <Text className="font-bold">{phone.producer}</Text>
            </Text>
          )}
        </View>
      </View>
      <View className="bg-[#c4c4c4] flex-auto justify-between">
        <Text className="text-lg px-2">Chọn một màu bên dưới</Text>
        <View className="justify-around items-center">
          {phoneData.colors.map((c) => (
            <TouchableOpacity
              key={c.colorName}
              style={{
                backgroundColor: c.color,
              }}
              onPress={() => {
                setPhone(c);
              }}
              className={` w-24 h-24 shadow-sm mb-2`}
            ></TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => nav.goBack()}
          className="bg-blue-600 m-2 px-5 py-2 rounded-lg justify-center items-center border-red-600 border shadow-sm"
        >
          <Text className="uppercase text-white text-xl">Xong</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ColorScreen;
