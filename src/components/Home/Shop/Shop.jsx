import React from 'react';
import { useSelector } from 'react-redux';

const Shop = () => {


    const product =useSelector(state=>{

        console.log(state.cart)
    })
    return (
        <div> 
          
            
        </div>
    );
};

export default Shop;