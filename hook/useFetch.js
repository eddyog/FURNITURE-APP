import { View, Text } from 'react-native';
import {useState, useEffect} from 'react';
import  axios  from 'axios';
import {Platform} from 'react-native';


const useFetch = () => {
    const[data, setData] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        setIsLoading(true)


        try {
         

 
            const iosUrl = 'http://localhost:3000/api/products/';
            const androidUrl = 'http://10.0.2.2:3000/api/products/';
            const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

            

            const response = await axios.get(url)



            setData(response.data)
            setIsLoading(false)
  
        } catch (error) {
            setError(error)

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

   const refetch = () => {
    setIsLoading(true)
    fetchData();
   }

  return {data, isLoading, error, refetch}
}

export default useFetch