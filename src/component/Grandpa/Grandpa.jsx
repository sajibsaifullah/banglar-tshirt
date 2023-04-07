import React from 'react';
import './Grandpa.css';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import { createContext } from 'react';
import { useState } from 'react';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, setMoney] = useState(0)
    const ring = 'diamond';
    
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Anty ring={ring}></Anty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;