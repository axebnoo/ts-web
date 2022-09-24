import React from 'react';
import { Color, ConstCss } from '../../const/Const';
import { ReactComponent as OrderByIcon } from '../../svg/orderby.svg'

const FieldOrder = () => {
    return (
        <div style={{ ...ConstCss.flexCenter, cursor: 'pointer' }}>
            <OrderByIcon />
        </div>
    );
}

export default FieldOrder;