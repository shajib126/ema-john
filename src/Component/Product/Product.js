import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, img, price, seller} = props.product;
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3>{name}</h3>
                <p><small>{seller}</small></p>
                <p>${price}</p>
                <button className = "product_btn" onClick = {() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;