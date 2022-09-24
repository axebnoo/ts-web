import React, { useState, useEffect } from 'react';
import { TextField, Checkbox } from '@fluentui/react';

const FieldNumberCheck = (props) => {

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
            <div style={{ fontWeight: 600, fontSize: 14 }}>{props.title}</div>
            <div style={{ marginTop: 6, display: 'flex', alignItems: 'center' }}>
                <Checkbox />
                <div style={{ width: '100%', marginLeft: 16 }}>
                    <TextField
                        onChange={onChanged}
                        type='number'
                        value={value ? value : null}
                    />
                </div>
            </div>
        </div>
    );
}

export default FieldNumberCheck;