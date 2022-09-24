import React from 'react';
import { Color } from '../../const/Const';

const ColTag = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            {props.data?.map((r, index) => {
                let vColor = Color.tagSecondary;
                if (index == 0) {
                    vColor = Color.tagPrimary;
                }
                return (
                    <div style={{ marginLeft: 8, backgroundColor: vColor, paddingRight: 8, paddingLeft: 8, borderRadius: 10 }}>{r}</div>
                );
            })}
        </div >
    );
}

export default ColTag;