import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { Color } from '../../const/Const';

const ButtonDefault = (props) => {

    let vFull = {};
    if (props.full) {
        vFull = {
            width: '100%'
        }
    }

    let vBColor = {
        backgroundColor: Color.blue,
        border: '1px solid #0358A7'
    }

    if (props.disabled == true) {
        vBColor = {
            backgroundColor: Color.grayButton,
            color: Color.white
        }
    }


    return (
        <div>
            <PrimaryButton disabled={props.disabled == true ? true : false} style={{ ...vBColor, ...vFull }} text={props.text} onClick={props.onClick} />
        </div>
    );
}

export default ButtonDefault;