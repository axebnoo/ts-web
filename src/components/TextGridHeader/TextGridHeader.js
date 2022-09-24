import React from 'react';

const TextGridHeader = (props) => {
    return (
        <div style={{ fontWeight: 600, fontSize: 14 }}>
            {props.value}
        </div>
    );
}

export default TextGridHeader;