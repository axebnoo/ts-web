import React, { useEffect, useState } from 'react';
import { Dropdown, defaultDatePickerStrings } from '@fluentui/react';
import { DatePicker } from '@fluentui/react';
import moment from 'moment';
import { Color } from '../../const/Const';
import { MessageConst } from '../../const/MessageConst';

const FieldDate = (props) => {

    const [value, setValue] = useState();

    useEffect(() => {
        let tValue = null;
        if (props.defaultValue) {
            tValue = moment(props.defaultValue);
        }
        setValue(tValue);
    }, [props.defaultValue]);

    const onFormatDate = (date) => {
        return !date ? '' : moment(date).format("YYYY.MM.DD");
    };

    const onChangeDate = (p_date) => {
        setValue(p_date);
        if (p_date) {
            props.onChanged(moment(p_date).format("YYYY.MM.DD"), '', props.keyfield);
        } else {
            props.onChanged(null, '', props.keyfield);
        }
    }

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
                <DatePicker
                    formatDate={onFormatDate}
                    borderless={false}
                    allowTextInput
                    onSelectDate={onChangeDate}
                    value={value}
                    disabled={props.disable == true ? true : false}
                />
                {(props.required && !value && props.checkreq) ? (
                    <div style={{ color: 'rgb(164, 38, 44)', fontSize: 12, fontWeight: 400, paddingTop: 5 }}>
                        {props.title + MessageConst.fieldRequired}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FieldDate;