import React from 'react';
import { Color } from '../../const/Const';

const PageTitle = (props) => {
    return (
        <div style={{
            fontSize: 20,
            color: Color.backText
        }}>
            {props.children}
        </div>
    );
}

export default PageTitle;