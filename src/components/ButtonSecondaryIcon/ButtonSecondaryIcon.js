import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { Color } from '../../const/Const';

const ButtonSecondaryIcon = (props) => {

    let vFull = {};
    if (props.full) {
        vFull = {
            width: '100%'
        }
    }

    return (
        <div>
            <PrimaryButton iconProps={{
                iconName: props.iconName
            }} style={{ backgroundColor: Color.white, border: '1px solid #C6C6C6', ...vFull, color: Color.black }} text={props.text} onClick={props.onClick} />
        </div>
    );
}

export default ButtonSecondaryIcon;