import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails, NewArrival, LoginPage, Orders, Favorites, SingUp } from './screens';


const Stack = createNativeStackNavigator();

export default function App() {


  // FountsLoaded contains all the fonts that we will use in the aop
  const [fontsLoaded] = useFonts({
    'regular': require("./assets/fonts/Poppins-Regular.ttf"),
    'extraBold': require("./assets/fonts/Poppins-ExtraBold.ttf"),
    'bold': require("./assets/fonts/Poppins-Bold.ttf"),
    'light': require("./assets/fonts/Poppins-Light.ttf"),
    'regular': require("./assets/fonts/Poppins-Regular.ttf"),
    'semiBold': require("./assets/fonts/Poppins-SemiBold.ttf"),
    'medium': require("./assets/fonts/Poppins-Medium.ttf"),
  })

  // onLayoutRootView will help us to know if the fonts were loaded 
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Will help us to navigate with the nav bar in the button  */}
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='ProductList'
          component={NewArrival}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Login'
          component={LoginPage}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name='Orders'
          component={Orders}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Favorites'
          component={Favorites}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='SingUp'
          component={SingUp}
          options={{ headerShown: false }}
        />
            
      </Stack.Navigator>
    </NavigationContainer>
  );
}

