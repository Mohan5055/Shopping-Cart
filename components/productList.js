// components/ProductCard.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
  const { name, description, variants, mediaUrl } = product;

  return (
    <View style={styles.card}>
      <Image source={{ uri: mediaUrl }} style={styles.image} />
      <View style={styles.cardDetails}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        <Text style={styles.price}>${variants[0].sellingPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    height: '5',
    width: '45%'
  },
  image: {
    width: 150,
    height: 150,
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
});

export default ProductCard;
