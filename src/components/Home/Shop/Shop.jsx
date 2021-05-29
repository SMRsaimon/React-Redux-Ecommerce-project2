import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {



    const products = useSelector(state => {

        return state.cart.fakeData
    })





    return (
        <div style={{ marginLeft: "25px" }} className="row  container">
            {products.slice(1, 9).map(product =>
                <div className=" col-lg-3 col-md-4 col-sm-12 g-4 py-3 p-5">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <p><small>{product.category}</small></p>
                            <Card.Title>{product.name.slice(1, 40)}...</Card.Title>
                            <h3><b>Price: ${product.price}</b></h3>
                            <p>{product.star}<FontAwesomeIcon icon={faStar} /></p>
                          
                        </Card.Body>
                    </Card>
                </div>
            )}
        </div>

    );
};

export default Shop;