import React, { useState } from 'react'

function Tip() {

    const [values, setValues] = useState({ bill: 50, percentage: 18, number: 1 });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const tip = (values.bill * values.percentage) / 100;
    const tipPerson = tip / values.number;

    return (
        <>
            <label htmlFor="bill">Bill</label>
            <input min={0} value={values.bill} onChange={handleChange} name='bill' type="number" />
            <label htmlFor="tip percentage">Tip percentage</label>
            <input min={0} value={values.percentage} onChange={handleChange} name='percentage' type="number" />
            <label htmlFor="number">Number of people</label>
            <input min={0} value={values.number} onChange={handleChange} name='number' type="number" />
            <p>Total Tip:{tip && values.number > 0 ? '$' + tip.toFixed(2) : '-'}  </p>
            <p>Tip Per Person: {tipPerson && values.number > 0 ? '$' + tipPerson.toFixed(2) : '-'}</p>
        </>
    )
}

export default Tip