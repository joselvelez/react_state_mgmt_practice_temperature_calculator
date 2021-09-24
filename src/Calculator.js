import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function Calculator() {
    const [temperature, setTemperature] = useState(0);

    return (
        <>
            <TemperatureInput scale={'f'} temperature={temperature} setTemp={(value) => setTemperature(value)} />
            <TemperatureInput scale={'c'} temperature={temperature} setTemp={(value) => setTemperature(value)} />
        </>
    )
}

export default Calculator;