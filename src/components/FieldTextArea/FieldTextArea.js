import React, { useState, useEffect } from 'react';
import { TextField } from '@fluentui/react';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';

const FieldTextArea = (props) => {

    const [value, setValue] = useState();

    const onChanged = (p_value) => {
        setValue(p_value.target.value);
        props.onChanged(p_value.target.value, '', props.keyfield);
    }

    useEffect(() => {
        setValue(props.defaultValue);
    }, [props.defaultValue]);

    let vColor = { fontWeight: 600 };
    if (props.gray) {
        vColor = {
            color: Color.graySecond,
            fontWeight: 400
        };
    }

    let vMaxLength = {};
    if (props.maxLength) {
        vMaxLength = {
            maxLength: props.maxLength
        }
    }


    let errorMessage = null;

    if (props.required && props.checkreq) {
        if (props.message) {
            errorMessage = props.message;
        } else if (!value) {
            errorMessage = props.title + MessageConst.fieldRequired;
        }
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ fontSize: 14, ...vColor }}>{props.title}</div>{props.required && (<div style={{ color: Color.red }}>*</div>)}
            </div>
            <div style={{ marginTop: 6 }}>
                <TextField multiline {...vMaxLength} autoComplete='off' disabled={props.disable == true ? true : false} onChange={onChanged} value={value} errorMessage={errorMessage} />
            </div>
        </div >
    );
}

export default FieldTextArea;