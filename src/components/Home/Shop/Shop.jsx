import React from 'react';
import { useSelector } from 'react-redux';

const Shop = () => {



    const products =useSelector(state=>{

       return state.cart.fakeData
    })
    return (
        <div> 
          
            
        </div>
    );
};

export default Shop;