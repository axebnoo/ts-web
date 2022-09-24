import React, { useState, useEffect } from 'react';
import { TextField } from '@fluentui/react';

const FieldTextVoid = (props) => {
    return (
        <div>
            <div style={{ fontSize: 14 }}>{props.title}</div>
            <div style={{ marginTop: 6, height: 32 }}>
            </div>
        </div >
    );
}

export default FieldTextVoid;