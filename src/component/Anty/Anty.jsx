import React from 'react';
import Cousin from '../Cousin/Cousine';

const Anty = ({ring}) => {
    return (
        <div>
            <h2>Anty</h2>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Anty;