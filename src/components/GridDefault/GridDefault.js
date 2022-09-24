import React from 'react';
import { DetailsList, SelectionMode, DetailsListLayoutMode } from '@fluentui/react';
import { Color } from '../../const/Const';

const GridDefault = (props) => {

    let columns = [];
    if (props?.columns?.length > 0) {
        columns = props.columns.map(r => {
            let vRow = { ...r };
            vRow.isResizable = true;
            vRow.key = r.fieldName;

            let classNames = [];
            if (r.isBold) {
                classNames.push("row-bold");
            }
            if (r.isCapitalize) {
                classNames.push("row-capitalize")
            }

            if (classNames?.length > 0) {
                vRow.className = classNames.join(" ");
            }

            if (r.colSize) {
                if (r.colSize == 'small') {
                    vRow.maxWidth = 100;
                }
                if (r.colSize == 'mid') {
                    vRow.maxWidth = 160;
                }
            }

            if (r.minColSize) {
                if (r.minColSize == 'mid') {
                    vRow.minWidth = 220;
                    vRow.maxWidth = 260;
                } else if (r.minColSize == 'large') {
                    vRow.minWidth = 320;
                    vRow.maxWidth = 360;
                }
            }

            return vRow;
        });
    }

    return (
        <div>
            <DetailsList
                styles={{
                    root: {
                        selectors: {
                            '.ms-DetailsHeader': {
                                paddingTop: '0px'
                            },
                            '.ms-DetailsRow-cell': {
                                color: '#201F1E'
                            }
                        }
                    }
                }}
                selectionMode={SelectionMode.none}
                compact={true}
                items={props.data ? props.data : []}
                columns={columns}
            />
            {props?.data?.length <= 0 ? (
                <div style={{ backgroundColor: Color.white, textAlign: 'center', color: Color.grayNoData, paddingBottom: 18 }}>
                    Харуулах мэдээлэлгүй байна
                </div>
            ) : (
                null
            )}

        </div>
    );
}

export default GridDefault;