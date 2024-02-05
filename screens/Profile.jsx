import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  

useEffect(()=> {
  checkExistingUser();
},[]);

const checkExistingUser = async () => {
  const id = await AsyncStorage.getItem('id')
  const useId = `user${JSON.parse(id)}`;

  try {
    const currentUser = await AsyncStorage.getItem(useId);

    if(currentUser != null){
      const parsedData = JSON.parse(currentUser)
      setUserData(parsedData)
      // console.log(userData)
      setUserLogin(true)
    }else {
      navigation.navigate('Login')
    }
    
  } catch (error) {
    console.log("Error retrieving the data: ", error)
  }
}

const userLogout = async() =>{
  const id = await AsyncStorage.getItem('id')
  const useId = `user${JSON.parse(id)}`;

  try {
    await AsyncStorage.multiRemove([useId, 'id']);
    navigation.replace('Bottom Navigation')
  } catch (error) {
    console.log("Error Loggin oouot the user:  ", error)
  }

}

const cacheClear = async() =>{
  const id = await AsyncStorage.getItem('id')
  const userId = `favorites${JSON.parse(id)}`;

  try {
    await AsyncStorage.removeItem(userId);
    navigation.replace('Bottom Navigation')
  } catch (error) {
    console.log("Error Loggin oouot the user:  ", error)
  }

}


  const logout = () =>{
    Alert.alert(
      'Logout',
      "Are you sure you want to logout",
      [
        {
        text:"Cancel", onPress: () => console.log("Cancel pressed")
        },
        {
          text:"Continue", onPress: () => userLogout()
        },
        {defaultIndex: 1}
      ]

    )
  }

  const clearCache = () =>{
    Alert.alert(
      'Clear Cache',
      "Are you sure you want to delete all save data on your device",
      [
        {
        text:"Cancel", onPress: () => console.log("Cancel clear cache")
        },
        {
          text:"Continue", onPress: () => cacheClear()
        },
        {defaultIndex: 1}
      ]

    )
  }

  const deleteAccount = () =>{
    Alert.alert(
      'Delete Account',
      "Are you sure you want to delete your accouont",
      [
        {
        text:"Cancel", onPress: () => console.log("Cancel pressed")
        },
        {
          text:"Continue", onPress: () => console.log("Delete Account pressed ") 
        },
        {defaultIndex: 1}
      ]

    )
  }

  const displayName = () =>{
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/images/space.jpg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === true ? userData.username : "please login into your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>{userData.email} </Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                  name="heart-outline"
                  color={COLORS.primary}
                  size={24}
                  />
                  <Text styl={styles.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  color={COLORS.primary}
                  size={24}
                  />
                  <Text styl={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons
                  name="bag"
                  color={COLORS.primary}
                  size={24}
                  />
                  <Text styl={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => clearCache()}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                  name="cached"
                  color={COLORS.primary}
                  size={24}
                  />
                  <Text styl={styles.menuText}>Clear Cache</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign
                  name="deleteuser"
                  color={COLORS.primary}
                  size={24}
                  />
                  <Text styl={styles.menuText}>Delete Account</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign
                  name="logout"
                  color={COLORS.primary}
                  size={24}
                  />
                  <Text styl={styles.menuText}>Log out</Text>
                </View>
              </TouchableOpacity>

              
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
