import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AddProductToCart = async(productId, quantity) => {
    
    try {
        const token = await AsyncStorage.getItem('token');

        const iosUrl = `http://localhost:3000/api/cart`;
        const androidUrl = `http://10.0.2.2:3000/api/cart`;
        const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

        const endpoint = url;

        // console.log(token);

        const data = {
            cartItem: productId,
            quantity: quantity
        }
        const headers ={
            'Content-Type': 'application/json',
            'token': 'Bearer '+ JSON.parse(token)
        };

        await axios.post(endpoint, data, {headers})
    } catch (error) {
        throw new Error(error.message)
    }
};

export default AddProductToCart;