import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";

const fetchOrders = () => {

    const [data, setData] = useState([]);
    const [loading, setLoader] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoader(true);
        const token = await AsyncStorage.getItem('token')

        try {
            const iosUrl = `http://localhost:3000/api/orders`;
            const androidUrl = `http://10.0.2.2:3000/api/orders`;
            const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

            const endpoint = url


            const headers = {
                'Content-Type': 'application/json',
                'token': 'Bearer ' + JSON.parse(token)
            };

            const response = await axios.get(endpoint, { headers });



            setData(response.data);

            setLoader(false);

        } catch (error) {
            console.log(error)
            setError(error)
        }finally{
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoader(true);
        fetchData();
    }

    return{data, loading, error, refetch}

};

export default fetchOrders;

