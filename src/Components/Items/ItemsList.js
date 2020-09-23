import React, { useEffect, useState } from 'react';
import Item from './Items';
import 'bootstrap/dist/css/bootstrap.min.css';
import fujifilmCamera from './fujifilmCamera.jpg';
import nikonCamera from './nikonCamera.jpg';
import canonCamera from './canonCamera.jpg';
import leicaCamera from './leicaCamera.jpeg';

const productsList = [
    {
        id: 1,
        name: 'Canon',
        img: canonCamera,
        stock: 23
    },
    {
        id: 2,
        name: 'Nikon',
        img: nikonCamera,
        stock: 65
    },
    {
        id: 3,
        name: 'Fujifilm',
        img: fujifilmCamera,
        stock: 14
    },
    {
        id: 4,
        name: 'Leica',
        img: leicaCamera,
        stock: 9
    }
];

const ItemsList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getProducts = 
            new Promise((resolve, reject) => setTimeout(() => resolve(productsList), 2000))
                .then((products) => setProducts(products))
                .catch((error) => setError(error));
    }, []);

    if(error) {
        return(
            <div className="container text-center py-4">
                <p> Looks like there's an error {error}</p>
            </div>
        );
    } else {
        return(
            <Item list={products} />
        );
    }
};

export default ItemsList;