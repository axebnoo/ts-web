import React from 'react';
import { Color } from '../../const/Const';

const Step = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
            {props.data.map((r, index) => {
                let bColor = Color.white;
                let tColor = Color.graySecond;
                let vborderColor = '1px solid #6A6D70';
                if (r.key == props.defaultKey) {
                    bColor = Color.blue;
                    tColor = Color.white;
                    vborderColor = '1px solid #0358A7';
                }

                return (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ border: vborderColor, width: 32, height: 32, backgroundColor: bColor, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: tColor }}>
                                {r.key}
                            </div>
                            <div style={{ marginLeft: 5, fontSize: 12, color: Color.graySecond }}>
                                {r.text}
                            </div>
                        </div>
                        {index + 1 < props.data.length && (
                            <div style={{ height: 1, backgroundColor: Color.blue, content: "", marginLeft: 8, marginRight: 8, width: 50 }}></div>
                        )}
                    </>
                );
            })}
        </div>

    );
}

export default Step;