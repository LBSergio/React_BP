import React from 'react';
import axios from 'axios';

const useGetProduct = (API) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect( async() => {
        const response = await axios(API);
        setProducts(response.data);
    },[]);

    return products;
};

export { useGetProduct };