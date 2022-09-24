import React, { useEffect, useState } from 'react';
import { Dropdown } from '@fluentui/react';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';
import { Shimmer } from '@fluentui/react';

const FieldDropdownMulti = (props) => {

    const [value, setValue] = useState([]);

    const onChanged = (p_value) => {
        let tValue = [...value];
        if (p_value.selected) {
            tValue.push(p_value.key);
        } else {
            let tIndex = tValue.indexOf(p_value.key);
            if (tIndex >= 0) {
                tValue.splice(tIndex, 1);
            }
        }
        setValue(tValue);
        props.onChanged(tValue, p_value.text, props.keyfield);
    }

    useEffect(() => {
        let tValue = [];
        if (props.defaultValue?.length > 0) {
            tValue = props.defaultValue;
        }
        setValue(tValue);
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
                        multiSelect
                        selectedKeys={value}
                        disabled={props.disable ? true : false}
                        onChanged={onChanged}
                        errorMessage={(props.required && value?.length == 0 && props.checkreq && props.data?.length > 0 && !props.disable) ? (props.title + MessageConst.fieldRequired) : null}
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

export default FieldDropdownMulti;