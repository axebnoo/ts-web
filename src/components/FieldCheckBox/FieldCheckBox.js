import React, { useState, useEffect } from 'react';
import { Checkbox } from '@fluentui/react';

const FieldCheckBox = (props) => {


    const [checked, setChecked] = useState(props.checked ? true : false);

    const onChanged = (ev, isChecked) => {
        setChecked(isChecked);
        props.onChanged(isChecked, '', props.keyfield);
    }

    useEffect(() => {
        setChecked(props.defaultValue);
    }, [props.defaultValue])

    return (
        <div>
            <div style={{ marginTop: 26 }}>
                <Checkbox checked={checked} onChange={onChanged} label={props.title} />
            </div>
        </div>
    );
}

export default FieldCheckBox;