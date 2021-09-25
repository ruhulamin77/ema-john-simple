import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props)
    const { name, img, price, seller, stock, star } = props.product
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <p>Price{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                Rating: {star} <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                />
                <br />
                <br />


                <button className="btn-regular" onClick={() => props.handleAddToCart(props.product)}>{cartIcon} add to cart</button>
            </div>


        </div>
    );
};

export default Product;