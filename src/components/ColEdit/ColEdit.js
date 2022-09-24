import React from 'react';
import { Color } from '../../const/Const';

const ColEdit = (props) => {
    return (
        <div onClick={props.onClick} style={{ color: Color.blue, cursor: 'pointer' }}>
            {props.children}
        </div>
    );
}

export default ColEdit