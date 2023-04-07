import React from 'react';
import { useContext } from 'react';
import Brother from '../Brother/Brother';
import { MoneyContext } from '../Grandpa/Grandpa';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Father</h2>
            <button onClick={() => setMoney(money +2000)}>Send money</button>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;