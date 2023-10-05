import React, { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

const FavoriteButton = ({ item }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <TouchableOpacity 
    className="w-8 h-8 rounded-full flex items-center justify-center"
      onPress={handleFavorite}>

        <AntDesign
          name={isFavorited ? 'heart' : 'hearto'}
          size={24}
          color={isFavorited ? '#ea4855' : '#5a4f70'}
        />
      
    </TouchableOpacity>
  );
};

export default FavoriteButton;