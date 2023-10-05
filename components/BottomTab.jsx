import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomTab = ({ activeScreen }) => {
  const navigation = useNavigation();
  
  const getBackgroundColor = (screenName) => {
    return activeScreen === screenName ? "#130d2d" : "transparent";
  };
  return (
    <View className="absolute bottom-0 w-full">
      <View className="bg-[#f7f5fc] rounded-2xl px-3 py-2 w-full flex-row items-center justify-around">

        <TouchableOpacity 
          onPress={() => navigation.navigate("Home")}
          className="py-2 px-2 rounded-2xl"
          style={{
            backgroundColor: getBackgroundColor("Home"),
          }}
        >
          <MaterialIcons
            name="home"
            size={26}
            color={activeScreen === "Home" ? "#fff" : "#5C5576"}
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate("Favorite")}
          className="py-2 px-2 rounded-2xl"
          style={{
            backgroundColor: getBackgroundColor("Favorite"),
          }}
        >
          <MaterialIcons
            name="favorite"
            size={26}
            color={activeScreen === "Favorite" ? "#fff" : "#5C5576"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CartScreen")}
          className="py-2 px-2 rounded-2xl"
          style={{
            backgroundColor: getBackgroundColor("CartScreen"),
          }}
        >
          <MaterialIcons
            name="shopping-cart"
            size={26}
            color={activeScreen === "CartScreen" ? "#fff" : "#5C5576"}
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate("User")}
          className="py-2 px-2 rounded-2xl"
          style={{
            backgroundColor: getBackgroundColor("User"),
          }}
        >
          <MaterialIcons
            name="person"
            size={26}
            color={activeScreen === "User" ? "#fff" : "#5C5576"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
