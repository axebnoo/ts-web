import React from 'react';
import { Color } from '../../const/Const';
import { TextField } from '@fluentui/react';

const FieldLabelBorder = (props) => {

    return (
        <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{props.title}</div>
            <div style={{ marginTop: 6 }}>
                <TextField value={props.value} disabled />
            </div>
        </div>
    );
}

export default FieldLabelBorder;