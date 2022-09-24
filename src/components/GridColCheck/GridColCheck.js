import React, { useState, useEffect } from 'react';
import { Checkbox } from '@fluentui/react';
import { Color } from '../../const/Const';

const GridColCheck = (props) => {


    const [checked, setChecked] = useState(props.checked ? true : false);

    const onChanged = (ev, isChecked) => {
        setChecked(isChecked);
        props.onChanged(isChecked, '', props.keyfield);
    }

    useEffect(() => {
        setChecked(props.defaultValue);
    }, [props.defaultValue]);

    return (
        <Checkbox disabled={props.disable == false ? true : false} checked={checked} onChange={onChanged} label={null} />
    );
}

export default GridColCheck;