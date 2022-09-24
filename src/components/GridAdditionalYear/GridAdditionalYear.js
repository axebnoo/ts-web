import React, { useState, useEffect, useContext } from 'react';
import { Stack } from '@fluentui/react';
import TextGridHeader from '../TextGridHeader/TextGridHeader';
import FieldComboGrid from '../FieldComboGrid/FieldComboGrid';
import { API } from '../../API/API';
import { ReactComponent as DeleteIcon } from '../../svg/deleteIcon.svg';
import { showLoadScreen, hideLoadScreen } from '../LoadScreen/LoadScreen';
import { constData } from '../../const/Const';
import FieldTextGrid from '../FieldTextGrid/FieldTextGrid';

const GridAdditionalYear = (props) => {

    const [initData, setInitData] = useState(
        {
            extracalcid: 0,
            extraid: 0,
            minyear: null,
            maxyear: null,
            percent: null,
            rowstate: 0
        }
    );

    const [data, setData] = useState([{ ...initData }]);

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
    }, [props.defaultValue]);

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
        <div>
            <div style={{ fontSize: 18 }}>
                Ажилласан жил, нэмэгдлийн хэмжээ
            </div>
            <div style={{ marginTop: 16 }}>
                <Stack horizontal>
                    <Stack.Item grow>
                        <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11 }}>
                            <TextGridHeader value="Доод жил" />
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
                                        <FieldTextGrid keyfield='minyear' index={index} onChanged={onEdit} name='Доод жил' value={r.minyear} />
                                    </div>
                                </div>
                            );
                        })}

                    </Stack.Item>
                    <Stack.Item grow>
                        <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                            <TextGridHeader value="Дээд жил" />
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
                                    <FieldTextGrid keyfield='maxyear' index={index} onChanged={onEdit} name='Дээд жил' value={r.maxyear} />
                                </div>
                            );
                        })}
                    </Stack.Item>
                    <Stack.Item grow>
                        <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                            <TextGridHeader value="Хувь" />
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
                                    <FieldTextGrid keyfield='percent' index={index} onChanged={onEdit} name='Хувь' value={r.percent} />
                                </div>
                            );
                        })}
                    </Stack.Item>
                </Stack>
            </div>
        </div>
    );
}

export default GridAdditionalYear;