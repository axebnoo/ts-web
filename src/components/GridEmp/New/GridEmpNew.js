import { Col, message, Row } from 'antd';
import React, { useState } from 'react';
import ButtonDefaultWithLoad from '../../ButtonDefaultWithLoad/ButtonDefaultWithLoad';
import FieldText from '../../FieldText/FieldText';
import PanelBase from '../../PanelBase/PanelBase';
import moment from 'moment';
import axios from 'axios';
import { MessageConst } from '../../../const/MessageConst';

const GridEmpNew = (props) => {

    const [initData, setInitData] = useState({
        user: null,
        position: null,
        feedbackid: props.id,
        date: moment().format("YYYY.MM.DD")
    });
    const [data, setData] = useState({ ...initData });
    const [loadingSave, setLoadingSave] = useState(false);
    const [checkRule, setCheckRule] = useState(false);

    const onDismiss = () => {
        setData({ ...initData });
        props.onDismiss();
    }

    const fieldOnChanged = async (key, text, field) => {
        if (field) {
            let tData = { ...data };
            tData[field] = key;
            setData(tData);
        }
    }

    const onSave = async () => {
        let vRule = true;
        setCheckRule(true);

        if (!data.user) {
            vRule = false;
        }

        if (vRule) {
            setLoadingSave(true);
            await axios.post('https://taz-hr-default-rtdb.asia-southeast1.firebasedatabase.app/feedbackemp.json', data).then(response => {
                if (response.status == 200) {
                    message.success(MessageConst.success);
                    setCheckRule(false);
                    onDismiss();
                }
            });
            setLoadingSave(false);
        }
    }

    return (
        <div>
            <PanelBase
                isOpen={props.isOpen}
                onDismiss={onDismiss}
                headerText="Хариуцагч нэмэх"
                buttons={<div style={{ display: 'flex' }}>
                    <div>
                        <ButtonDefaultWithLoad loading={loadingSave} text="Хадгалах" onClick={() => onSave()} />
                    </div>
                </div>}
            >
                <Row gutter={[16, 16]} style={{ marginTop: 18 }}>
                    <Col span={24}>
                        <FieldText required onChanged={fieldOnChanged} title="Гишүүд" keyfield='user' defaultValue={data.user} checkreq={checkRule} />
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: 13 }}>
                    <Col span={24}>
                        <FieldText onChanged={fieldOnChanged} title="Албан тушаал" keyfield='position' defaultValue={data.position} />
                    </Col>
                </Row>
            </PanelBase>
        </div>
    );
}

export default GridEmpNew;