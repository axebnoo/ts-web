import React, { useState, useEffect } from 'react';
import { TextField } from '@fluentui/react';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';
import { Shimmer } from '@fluentui/react';


const FieldTextlogin = (props) => {

    const [value, setValue] = useState();

    const onChanged = (p_value) => {
        setValue(p_value.target.value);
        props.onChanged(p_value.target.value, '', props.keyfield);
    }

    const onKeyDown = (e) => {
        if (e.keyCode == 13 && props.onEnterClicked) {
            props.onEnterClicked(value);
        }
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
                <div style={{ fontSize: 16, color: Color.gray }}>{props.title}</div>
            </div>
            <div style={{ marginTop: 6 }}>
                {props.loading ? (
                    <div>
                        <Shimmer />
                        <Shimmer />
                    </div>
                ) : (
                    <TextField canRevealPassword onChange={onChanged} onChange={onChanged} type={props.type} onKeyDown={onKeyDown} value={value} errorMessage={errorMessage}   {...vMaxLength} autoComplete='off' disabled={props.disable == true ? true : false}
                        styles={{
                            field: {
                                height: 56
                            },
                            fieldGroup: {
                                height: 56,
                                border: '1px solid #DADADA',
                                borderRadius: 8
                            }
                        }} />
                )}
            </div>
        </div >
    );
}

export default FieldTextlogin;