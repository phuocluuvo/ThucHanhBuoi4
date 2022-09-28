import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import {
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
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
function DetailScreen() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white p-3 justify-between">
      <View className="justify-center items-center ">
        <Image source={require("../assets/vsmart_live_xanh_1.png")} />
      </View>
      <View className="flex-[0.6] justify-between">
        <Text className="text-black text-lg">
          Điện thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View className="flex-row items-center">
          <View className="flex-row">
            <StarIcon color="yellow" size={30} />
            <StarIcon color="yellow" size={30} />
            <StarIcon color="yellow" size={30} />
            <StarIcon color="yellow" size={30} />
            <StarIcon color="yellow" size={30} />
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-black text-xl font-bold">1.790.000đ</Text>
          <Text className="line-through text-gray-300 font-bold text-lg pl-5">
            1.790.000đ
          </Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-red-500 uppercase font-bold">
            Ở đâu rẻ hơn hoàn tiền
          </Text>
          <QuestionMarkCircleIcon color="black" size={20} />
        </View>
        <TouchableOpacity
          onPress={() => nav.navigate("ColorScreen")}
          className="flex-row border py-2 rounded-lg justify-center items-center"
        >
          <Text className="flex-1 text-black text-xl uppercase text-center">
            4 Màu - chọn màu
          </Text>
          <ChevronRightIcon color={"black"} size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="flex-row shadow-sm py-2 rounded-lg justify-center items-center bg-red-600">
        <Text className="flex-1 text-white font-bold text-2xl uppercase text-center">
          Chọn Mua
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default DetailScreen;
