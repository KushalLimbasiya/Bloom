import { 
  View, 
  Text,
  SafeAreaView, 
  Image,
  ScrollView,
  TouchableOpacity 
} from 'react-native';

import { Entypo, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({navigation}) => {

  return (
    <SafeAreaView className="flex-1 bg-[#EBEAEF]">

      <View className="flex-row items-center justify-between px-4 py-2 pt-12">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color="#555" />
        </TouchableOpacity>

        <Text className="text-xl font-semibold text-[#555]">
          Profile
        </Text>

        <Entypo name="dots-three-vertical" size={24} color="#555" />
      </View>

      <View className="items-center mt-8">
      <TouchableOpacity>
        <Image
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            }}
            className="w-28 h-28 aspect-square rounded-2xl"
            resizeMode="cover"
          />
      </TouchableOpacity>
      </View>

      <Text className="text-center text-2xl font-bold mt-4">
        james Doe
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View className="px-6 mt-8">
          <Text className="text-lg font-semibold">About Me</Text>
          <Text className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet...
          </Text>
        </View>

        <View className="px-6 mt-8">
          <Text className="text-lg font-semibold">Info</Text>
          
          <View className="flex-row mt-4">
            <MaterialIcons name="email" size={22} />
            <Text className="ml-3 text-gray-500">james@email.com</Text>
          </View>

          <View className="flex-row mt-4">
            <MaterialIcons name="phone" size={22} />
            <Text className="ml-3 text-gray-500">555-1234</Text>
          </View>
        </View>

        <View className="px-6 mt-8">
          <TouchableOpacity className="flex-row bg-[#130d2d] p-3 rounded-lg">
            <MaterialIcons name="edit" size={22} color="white" />
            <Text className="text-white ml-3 flex-1 text-center">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  );

}

export default ProfileScreen;