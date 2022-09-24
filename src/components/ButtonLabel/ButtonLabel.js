import React from 'react';
import { DefaultButton } from '@fluentui/react';
import { Color } from '../../const/Const';

const ButtonLabel = (props) => {
    return (
        <div>
            <DefaultButton onClick={props.onClick} style={{ color: Color.blue, border: 0 }} text={props.text} />
        </div>
    );
}

export default ButtonLabel;