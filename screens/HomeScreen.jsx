import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Screen3 } from "../assets";
import { fetchFeeds } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { SET_FEEDS } from "../context/actions/feedsActions";

import { Feeds } from "../components";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const feeds = useSelector((state) => state.feeds);
  const [filtered, setFiltered] = useState(null);

  const dispatch = useDispatch();

  const handleSearchTerm = (text) => {
    setSearchTerm(text);

    setFiltered(feeds?.feeds.filter((item) => item.title.includes(text)));
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchFeeds().then((res) => {
        // console.log(res);
        dispatch(SET_FEEDS(res));
        // console.log("Feeds from Store : ", feeds?.feeds);
        setInterval(() => {
          setIsLoading(false);
        }, 0);
      });
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-[#EBEAEF]">
      <View className="flex-row items-center justify-between px-4 py-2 pt-12">
        <TouchableOpacity 
          onPress={() => {navigation.navigate('User')}}
        >
        <Image
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          }}
          className="w-12 h-12 aspect-square rounded-2xl"
          resizeMode="cover"
        />
        </TouchableOpacity>
        <View className='flex-1 px-2'>
          <Text className="mb-2 font-semibold text-lg text-black"> Hi, James 👋</Text>
          <Text className='opacity-75' numberOfLines={1}>
            Discover fashion that suit your style
          </Text>
        </View>
        <TouchableOpacity className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
          <MaterialIcons 
            name="notifications" size={24} color="#5a4f70"/>
        </TouchableOpacity>
      </View>


      <View className="flex-row items-center justify-between px-4 py-2 w-2xl space-x-6">
        <View className="px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
          <MaterialIcons name="search" size={24} color="#7f7f7f" />
          <TextInput
            className="text-base font-semibold text=[#555] flex-1 py-1 -mt-1 "
            placeholder="Search Here..."
            value={searchTerm}
            onChangeText={handleSearchTerm}
          />
        </View>

        <TouchableOpacity className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
          <FontAwesome name="filter" size={24} color="#5a4f70" />
        </TouchableOpacity>
      </View>


      <ScrollView className="flex-1 w-full mb-14">
        {isLoading ? (
          <View className="flex-1 h-80 items-center justify-center">
            <ActivityIndicator size={"large"} color={"teal"} />
          </View>
        ) : (
          <Feeds
            feeds={filtered || filtered?.length > 0 ? filtered : feeds?.feeds}
          />
        )}
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
