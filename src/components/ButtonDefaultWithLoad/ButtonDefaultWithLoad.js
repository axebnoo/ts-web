import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { Color } from '../../const/Const';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const ButtonDefaultWithLoad = (props) => {

    let vFull = {};
    if (props.full) {
        vFull = {
            width: '100%'
        }
    }

    return (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} spinning={props.loading ? props.loading : false} >
            <PrimaryButton style={{ backgroundColor: Color.blue, border: '1px solid #0358A7', ...vFull }} text={props.text} onClick={props.onClick} />
        </Spin>
    );
}

export default ButtonDefaultWithLoad;