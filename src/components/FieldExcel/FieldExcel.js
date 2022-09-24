import React from 'react';
import { Color, ConstCss } from '../../const/Const';
import { ReactComponent as ExcelIcon } from '../../svg/excelIcon.svg'

const FieldExcel = () => {
    return (
        <div style={{ ...ConstCss.flexCenter, cursor: 'pointer' }}>
            <ExcelIcon />
        </div>
    );
}

export default FieldExcel;