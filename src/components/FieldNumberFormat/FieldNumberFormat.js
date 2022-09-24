import React, { useState, useEffect } from 'react';
import { Shimmer, TextField } from '@fluentui/react';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';
import NumberFormat from 'react-number-format';

const FieldNumberFormat = (props) => {

    const [value, setValue] = useState();

    const onChanged = (value) => {
        setValue(value.target.value);
        props.onChanged(value.target.value, '', props.keyfield);
    }

    useEffect(() => {
        setValue(props.defaultValue);
    }, [props.defaultValue]);


    let errorMsg = null;
    if (props.limit && value) {
        if (parseFloat(value?.toString().replaceAll(',', '')) < parseFloat(props.limit.min)
            || parseFloat(value?.toString().replaceAll(',', '')) > parseFloat(props.limit.max)) {
            errorMsg = 'Хязгаараас хэтэрсэн';
        }
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>
                    {props.title}
                    {props.limit ? (" (" + props.limit.min + "-" + props.limit.max + ")") : null}
                </div>
                {props.required && (<div style={{ color: Color.red }}>*</div>)}
            </div>
            <div style={{ marginTop: 6 }}>
                {props.loading ? (
                    <div>
                        <Shimmer />
                        <Shimmer />
                    </div>
                ) : (
                    <NumberFormat
                        style={{ textAlign: 'end' }}
                        customInput={TextField}
                        onChange={onChanged}
                        thousandSeparator={true}
                        decimalScale={2}
                        disabled={props.disabled}
                        value={value ? value : null}
                        errorMessage={(props.required && (!value || errorMsg) && props.checkreq) ? (errorMsg ? errorMsg : (props.title + MessageConst.fieldRequired)) : null}
                    />
                )}
            </div>
        </div>
    );
}

export default FieldNumberFormat;