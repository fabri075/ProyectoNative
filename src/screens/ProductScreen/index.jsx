import React from "react";
import { useSelector } from "react-redux";
import { FlatList, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import styles from "./styles";

const ProductScreen = () => {
  const products = useSelector(state => state.products.products);
  const renderItem = ({ item }) => (
    <ProductItem
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      </View>
  );
};

export default ProductScreen;
