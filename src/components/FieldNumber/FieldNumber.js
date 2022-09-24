import React, { useState, useEffect } from 'react';
import { Shimmer, TextField } from '@fluentui/react';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';

const FieldNumber = (props) => {

    const [value, setValue] = useState();

    const onChanged = (value) => {
        setValue(value.target.value);
        props.onChanged(value.target.value, '', props.keyfield);
    }

    useEffect(() => {
        setValue(props.defaultValue);
    }, [props.defaultValue]);

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{props.title}</div>{props.required && (<div style={{ color: Color.red }}>*</div>)}
            </div>
            <div style={{ marginTop: 6 }}>
                {props.loading ? (
                    <div>
                        <Shimmer />
                        <Shimmer />
                    </div>
                ) : (
                    <TextField
                        onChange={onChanged}
                        disabled={props.disabled}
                        type='number'
                        value={value ? value : null}
                        errorMessage={(props.required && !value && props.checkreq) ? (props.title + MessageConst.fieldRequired) : null}
                    />
                )}
            </div>
        </div>
    );
}

export default FieldNumber;