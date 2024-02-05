import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React, {useState} from "react";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import  axios  from 'axios';
import { FlatList } from "react-native-gesture-handler";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const[ searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState('');


  // http://localhost:3000/api/products/search/${searchKey}
  const handlerSearch = async ()=> {
    try{


      const iosUrl = `http://localhost:3000/api/products/search/${searchKey}`;
      const androidUrl = `http://10.0.2.2:3000/api/products/search/${searchKey}`;
      const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

      const response = await axios.get(url)
      setSearchResults(response.data)

    } catch (error){
      console.log('Failed to get products.', error);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            color={COLORS.white}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for."
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=> handlerSearch()}>
            <Feather name="search" size={24} color={COLORS.white}/>
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{flex: 1}}>
          <Image
          source={require('../assets/images/Pose23.png')}
          style={styles.searchImage}
          />
        </View>
      ): (
        <FlatList
        data={searchResults}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (<SearchTile item={item} />)}
        style={{marginHorizontal: 12}}
        />
      ) }
    </SafeAreaView>
  );
};

export default Search;
