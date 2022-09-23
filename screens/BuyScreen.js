import { View, Text, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";

export default function BuyScreen() {
  const book = {
    title: "Nguyên hàm và tích phân ứng dụng",
    price: 148000,
    discount: 0,
    shopOwner: "Tiki Traiding",
    buyNum: 0,
  };
  const [productPrice, setProductPrice] = useState(0);
  const [sumPrice, setSumPrice] = useState(0);
  const [numProducts, setNumProducts] = useState(1);

  useEffect(() => {
    setProductPrice(book.price);
    setSumPrice(productPrice * numProducts);
  }, [productPrice, numProducts]);

  return (
    <View className="flex flex-1 bg-white items-center">
      <View className="flex flex-row w-full p-2">
        <Image source={require("../assets/book.png")} className="w-fit h-fit" />
        <View className="flex flex-col justify-evenly m-2">
          <Text className="text-black text-bold">{book.title}</Text>
          <Text className="text-black text-bold">
            Cung cấp bởi {book.shopOwner}
          </Text>
          <Text className="text-red-500 font-bold">{productPrice}đ</Text>
          <Text className="text-gray-500 font-bold text-sm overline">
            {productPrice}đ
          </Text>
          <View className="flex-row">
            <View className="flex-row w-[200px]">
              <View
                className="w-5 h-5 bg-slate-300"
                onPress={() => {
                  let number = numbers;
                  setNumProducts(number--);
                }}
              >
                <Text className="text-center font-bold">-</Text>
              </View>
              <Text>{numProducts}</Text>
              <View
                onPress={() => {
                  let number = numbers;
                  setNumProducts(number++);
                }}
                className="w-5 h-5 bg-slate-300"
              >
                <Text className="text-center font-bold">+</Text>
              </View>
            </View>
            <Text className="text-blue-800 font-bold">Mua sau</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
