import React, { useState, useEffect, useContext } from 'react';
import { Stack } from '@fluentui/react';
import TextGridHeader from '../TextGridHeader/TextGridHeader';
import FieldComboGrid from '../FieldComboGrid/FieldComboGrid';
import { API } from '../../API/API';
import { ReactComponent as DeleteIcon } from '../../svg/deleteIcon.svg';
import { showLoadScreen, hideLoadScreen } from '../LoadScreen/LoadScreen';
import { constData } from '../../const/Const';
import FieldTextGrid from '../FieldTextGrid/FieldTextGrid';
import FieldNumberGrid from '../FieldNumberGrid/FieldNumberGrid';

const GridSalarySchemaDtl = (props) => {

    const [data, setData] = useState([]);

    const getExistData = () => {
        let tData = [];
        if (props?.defaultValue?.length > 0) {
            tData = props.defaultValue;
        }
        setData(tData);
    }

    useEffect(() => {
        getExistData();
    }, [props.defaultValue]);

    const onEdit = (p_field, p_index, p_value) => {
        let tData = [...data];
        tData[p_index][p_field] = p_value;

        setData(tData);
        if (props.onChanged) {
            props.onChanged(tData, '', props.keyfield);
        }
    }

    return (
        <div style={{ marginTop: 26 }}>
            <Stack horizontal>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11 }}>
                        <TextGridHeader value="Код" />
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
                                <div style={{ marginLeft: 8, width: '100%' }}>
                                    <FieldTextGrid disable={true} keyfield='code' index={index} onChanged={onEdit} name='Код' value={r.code} />
                                </div>
                            </div>
                        );
                    })}

                </Stack.Item>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                        <TextGridHeader value="Зэрэглэл" />
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
                                <FieldTextGrid disable={true} keyfield='name' index={index} onChanged={onEdit} name='Зэрэглэл' value={r.name} />
                            </div>
                        );
                    })}
                </Stack.Item>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                        <TextGridHeader value="Шатлал 1" />
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
                                <FieldNumberGrid keyfield='l1salary' index={index} onChanged={onEdit} name='Шатлал 1' value={r.l1salary} />
                            </div>
                        );
                    })}
                </Stack.Item>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                        <TextGridHeader value="Шатлал 2" />
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
                                <FieldNumberGrid keyfield='l2salary' index={index} onChanged={onEdit} name='Шатлал 2' value={r.l2salary} />
                            </div>
                        );
                    })}
                </Stack.Item>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                        <TextGridHeader value="Шатлал 3" />
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
                                <FieldNumberGrid keyfield='l3salary' index={index} onChanged={onEdit} name='Шатлал 3' value={r.l3salary} />
                            </div>
                        );
                    })}
                </Stack.Item>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                        <TextGridHeader value="Шатлал 4" />
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
                                <FieldNumberGrid keyfield='l4salary' index={index} onChanged={onEdit} name='Шатлал 4' value={r.l4salary} />
                            </div>
                        );
                    })}
                </Stack.Item>
                <Stack.Item grow>
                    <div style={{ borderBottom: '1px solid #EDEBE9', paddingBottom: 11, paddingLeft: 16 }}>
                        <TextGridHeader value="Шатлал 5" />
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
                                <FieldNumberGrid keyfield='l5salary' index={index} onChanged={onEdit} name='Шатлал 5' value={r.l5salary} />
                            </div>
                        );
                    })}
                </Stack.Item>
            </Stack>
        </div>
    );
}

export default GridSalarySchemaDtl;