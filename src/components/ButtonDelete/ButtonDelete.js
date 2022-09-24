import React, { useState } from 'react';
import { IconButton } from '@fluentui/react';
import { Color } from '../../const/Const';
import { FocusTrapCallout } from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';

const ButtonDelete = (props) => {

    const buttonId = useId('callout-button');
    const [show, setShow] = useState(false);

    const yes = () => {
        setShow(false);
        props.onClick();
    }

    const no = () => {
        setShow(r => !r);
    }

    const onPress = () => {
        setShow(r => !r);
    }

    return (
        <div>
            <IconButton id={buttonId} iconProps={{ iconName: 'Delete' }} title={props.text} style={{ color: Color.black }} onClick={onPress} />
            {show ? (
                <FocusTrapCallout
                    role="alertdialog"
                    gapSpace={0}
                    target={`#${buttonId}`}>
                    <div style={{ padding: 16 }}>
                        <div>Устгах уу?</div>
                        <div style={{ display: 'flex', marginTop: 16 }}>
                            <ButtonSecondary text="Үгүй" onClick={no} />
                            <div style={{ marginLeft: 16 }}>
                                <ButtonDefault text="Тийм" onClick={yes} />
                            </div>
                        </div>
                    </div>
                </FocusTrapCallout>
            ) : null}
        </div>
    );
}

export default ButtonDelete;