import React, { useState, useEffect, useContext } from 'react';
import { Stack } from '@fluentui/react';
import TextGridHeader from '../TextGridHeader/TextGridHeader';
import FieldComboGrid from '../FieldComboGrid/FieldComboGrid';
import { API } from '../../API/API';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as DeleteIcon } from '../../svg/deleteIcon.svg';
import { showLoadScreen, hideLoadScreen } from '../LoadScreen/LoadScreen';
import { constData } from '../../const/Const';

const GridJob = (props) => {

    const { userInfo } = useContext(UserContext);

    const [initData, setInitData] = useState(
        {
            type: null,
            companyid: userInfo?.companyid?.toUpperCase(),
            managerpositionid: null,
            rowstate: 0
        }
    );

    const [data, setData] = useState([{ ...initData }]);
    const [dType, setDType] = useState(constData.hrManagerPos_Type);
    const [dJob, setDJob] = useState([]);

    const getData = async () => {
        let tDJob = [];
        await API.get('/api/humanresource/organization/get_position_dropdown?companyid=' + userInfo?.companyid?.toUpperCase()).then(response => {
            if (response.status == 200 && response.data.rettype == 0) {
                tDJob = response.data.retdata;
            }
        });
        setDJob(tDJob);
    }

    useEffect(() => {
        getData();
    }, []);

    const getExistData = () => {
        let tData = [{ ...initData }];
        if (props?.defaultValue?.length > 0) {
            if (props.defaultValue.map(r => r.rowstate).indexOf(0) < 0) {
                tData = props.defaultValue.concat([{ ...initData }]);
            } else {
                tData = props.defaultValue;
            }

        }

        setData(tData);
    }

    useEffect(() => {
        getExistData();
    }, [props.defaultValue])

    const onEdit = (p_field, p_index, p_value) => {
        let tData = [...data];
        tData[p_index][p_field] = p_value;
        tData[p_index].rowstate = 1;

        setData(tData);
        if (props.onChanged) {
            props.onChanged(tData, '', props.keyfield);
        }
    }

    const onDelete = (p_index) => {
        let tData = [...data];

        tData.splice(p_index, 1);

        setData(tData);
        if (props.onChanged) {
            props.onChanged(tData, '', props.keyfield);
        }
    }

    return (
        <div style={{ marginTop: 16 }}>
            <Stack horizontal>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11 }}>
                        <TextGridHeader value="Төрөл" />
                    </div>
                    {data.map((r, index) => {
                        let vBorder = {
                            borderBottom: '1px solid #EDEBE9'
                        };
                        if (r.rowstate == 0) {
                            vBorder = {};
                        }
                        return (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', paddingTop: 8, paddingBottom: 8, ...vBorder }}>
                                {r.rowstate != 0 ? (
                                    <div onClick={() => onDelete(index)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}><DeleteIcon /></div>
                                ) : (
                                    <div style={{ width: 20, height: 20 }}></div>
                                )}
                                <div style={{ marginLeft: 8, width: '100%' }}>
                                    <FieldComboGrid keyfield='type' index={index} onChanged={onEdit} data={dType} name='Төрөл сонгох' value={r.type} />
                                </div>
                            </div>
                        );
                    })}

                </Stack.Item>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                        <TextGridHeader value="Ажлын байр" />
                    </div>
                    {data.map((r, index) => {
                        let vBorder = {
                            borderBottom: '1px solid #EDEBE9'
                        };
                        if (r.rowstate == 0) {
                            vBorder = {};
                        }
                        return (
                            <div key={index} style={{ paddingTop: 8, paddingBottom: 8, ...vBorder, marginLeft: 16 }}>
                                <FieldComboGrid keyfield='managerpositionid' index={index} onChanged={onEdit} data={dJob} name='Ажлын байр сонгох' value={r.managerpositionid} />
                            </div>
                        );
                    })}
                </Stack.Item>
            </Stack>
        </div>
    );
}

export default GridJob;