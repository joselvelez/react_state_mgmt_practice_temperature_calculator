import React from 'react';

function BoilingVerdict({ celsius }) {

    return (
        celsius >= 100 ? <p>The water should boil.</p> : <p>The water would not boil.</p>
    );
}

export default BoilingVerdict;