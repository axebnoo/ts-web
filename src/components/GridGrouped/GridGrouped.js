import React from 'react';
import { DetailsList, SelectionMode, DetailsListLayoutMode } from '@fluentui/react';
import { Color } from '../../const/Const';

const GridGrouped = (props) => {

    let columns = [];
    if (props?.columns?.length > 0) {
        columns = props.columns.map(r => {
            let vRow = { ...r };
            vRow.isResizable = true;
            vRow.key = r.fieldName;
            return vRow;
        });
    }

    return (
        <DetailsList
            styles={{
                root: {
                    selectors: {
                        '.ms-DetailsHeader': {
                            paddingTop: '0px'
                        },
                        '.ms-FocusZone': {
                            borderBottom: '1px solid rgb(243, 242, 241)'
                        },
                        '.ms-DetailsRow-cell': {
                            color: '#201F1E'
                        },
                        '.ms-GroupHeader-title': {
                            color: '#0358A7'
                        }
                    }
                }
            }}
            selectionMode={SelectionMode.none}
            items={props.data ? props.data : []}
            compact={true}
            columns={columns}
            groups={props.groups ? props.groups : []}
        />
    );
}

export default GridGrouped;