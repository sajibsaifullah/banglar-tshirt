import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts);
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
            alert('aaa')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        
    }

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(tshirt => tshirt._id !== id)
        setCart(remainingCart)
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;