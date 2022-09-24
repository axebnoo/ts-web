import React, { useState, useEffect } from 'react';
import { Shimmer, TagPicker } from '@fluentui/react';
import { Color } from '../../const/Const';
import { API } from '../../API/API';
import { MessageConst } from '../../const/MessageConst';

const FieldItemList = (props) => {

    const [value, setValue] = useState([]);
    const [lastSearchValue, setLastSearchValue] = useState();

    useEffect(() => {
        setValue((props?.defaultValue?.length > 0 && props?.defaultValue[0].key && props?.defaultValue[0].name) ? props.defaultValue : []);
    }, [props.defaultValue]);

    let vColor = { fontWeight: 600 };
    if (props.gray) {
        vColor = {
            color: Color.graySecond,
            fontWeight: 400
        };
    }

    const filterSuggested = async (p_filterText, p_list) => {
        let tRule = true;
        let tData = [];
        setLastSearchValue(p_filterText);

        let tParam = ['search=' + p_filterText];

        if (props.dataparam?.length > 0) {
            props.dataparam.map(r => {
                tParam.push(r.key + '=' + r.name);
                if (!r.name) {
                    tRule = false;
                }
            });
        }

        if (tRule) {
            await API.get(props.dataurl + "?" + tParam.join("&")).then(response => {
                if (response.status == 200 && response.data.rettype == 0) {
                    if (response.data.retdata?.length > 0) {
                        tData = response.data.retdata;
                        tData.map(r => {
                            r.name = r.text
                        });
                    }
                }
            });
        }

        return tData;
    }

    const onEmptyInputFocus = async () => {
        let tRule = true;
        let tData = [];

        let tParam = ["lfr=true"];

        if (props.dataparam?.length > 0) {
            props.dataparam.map(r => {
                tParam.push(r.key + '=' + r.name);
                if (!r.name) {
                    tRule = false;
                }
            });
        }

        if (tRule) {
            await API.get(props.dataurl + "?" + tParam.join("&")).then(response => {
                if (response.status == 200 && response.data.rettype == 0) {
                    if (response.data.retdata?.length > 0) {
                        tData = response.data.retdata;
                        tData.map(r => {
                            r.name = r.text
                        });
                    }
                }
            });
        }

        return tData;
    }

    const onChange = (item) => {
        setValue(item);
        if (item?.length > 0) {
            props.onChanged(item[0].key, item[0].text, props.keyfield, props.keyfieldname);
        } else {
            props.onChanged(null, null, props.keyfield);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ fontSize: 14, ...vColor }}>{props.title}</div>{props.required && (<div style={{ color: Color.red }}>*</div>)}
            </div>
            <div style={{ marginTop: 6 }}>
                {props.loading ? (
                    <div>
                        <Shimmer />
                        <Shimmer />
                    </div>
                ) : (
                    <TagPicker
                        styles={{
                            root: {
                                backgroundColor: Color.white
                            }
                        }}
                        disabled={props.disable == true ? true : false}
                        onResolveSuggestions={filterSuggested}
                        onEmptyInputFocus={onEmptyInputFocus}
                        resolveDelay={1000}
                        itemLimit={1}
                        selectedItems={value}
                        onChange={onChange}
                        pickerSuggestionsProps={{
                            suggestionsHeaderText: '"' + (lastSearchValue ? lastSearchValue : '') + '"-н бүх утгыг харах',
                            noResultsFoundText: 'Харуулах мэдээлэлгүй байна',
                        }}
                        inputProps={{
                            placeholder: 'Хайх утгаа бичнэ үү'
                        }}
                    />
                )}
            </div>
            {(props.required && !(props?.defaultValue?.length > 0 && props?.defaultValue[0].key) && props.checkreq) ? (
                <div style={{ color: 'rgb(164, 38, 44)', fontSize: 12, fontWeight: 400, paddingTop: 5 }}>
                    {props.title + MessageConst.fieldRequired}
                </div>
            ) : null}
        </div>
    );
}

export default FieldItemList;