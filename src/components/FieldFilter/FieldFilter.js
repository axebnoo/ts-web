import React from 'react';
import { Color, ConstCss } from '../../const/Const';
import { ReactComponent as FilterIcon } from '../../svg/filterIcon.svg'

const FieldFilter = () => {
    return (
        <div style={{ ...ConstCss.flexCenter, cursor: 'pointer' }}>
            <FilterIcon />
        </div>
    );
}

export default FieldFilter;