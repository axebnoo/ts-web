import React from 'react';
import { Color } from '../../const/Const';
import { ReactComponent as WarnColIcon } from '../../svg/warnColIcon.svg';
import { TooltipHost } from '@fluentui/react';

const ColWarn = (props) => {
    return (
        <div>
            {props.show && props.show == true ? (
                <TooltipHost content={props.message}>
                    <div style={{ fontWeight: 500, fontSize: 12, color: Color.warn, display: 'flex', alignItems: 'center' }}>
                        <div>
                            {props.value}
                        </div>
                        <div style={{ marginLeft: 4, height: 16 }}>
                            <WarnColIcon />
                        </div>
                    </div>
                </TooltipHost>
            ) : (
                <div>{props.value}</div>
            )}
        </div>
    );
}

export default ColWarn;