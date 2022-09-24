import React from 'react';
import { Color } from '../../const/Const';

const FieldLabel = (props) => {

    return (
        <div>
            <div style={{ color: Color.graySecond, fontSize: 14 }}>{props.title}</div>
            <div style={{ marginTop: 6, fontSize: 14, color: Color.blackSecond }}>
                {props.value}
            </div>
        </div>
    );
}

export default FieldLabel;