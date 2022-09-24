import React, { useState, useEffect } from 'react';
import { TextField } from '@fluentui/react';
import { Color } from '../../const/Const';

const FieldTextGrid = (props) => {

    const [value, setValue] = useState();

    const onChanged = (p_value) => {
        setValue(p_value.target.value);
        if (props.onChanged) {
            props.onChanged(props.keyfield, props.index, p_value.target.value);
        }
    }

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    let vColor = { fontWeight: 600 };
    if (props.gray) {
        vColor = {
            color: Color.graySecond,
            fontWeight: 400
        };
    }

    return (
        <div>
            <TextField borderless readOnly={props.disable == true ? true : false} onChange={onChanged} value={value} placeholder={props.name ? props.name : ''} />
        </div>
    );
}

export default FieldTextGrid;