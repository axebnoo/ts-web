import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import { Color } from '../../const/Const';
import { DownOutlined } from '@ant-design/icons';
import { IconButton } from '@fluentui/react';
import MenuPopoverEmp from '../MenuPopoverEmp/MenuPopoverEmp';

const ListGrouped = (props) => {

    const [data, setData] = useState([]);
    const [dKey, setDKey] = useState(1);

    useEffect(() => {
        setData(props.data);
        setDKey(r => r + 1);
    }, [props.data])

    return (
        <div key={dKey}>
            <div style={{ marginBottom: 6, height: 42, display: 'flex', alignItems: 'center', paddingLeft: 16, paddingRight: 16, fontWeight: 600, fontSize: 14 }}>
                {props.title}
            </div>
            <Tree
                style={{ paddingLeft: 16 }}
                titleRender={(nodeData) => {

                    let level = 24 * nodeData.level;

                    if (nodeData.header) {
                        return (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: 624 - level }}>
                                <div style={{ fontWeight: 600, fontSize: 14, color: Color.blue }}>
                                    {nodeData.title}
                                </div>
                                {!props.hideEditControl ? (
                                    <div>
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
                                                        onClick: () => props.onEditP(nodeData.id)
                                                    },
                                                    {
                                                        key: 'Устгах',
                                                        text: 'Устгах',
                                                        iconProps: { iconName: 'Delete' },
                                                        onClick: () => props.deleteP(nodeData.id)
                                                    }
                                                ],
                                                directionalHintFixed: true,
                                            }}
                                        />
                                    </div>) : null}
                            </div>
                        );
                    } else {
                        return (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: 624 - level }}>
                                <div style={{ fontSize: 12, color: '#212121' }}>
                                    {nodeData.title} <MenuPopoverEmp data={nodeData.employees} />
                                </div>
                                {!props.hideEditControl ? (
                                    <div>
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
                                                        onClick: () => props.onEditC(nodeData.id)
                                                    },
                                                    {
                                                        key: 'Устгах',
                                                        text: 'Устгах',
                                                        iconProps: { iconName: 'Delete' },
                                                        onClick: () => props.deleteC(nodeData.id)
                                                    }
                                                ],
                                                directionalHintFixed: true,
                                            }}
                                        />
                                    </div>) : null}
                            </div>
                        );
                    }
                }}
                switcherIcon={<DownOutlined />}
                defaultExpandAll
                treeData={data}
            />
        </div>
    );
}

export default ListGrouped;