import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import ProductItem from "../../components/ProductItem";

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
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
  );
};

export default ProductScreen;
