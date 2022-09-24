import React, { useState, useEffect, useContext } from 'react';
import { Stack } from '@fluentui/react';
import TextGridHeader from '../TextGridHeader/TextGridHeader';
import FieldComboGrid from '../FieldComboGrid/FieldComboGrid';
import { API } from '../../API/API';
import { ReactComponent as DeleteIcon } from '../../svg/deleteIcon.svg';
import { showLoadScreen, hideLoadScreen } from '../LoadScreen/LoadScreen';
import { constData } from '../../const/Const';
import FieldTextGrid from '../FieldTextGrid/FieldTextGrid';

const GridBasis = (props) => {


    const [initData, setInitData] = useState(
        {
            basisid: null,
            name: null,
            note: null,
            rowstate: 0
        }
    );

    const [data, setData] = useState([{ ...initData }]);
    const [dBasis, setDBasis] = useState([]);

    const getData = async () => {
        let tDBasis = [];
        if (props.data) {
            await API.post('/api/humanresource/employment/get_basis_dropdown', props.data).then(response => {
                if (response.status == 200 && response.data.rettype == 0) {
                    tDBasis = response.data.retdata;
                }
            });
        }
        setDBasis(tDBasis);
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

        if (p_field == "basisid") {
            let eIndex = dBasis.map(r => r.key).indexOf(p_value);
            if (eIndex >= 0) {
                tData[p_index]["note"] = dBasis[eIndex].note;
            }
        }

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
        <div>
            <div style={{ fontSize: 18 }}>
                Үндэслэл
            </div>
            <div style={{ marginTop: 16 }}>
                <Stack horizontal>
                    <Stack.Item grow>
                        <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11 }}>
                            <TextGridHeader value="Хуулийн заалт" />
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
                                        <FieldComboGrid keyfield='basisid' index={index} onChanged={onEdit} data={dBasis} name='Хуулийн заалт сонгох' value={r.basisid} />
                                    </div>
                                </div>
                            );
                        })}

                    </Stack.Item>
                    <Stack.Item grow>
                        <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                            <TextGridHeader value="Хуулийн заалтын өгүүлбэр" />
                        </div>
                        {data.map((r, index) => {
                            let vBorder = {
                                borderBottom: '1px solid #EDEBE9'
                            };
                            if (r.rowstate == 0) {
                                vBorder = {};
                            }
                            return (
                                <div key={index} style={{ paddingTop: 8, paddingBottom: 8, ...vBorder }}>
                                    <FieldTextGrid disable={true} keyfield='note' index={index} onChanged={onEdit} name='Ажлын байр сонгох' value={r.note} />
                                </div>
                            );
                        })}
                    </Stack.Item>
                </Stack>
            </div>
        </div>
    );
}

export default GridBasis;