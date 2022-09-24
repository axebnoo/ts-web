import React, { useState, useEffect } from 'react';
import { TextField } from '@fluentui/react';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';

const FieldPassword = (props) => {

    const [value, setValue] = useState();

    const onChanged = (p_value) => {
        setValue(p_value.target.value);
        props.onChanged(p_value.target.value, '', props.keyfield);
    }

    useEffect(() => {
        setValue(props.defaultValue);
    }, [props.defaultValue])

    let vColor = { fontWeight: 600 };
    if (props.gray) {
        vColor = {
            color: Color.graySecond,
            fontWeight: 400
        };
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ fontSize: 14, ...vColor }}>{props.title}</div>{props.required && (<div style={{ color: Color.red }}>*</div>)}
            </div>
            <div style={{ marginTop: 6 }}>
                <TextField autoComplete='off' type='password' disabled={props.disable == true ? true : false} onChange={onChanged} value={value} errorMessage={(props.required && !value && props.checkreq) ? (props.title + MessageConst.fieldRequired) : null} />
            </div>
        </div >
    );
}

export default FieldPassword;