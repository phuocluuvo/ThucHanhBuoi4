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
      imgLink: require("../assets/vsmart_live_xanh_1.png"),
      colorName: "Xanh Nước Biển",
      color: "#234896",
    },
    {
      imgLink: require("../assets/vs_red_a_2.png"),
      colorName: "Đỏ",

      color: "#F30D0D",
    },
    {
      imgLink: require("../assets/vsmart_black_star_1.png"),
      colorName: "Đen",
      color: "#000",
    },
    {
      imgLink: require("../assets/vs_bac_1.png"),
      colorName: "Bạc",
      color: "#C5F1FB",
    },
  ],
  selectedColor: {},
  producer: "Tiki Traiding",
  name: "Điện thoại Vsmart Joy 3 - Hàng chính hãng",
  discount: 0,
  price: 1790000,
};
function ColorScreen() {
  const [phone, setPhone] = useState({
    colors: [
      {
        imgLink: require("../assets/vsmart_live_xanh_1.png"),
        colorName: "Xanh Nước Biển",
        color: "#234896",
        price: 1790000,
      },
      {
        imgLink: require("../assets/vs_red_a_2.png"),
        colorName: "Đỏ",

        color: "#F30D0D",
        price: 1780000,
      },
      {
        imgLink: require("../assets/vsmart_black_star_1.png"),
        colorName: "Đen",
        color: "#000",
        price: 1820000,
      },
      {
        imgLink: require("../assets/vs_bac_1.png"),
        colorName: "Bạc",
        color: "#C5F1FB",
        price: 1800000,
      },
    ],
    selectedColor: {
      imgLink: require("../assets/vsmart_live_xanh_1.png"),
      colorName: "Xanh Nước Biển",
      color: "#234896",
      price: 1790000,
    },
    producer: "Tiki Traiding",
    name: "Điện thoại Vsmart Joy 3 - Hàng chính hãng",
    discount: 0,
    price: 1790000,
  });
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row p-2">
        <Image
          source={phone.selectedColor.imgLink}
          className="w-[100px] h-32 mx-2"
        />
        <View className="flex-1 h-fit">
          <Text className="text-lg">{phone.name}</Text>
          <Text className="text-sm">
            Màu:
            <Text className="font-bold">{phone.selectedColor.colorName}</Text>
          </Text>
          <Text className="text-sm">
            Cung cấp bởi <Text className="font-bold">{phone.producer}</Text>
          </Text>
          <Text className="text-sm">
            <Text className="font-bold">{phone.selectedColor.price}đ</Text>
          </Text>
        </View>
      </View>
      <View className="bg-[#c4c4c4] flex-auto justify-between">
        <Text className="text-lg px-2">Chọn một màu bên dưới</Text>
        <View className="justify-around items-center">
          {phone.colors.map((c) => (
            <TouchableOpacity
              key={c.colorName}
              style={{
                backgroundColor: c.color,
              }}
              className={` w-24 h-24 shadow-sm mb-2 justify-center items-center ${
                phone.selectedColor.color === c.color &&
                "border-[5px] border-gray-500"
              }`}
              onPress={() => {
                setPhone({
                  ...phone,
                  selectedColor: {
                    imgLink: c.imgLink,
                    color: c.color,
                    colorName: c.colorName,
                    price: c.price,
                  },
                });
              }}
            >
              {phone.selectedColor.color === c.color && (
                <Text
                  className={
                    "text-white text-center mix-blend-color-dodge shadow-lg"
                  }
                >
                  {c.colorName}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => nav.navigate({ name: "DetailScreen", params: phone })}
          className="bg-blue-600 m-2 px-5 py-2 rounded-lg justify-center items-center border-red-600 border shadow-sm"
        >
          <Text className="uppercase text-white text-xl">Xong</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ColorScreen;
