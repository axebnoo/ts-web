import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';
import { Color } from '../../const/Const';
import { DownOutlined } from '@ant-design/icons';
import { IconButton } from '@fluentui/react';
import MenuPopoverEmp from '../MenuPopoverEmp/MenuPopoverEmp';

const ListTree = (props) => {

    const [data, setData] = useState([]);
    const [dKey, setDKey] = useState(1);

    useEffect(() => {
        setData(props.data);
        setDKey(r => r + 1);
    }, [props.data])

    return (
        <div key={dKey}>
            <div style={{ marginBottom: 6, height: 42, display: 'flex', alignItems: 'center', paddingLeft: 16, paddingRight: 16, fontWeight: 600, fontSize: 14, backgroundColor: Color.grayHeaderBack }}>
                {props.title}
            </div>
            <Tree
                style={{ paddingLeft: 16 }}
                titleRender={(nodeData) => {
                    if (nodeData.level == 0) {
                        return (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontWeight: 600, fontSize: 14, color: Color.blue }}>
                                    {nodeData.title}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontSize: 12, color: '#212121' }}>
                                    {nodeData.title} <MenuPopoverEmp data={nodeData.employees} />
                                </div>
                            </div>
                        );
                    }
                }}
                switcherIcon={<DownOutlined />}
                defaultExpandAll
                treeData={data}
                onSelect={props.onSelect}
            />
        </div>
    );
}

export default ListTree;