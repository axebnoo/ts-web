import React from 'react';
import { IconButton } from '@fluentui/react';

const GridAction = (props) => {
    return (
        <div>
            {props.title}
            <IconButton
                styles={{
                    root: { float: 'right', height: 'inherit' }
                }}
                menuIconProps={{ iconName: "MoreVertical" }}
                menuProps={{
                    items: [
                        {
                            key: 'Засах',
                            text: 'Засах',
                            iconProps: { iconName: 'Edit' },
                            onClick: () => props.onEdit(props.id)
                        },
                        {
                            key: 'Устгах',
                            text: 'Устгах',
                            iconProps: { iconName: 'Delete' },
                            onClick: () => props.onDelete(props.id)
                        }
                    ],
                    directionalHintFixed: true,
                }}
            />
        </div>
    );
}

export default GridAction;