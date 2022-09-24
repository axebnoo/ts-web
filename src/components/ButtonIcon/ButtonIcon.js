import React from 'react';
import { DefaultButton } from '@fluentui/react';
import { Color } from '../../const/Const';

const ButtonIcon = (props) => {

    let bColor = { backgroundColor: Color.grayBackground };
    if (props.white) {
        bColor = { backgroundColor: Color.white };
    }

    return (
        <div style={{ marginTop: 4 }}>
            <DefaultButton
                style={{
                    ...bColor,
                    border: 0,
                    color: Color.backText,
                    padding: 0,
                    fontWeight: 400,
                    fontSize: 14
                }}
                styles={{
                    root: {
                        '.ms-Button-icon': {
                            color: Color.blue
                        },
                        '.ms-Button-label': {
                            fontWeight: 400
                        }
                    }
                }}
                text={props.text}
                iconProps={{ iconName: props.iconName }}
                onClick={props.onClick} />
        </div>
    );
}

export default ButtonIcon;