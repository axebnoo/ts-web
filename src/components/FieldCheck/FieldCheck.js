import React, { useState, useEffect } from 'react';
import { Checkbox } from '@fluentui/react';
import { Color } from '../../const/Const';

const FieldCheck = (props) => {


    const [checked, setChecked] = useState(props.checked ? true : false);

    const onChanged = (ev, isChecked) => {
        setChecked(isChecked);
        props.onChanged(isChecked, '', props.keyfield);
    }

    useEffect(() => {
        setChecked(props.defaultValue);
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
            <div style={{ fontSize: 14, ...vColor }}>{props.title}</div>
            <div style={{ marginTop: 6, height: 32, display: 'flex', alignItems: 'center' }}>
                <Checkbox disabled={props.disable == false ? true : false} checked={checked} onChange={onChanged} label={null} />
            </div>
        </div>
    );
}

export default FieldCheck;