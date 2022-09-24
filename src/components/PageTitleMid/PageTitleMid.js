import React from 'react';
import { Color } from '../../const/Const';

const PageTitleMid = (props) => {
    return (
        <div style={{
            fontSize: 16,
            color: Color.backText
        }}>
            {props.children}
        </div>
    );
}

export default PageTitleMid;