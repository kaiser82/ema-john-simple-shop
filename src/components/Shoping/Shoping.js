import { faToiletPortable } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shoping.css'

const Shoping = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    };


    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={() => handleAddToCart(product)}></Product>)
                }
            </div>
            <div className='cart-container'>

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shoping;