import React from 'react';
import { ComboBox } from '@fluentui/react';

const FieldComboGrid = (props) => {

    const onChange = (p_combo, p_value, p_index) => {
        if (props.onChanged) {
            props.onChanged(props.keyfield, props.index, p_value.key);
        }
    }

    return (
        <div>
            <ComboBox
                selectedKey={props.value}
                styles={{
                    root: {
                        wrapper: {
                            '&::after': {
                                border: '1px solid white'
                            }
                        }
                    }
                }}
                onChange={onChange}
                options={props.data}
                placeholder={props.name}
            />
        </div>
    );
}

export default FieldComboGrid;