import React, { useState, useEffect } from 'react';
import { Color } from '../../const/Const';
import NumberFormat from 'react-number-format';
import { TextField } from '@fluentui/react';
import { MessageConst } from '../../const/MessageConst';

const FieldNumberGrid = (props) => {

    const [value, setValue] = useState();

    const onChanged = (value) => {
        setValue(value.target.value);
        props.onChanged(props.keyfield, props.index, value.target.value);
    }

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    return (
        <div style={{ marginLeft: 16 }}>
            <NumberFormat
                style={{ textAlign: 'end' }}
                customInput={TextField}
                onChange={onChanged}
                thousandSeparator={true}
                decimalScale={2}
                disabled={props.disabled}
                value={value ? value : null}
            />
        </div>
    );
}

export default FieldNumberGrid;