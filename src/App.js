import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';

function App() {
    return (
        <Calculator />
    );
}

ReactDOM.render(<Calculator />, document.querySelector('#root'));

export default App;

// This work follows the article found here
// https://reactjs.org/docs/lifting-state-up.html