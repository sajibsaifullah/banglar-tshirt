import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {ring && <p><small>Ring: Diamond</small></p>}
            {/* {hasFriend && <Friend ring={ring}></Friend>} */}
        </div>
    );
};

export default Cousin;