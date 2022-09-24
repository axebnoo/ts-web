import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { Color } from '../../const/Const';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const ButtonLarge = (props) => {

    let vFull = {};
    if (props.full) {
        vFull = {
            width: '100%'
        }
    }

    return (
        <div>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} spinning={props.loading ? props.loading : false} >
                <PrimaryButton text={props.text} onClick={props.onClick} style={{ width: '100%', height: 56, backgroundColor: Color.blue, fontSize: 18, borderRadius: 8 }} />
            </Spin>
        </div>
    );
}

export default ButtonLarge;