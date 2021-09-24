import React from 'react';
import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function TemperatureInput({ scale, temperature, setTemp }) {

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 /9;
    }

    function toFahrenheit(Celsius) {
        return (celsius * 9/5) + 32;
    }

    function tryConvert(temperature, converter) {
        const input = parseFloat(temperature);

        if (Number.isNaN(input)) {
            return '';
        }
        const output = converter(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : null;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : null;

    return (
        <>
            <fieldset>
                <p>Current Temperature: {celsius || fahrenheit || temperature}</p>
                <legend>Enter a temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={(e) => setTemp(e.target.value)}
                />
            </fieldset>
            <BoilingVerdict temp={temperature} />
        </>
    );
}

export default TemperatureInput;