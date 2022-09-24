import React from 'react';
import { CommandBarButton } from '@fluentui/react';
import { Color } from '../../const/Const';

const ButtonIconOption = (props) => {

    let bColor = { backgroundColor: Color.grayBackground };
    if (props.white) {
        bColor = { backgroundColor: Color.white };
    }

    return (
        <div style={{ marginTop: 4 }}>
            <CommandBarButton
                style={{
                    ...bColor,
                    border: 0,
                    color: Color.backText,
                    padding: 0,
                    fontWeight: 400,
                    fontSize: 14,
                    height: 32
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
                menuProps={props.menuProps}
            />
        </div>
    );
}

export default ButtonIconOption;