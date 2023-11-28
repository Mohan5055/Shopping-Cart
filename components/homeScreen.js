// screens/HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import ProductCard from './productList';

const HomeScreen = () => {
  const [products, setProducts] = useState([])
 

  useEffect(() => {
  const getProduct = async () => {
    try {
      const response = await fetch(
        'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=10&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProducts([...data.object]);
    } catch (error) {
      console.error('Error fetching products:', error);
      // You can display an error message or handle it in a way suitable for your app
      Alert.alert('Error', 'Failed to fetch products. Please try again later.');
    }
  };

  getProduct();
}, []);



  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

export default HomeScreen;
