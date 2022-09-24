import React, { useState, useEffect } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { ReactComponent as Divider } from '../../svg/verticalDividerGray.svg';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import GridDefaultShimmer from '../GridDefaultShimmer/GridDefaultShimmer';
import GridEmpNew from './New/GridEmpNew';
import axios from 'axios';
import { Color } from '../../const/Const';
import { Persona, PersonaSize } from '@fluentui/react';
import { message } from 'antd';
import { MessageConst } from '../../const/MessageConst';

const GridEmp = (props) => {

    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([{
        name: 'Гишүүд',
        fieldName: 'user',
        onRender: (item) => {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: 8 }}>
                        <Persona hidePersonaDetails text={item.user ? item.user : ""} size={PersonaSize.size32} />
                    </div>
                    <div>
                        <div>
                            {item.user}
                        </div>
                        <div style={{ color: Color.gray }}>
                            {item.position ? item.position : ""}
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        name: 'Илгээсэн огноо',
        fieldName: 'date'
    }, {
        name: 'Үйлдэл',
        fieldName: 'action',
        onRender: (item) => {
            return (
                <div style={{ display: 'flex', color: Color.blueLink, cursor: 'pointer' }}>
                    <div>Илгээх</div>
                    <div style={{ marginLeft: 8, marginRight: 8 }}>|</div>
                    <div onClick={() => onDelete(item.id)}>Хасах</div>
                </div>
            );
        }
    }]);

    const onDelete = async (p_id) => {
        if (p_id) {
            await axios.delete("https://taz-hr-default-rtdb.asia-southeast1.firebasedatabase.app/feedbackemp/" + p_id + ".json").then(response => {
                if (response.status == 200) {
                    message.success(MessageConst.success);
                    getData();
                }
            })
        }
    }

    const [showNew, setShowNew] = useState(false);

    const getData = async () => {
        let tData = [];
        await axios.get('https://taz-hr-default-rtdb.asia-southeast1.firebasedatabase.app/feedbackemp.json').then(response => {
            if (response.status == 200 && response.data) {
                Object.keys(response.data)?.map(key => {
                    if (response.data[key].feedbackid == props.id) {
                        tData.push({
                            ...response.data[key],
                            id: key
                        });
                    }
                });
            }
        });
        setData(tData);
    }

    useEffect(() => {
        getData();
    }, []);

    const onDismiss = () => {
        setShowNew(false);
        getData();
    }

    const onPressNew = () => {
        setShowNew(true);
    }

    return (
        <div>
            <div style={{ marginTop: 16, marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: 16 }}>
                    <PageTitle>{props.title}</PageTitle>
                </div>
                <div style={{ height: 25 }}>
                    <Divider />
                </div>
                <div style={{ marginLeft: 16 }}>
                    <ButtonIcon onClick={onPressNew} white text="Гишүүн нэмэх" iconName="Add" />
                </div>
            </div>
            <GridDefaultShimmer
                columns={columns}
                data={data}
            />
            <GridEmpNew id={props.id} isOpen={showNew} onDismiss={onDismiss} />
        </div>
    );
}

export default GridEmp;