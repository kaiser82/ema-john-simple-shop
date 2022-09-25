import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props)
    const { handleAddToCart, product } = props;
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>

            </div>
            <button onClick={handleAddToCart} className="btn-cart"><p>Add to Cart  <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></p></button>

        </div>
    );
};

export default Product;