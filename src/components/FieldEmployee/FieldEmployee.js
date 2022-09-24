import React, { useState } from 'react';
import { NormalPeoplePicker } from '@fluentui/react';
import { API } from '../../API/API';
import { debounce } from 'lodash';
import { MessageConst } from '../../const/MessageConst';

const FieldEmployee = (props) => {

    const onFilterChagned = async (filterText, currentPersonas, limitResults) => {
        if (filterText) {
            return new Promise((resolve, reject) => setTimeout(async () => {
                let tData = [];
                await API.get("/api/humanresource/employee/get_employee_dropdown?search=" + filterText + "&limit=10").then(response => {
                    if (response.status === 200 && response.data?.rettype === 0) {
                        if (response.data?.retdata?.length > 0) {
                            response.data.retdata.map(r => {
                                tData.push({
                                    key: r.key,
                                    text: r.text,
                                    secondaryText: r.secondarytext,
                                    email: r.email
                                });
                            });
                        }
                    }
                });
                resolve(tData);
            }, 500));
        } else {
            return [];
        }
    };
    const onSelectEmp = (p_value) => {
        if (p_value?.length > 0) {
            props.onChanged(p_value[0].key, p_value[0].secondaryText, props.keyfield, p_value[0].email);
        }
    }

    return (
        <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{props.title}</div>
            <div style={{ marginTop: 6 }}>
                <NormalPeoplePicker
                    onResolveSuggestions={onFilterChagned}
                    className={'ms-PeoplePicker'}
                    key={'normal'}
                    itemLimit={1}
                    onChange={onSelectEmp}
                    className={'ms-PeoplePicker'}
                    resolveDelay={300}
                />
                {(props.required && !props.defaultValue && props.checkreq) ? (
                    <div style={{ color: 'rgb(164, 38, 44)', fontSize: 12, fontWeight: 400, paddingTop: 5 }}>
                        {props.title + MessageConst.fieldRequired}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FieldEmployee;