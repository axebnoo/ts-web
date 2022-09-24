import React from 'react';
import { SearchBox } from '@fluentui/react';

const FieldSearch = (props) => {
    return (
        <div>
            <SearchBox
                placeholder={props.placeholder}
                style={{ width: props.large ? 300 : 200 }}
                styles={{
                    root: {
                        border: '1px solid #E5E5E5'
                    }
                }} />
        </div>
    );
}

export default FieldSearch;