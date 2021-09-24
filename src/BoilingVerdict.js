import React from 'react';

function BoilingVerdict({ temp }) {

    return (
        temp >= 100 ? <p>The water should boil.</p> : <p>The water would not boil.</p>
    );
}

export default BoilingVerdict;