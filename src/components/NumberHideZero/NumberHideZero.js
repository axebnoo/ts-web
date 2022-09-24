import React from 'react';
import NumberFormat from 'react-number-format';

const NumberHideZero = (props) => {
    return (
        <div>
            {props.value > 0 ? (
                <div style={{ textAlign: 'right' }}>
                    <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true}></NumberFormat> <span>{props.symbol && props.value ? " ₮" : null}{(props.value && props.csymbol) ? props.csymbol : ""}</span>
                </div>
            ) : (
                <div style={{ textAlign: 'right' }}>--</div>
            )}
        </div>
    );
}

export default NumberHideZero;