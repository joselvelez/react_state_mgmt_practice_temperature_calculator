import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator() {
    const [temperature, setTemperature] = useState(0);

    return (
        <fieldset>
            <p>Current Temperature: {temperature}</p>
            <legend>Enter a temperature in Celsius:</legend>
            <input
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
            />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}

export default Calculator;