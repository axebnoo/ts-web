import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { Color } from '../../const/Const';

const ButtonDefaultIcon = (props) => {

    let vFull = {};
    if (props.full) {
        vFull = {
            width: '100%'
        }
    }

    return (
        <div>
            <PrimaryButton iconProps={{ iconName: props.iconName }} style={{ backgroundColor: Color.blue, border: '1px solid #0358A7', ...vFull }} text={props.text} onClick={props.onClick} />
        </div>
    );
}

export default ButtonDefaultIcon;