import React from 'react';
import { MessageBar, MessageBarType } from '@fluentui/react';

const Warning = (props) => {
    let zeroMargin = {
        marginTop: 13
    };

    if (props.zeroMargin) {
        zeroMargin = {};
    }

    return (
        <div>
            {props.value && (<div style={{ ...zeroMargin }}>
                <MessageBar
                    messageBarType={MessageBarType.warning}
                    dismissButtonAriaLabel="Close">
                    {props.value}
                </MessageBar>
            </div>)}
        </div>
    );
}

export default Warning;