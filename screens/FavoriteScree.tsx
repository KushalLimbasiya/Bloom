import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const FavoritesScreen = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching favorite products from storage or API
    // In a real app, you would replace this with your data-fetching logic
    const fetchFavoriteProducts = async () => {
      try {
        // Example: Fetch favorite product IDs from AsyncStorage
        const favoriteProductIds = await AsyncStorage.getItem('favoriteProductIds');

        // Convert the string to an array of IDs
        const idsArray = favoriteProductIds ? JSON.parse(favoriteProductIds) : [];

        // Use the IDs to fetch actual product data from your data source
        const fetchedProducts = await fetchProductsByIds(idsArray);

        setFavoriteProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching favorite products:', error);
      }
    };

    fetchFavoriteProducts();
  }, []);

  const renderFavoriteProduct = ({ item }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <TouchableOpacity
        onPress={() => removeFromFavorites(item.id)}
        style={{ marginTop: 8, backgroundColor: 'red', padding: 8, borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Remove from Favorites</Text>
      </TouchableOpacity>
    </View>
  );

  const removeFromFavorites = (productId) => {
    // Implement logic to remove the product from the favorites list
    // This typically involves updating the state and, if necessary, storage or API

    // For example, if you are using AsyncStorage to store favorite IDs:
    // 1. Fetch the current favorite IDs.
    // 2. Remove the selected product's ID from the array.
    // 3. Update AsyncStorage with the modified array.
    // 4. Update the state to re-render the screen.

    // After implementing this logic, you can call setFavoriteProducts(newFavoriteProducts) to update the list.
  };

  return (
    <View>
      {favoriteProducts.length > 0 ? (
        <FlatList
          data={favoriteProducts}
          renderItem={renderFavoriteProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No favorite products yet.</Text>
      )}
    </View>
  );
};

export default FavoritesScreen;
