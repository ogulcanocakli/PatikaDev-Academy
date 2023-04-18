import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, FlatList, StyleSheet } from "react-native";

import ProductCard from "./src/components/Card/ProductCard";
import product_data from "./src/products.json";

function App() {

  const [dataList, setDataList] = useState(product_data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    filteredData();
  }, [search])

  const filteredData = () => {
    const filteredData = product_data.filter(q => q.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase().trim()))
    setDataList([...filteredData])
  }

  const renderProduct = ({ item }: any) => <ProductCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>PatikaStore</Text>
        <TextInput style={styles.input} placeholder="Ara"  onChange={filteredData} onChangeText={(e) => setSearch(e)}/>

        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          data={dataList}
          renderItem={renderProduct}
          numColumns={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "eceff1",
  },
  title: {
    color: "#8b008b",
    fontWeight: "bold",
    fontSize: 40,
    paddingTop: 35,
    marginLeft: 10,
  },
  input: {
    backgroundColor: "#efefef",
    height: 40,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default App;
