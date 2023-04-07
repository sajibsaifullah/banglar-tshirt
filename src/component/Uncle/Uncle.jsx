import React from 'react';
import { useContext } from 'react';
import Cousin from '../Cousin/Cousine';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>Has money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Send Money</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;