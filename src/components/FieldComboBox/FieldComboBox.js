import React, { useEffect, useState, useRef } from 'react';
import { ComboBox } from '@fluentui/react';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';
import { Shimmer } from '@fluentui/react';

const FieldComboBox = (props) => {

    const [value, setValue] = useState();
    const [data, setData] = useState([]);
    const [oData, setOData] = useState([]);
    const comboBoxRef = useRef();

    const onChanged = (event, option, index, value) => {
        if (option) {
            setValue(option.key);
            props.onChanged(option.key, option.text, props.keyfield);
        } else {
            let tData = [...oData];
            tData = tData.filter(r => {
                if (r?.text?.toLowerCase().indexOf(value?.toLowerCase()) >= 0) {
                    return true;
                } else {
                    return false;
                }
            })
            setData(tData);
            comboBoxRef.current?.focus(true);
        }
    }

    useEffect(() => {
        setValue(props?.defaultValue != undefined ? props.defaultValue : null);
    }, [props.defaultValue]);

    useEffect(() => {
        let tData = [];
        if (props.data) {
            tData = props.data;
        }
        setData(tData);
        setOData(tData);
    }, [props.data])

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
                    <ComboBox
                        componentRef={comboBoxRef}
                        options={data}
                        selectedKey={value}
                        disabled={props.disable ? true : false}
                        allowFreeform
                        onChange={onChanged}
                        errorMessage={(props.required && !value && props.checkreq && data?.length > 0 && !props.disable) ? (props.title + MessageConst.fieldRequired) : null}
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

export default FieldComboBox;