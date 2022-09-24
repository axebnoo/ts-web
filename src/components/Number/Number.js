import React from 'react';
import NumberFormat from 'react-number-format';

const Number = (props) => {
    return (
        <div style={{ textAlign: 'right' }}>
            <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true}></NumberFormat> <span>{props.symbol && props.value ? " ₮" : null}{props.csymbol ? props.csymbol : ""}</span>
        </div>
    );
}

export default Number;