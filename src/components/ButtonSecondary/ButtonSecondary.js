import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { Color } from '../../const/Const';

const ButtonSecondary = (props) => {

    let vFull = {};
    if (props.full) {
        vFull = {
            width: '100%'
        }
    }

    return (
        <div>
            <PrimaryButton style={{ backgroundColor: Color.white, border: '1px solid #C6C6C6', ...vFull, color: Color.black }} text={props.text} onClick={props.onClick} />
        </div>
    );
}

export default ButtonSecondary;