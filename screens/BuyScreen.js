import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function BuyScreen() {
  const book = {
    title: "Nguyên hàm và tích phân ứng dụng",
    price: 148000,
    discount: 0,
    shopOwner: "Tiki Traiding",
    buyNum: 0,
    inStock: 30,
  };
  const [productPrice, setProductPrice] = useState(0);
  const [sumPrice, setSumPrice] = useState(0);
  const [numProducts, setNumProducts] = useState(1);

  useEffect(() => {
    setProductPrice(book.price);
    setSumPrice(productPrice * numProducts);
  }, [productPrice, numProducts]);
  function removeProduct() {
    if (numProducts <= book.inStock) setNumProducts(numProducts + 1);
    else setNumProducts(book.inStock);
  }
  function addProduct() {
    if (numProducts >= 0) setNumProducts(numProducts - 1);
    else setNumProducts(1);
  }
  return (
    <SafeAreaView className="flex flex-1 bg-[#c4c4c4] items-center relative m-0">
      <View className="w-full h-fit bg-white pb-5">
        <View className="flex flex-row w-full p-3 bg-white">
          <Image
            source={require("../assets/book.png")}
            className="w-[100px] h-[150px]"
          />
          <View className="flex-1 flex-col justify-evenly m-2">
            <Text className="text-black font-bold text-xl">{book.title}</Text>
            <Text className="text-black font-bold">
              Cung cấp bởi {book.shopOwner}
            </Text>
            <Text className="text-red-500 font-bold text-xl">
              {productPrice}đ
            </Text>
            <Text className="text-gray-500 font-bold text-sm line-through">
              {productPrice}đ
            </Text>
            <View className="flex-row w-full justify-between my-2">
              <View className="flex-row w-[125px] justify-between">
                <TouchableOpacity
                  className="w-10 h-10 bg-slate-300 flex justify-center "
                  onPress={addProduct}
                >
                  <Text className="text-center text-3xl font-bold">-</Text>
                </TouchableOpacity>
                <Text className="self-center font-bold">{numProducts}</Text>
                <TouchableOpacity
                  onPress={removeProduct}
                  className="w-10 h-10 bg-slate-300 flex justify-center"
                >
                  <Text className="text-center text-3xl font-bold">+</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-blue-800 font-bold self-center">
                Mua sau
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row w-full p-2 bg-white">
          <Text className="font-bold text-black">Mã giảm giá đã lưu</Text>
          <Text className="font-bold text-blue-500 mx-3">Xem Tại đây</Text>
        </View>
        <View className="flex flex-row w-full p-2 bg-white justify-between">
          <View className="border-[1px] rounded-sm p-2 border-[#808080] w-[200px] h-fit flex-row justify-around items-center">
            <View className="h-5 w-10 bg-yellow-400"></View>
            <Text className="text-xl font-bold">Mã giảm giá</Text>
          </View>
          <TouchableOpacity className="bg-blue-700 px-2 rounded-sm justify-center">
            <Text className=" text-white text-xl font-bold">Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-white my-5 w-full h-fit flex-row px-2 py-4">
        <Text className="font-bold">Bạn có phiếu quà tặng Tiki/Urbox?</Text>
        <TouchableOpacity>
          <Text className="text-blue-700 font-bold mx-2">Nhập tại đây</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-white mb-5 w-full h-fit flex-row px-2 py-4 justify-between">
        <Text className="font-bold text-xl">Tạm tính</Text>
        <Text className="font-bold text-red-600 text-xl">{sumPrice}đ</Text>
      </View>
      <View className="bg-white w-full h-[150px] px-2 py-4 absolute bottom-0 justify-around ">
        <View className="flex-row justify-between">
          <Text className="font-bold text-xl text-gray-500">Thành tiền</Text>
          <Text className="font-bold text-red-600 text-xl">{sumPrice}đ</Text>
        </View>
        <TouchableOpacity className="bg-red-600 w-full h-fit py-2 ">
          <Text className="uppercase text-center text-white font-bold text-2xl">
            tiến hành đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
