import React, { useState, useEffect } from 'react';
import { Panel, PanelType } from '@fluentui/react';
import Warning from '../Warning/Warning';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

const PanelBase = (props) => {

    const [warning, setWarning] = useState();


    useEffect(() => {
        setWarning(props.warning);
    }, [props.warning])

    return (
        <Panel
            isOpen={props.isOpen}
            headerText={props.headerText}
            onDismiss={props.onDismiss}
            type={props.PanelType == "large" ? PanelType.large : PanelType.medium}
            isFooterAtBottom={true}
            onRenderFooterContent={() => (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        {props.delete ? <div>
                            <ButtonDelete text="Устгах" onClick={props.onDelete} />
                        </div> : null}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: 16 }}>
                            <Warning zeroMargin value={warning} />
                        </div>
                        <div style={{ marginRight: 16 }}>
                            <ButtonSecondary text="Болих" onClick={props.onDismiss} />
                        </div>
                        {props.buttons}
                    </div>
                </div>
            )}
        >
            {props.children}
        </Panel>
    );
}

export default PanelBase;