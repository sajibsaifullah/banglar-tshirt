import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(cart)
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }else{
        message = <div>
            <h4>Boroloxxxxxxx</h4>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length ===1 ? 'blue' : 'orange'}>Order Summary : {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'red' : 'purple'}`}>Something</p>
            
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
            }

            {message}
            {cart.length > 2 ? <span className='yellow'>Aro kino</span> : <span>Fokira</span>}
            {
                cart.length === 2 && <p>Double bonanza!!!!!!</p> 
            }
            {
                cart.length === 3 || <h3>Tinta to hoilona</h3>
            }
        </div>
    );
};

export default Cart;