import React from 'react';
import { DefaultButton } from '@fluentui/react';
import { Color } from '../../const/Const';

const ButtonBorder = (props) => {
    return (
        <div>
            <DefaultButton onClick={props.onClick} style={{ color: Color.blue, border: '1px solid #0358A7' }} text={props.text} />
        </div>
    );
}

export default ButtonBorder;