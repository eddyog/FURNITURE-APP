import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCartView from "./ProductCartView";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ): error ? (
        <Text> Something went wronog</Text>
      ):(
        <FlatList
        style={styles.android}
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCartView item= {item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />


      )}
    </View>
  );
};

export default ProductRow;
