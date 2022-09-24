import React from 'react';
import { Color, ConstCss } from '../../const/Const';
import { ReactComponent as FreezeIcon } from '../../svg/freezeIcon.svg'

const FieldFreeze = () => {
    return (
        <div style={{ ...ConstCss.flexCenter, cursor: 'pointer' }}>
            <FreezeIcon />
        </div>
    );
}

export default FieldFreeze;