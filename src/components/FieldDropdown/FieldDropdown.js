import React, { useEffect, useState } from 'react';
import { Dropdown } from '@fluentui/react';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';
import { Shimmer } from '@fluentui/react';

const FieldDropdown = (props) => {

    const [value, setValue] = useState();

    const onChanged = (p_value) => {
        setValue(p_value.key);
        props.onChanged(p_value.key, p_value.text, props.keyfield);
    }

    useEffect(() => {
        setValue(props?.defaultValue != undefined ? props.defaultValue : null);
    }, [props.defaultValue]);

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
                {props.loading ? (
                    <div>
                        <Shimmer />
                        <Shimmer />
                    </div>
                ) : (
                    <Dropdown
                        options={props.data ? props.data : []}
                        selectedKey={value}
                        disabled={props.disable ? true : false}
                        onChanged={onChanged}
                        errorMessage={(props.required && !value && props.checkreq && props.data?.length > 0 && !props.disable) ? (props.title + MessageConst.fieldRequired) : null}
                        styles={{
                            title: {
                                border: '1px solid #DDDDDD'
                            }
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default FieldDropdown;