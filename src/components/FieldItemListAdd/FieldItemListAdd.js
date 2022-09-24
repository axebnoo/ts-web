import React, { useState, useEffect } from 'react';
import { Shimmer, TagPicker } from '@fluentui/react';
import { Color } from '../../const/Const';
import { API } from '../../API/API';
import { MessageConst } from '../../const/MessageConst';
import { ReactComponent as PlusIcon } from '../../svg/plusIcon.svg';
import { getRecent, setRecent } from '../../SharedFunc/Recent';

const FieldItemListAdd = (props) => {

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

        return tData.concat({ key: "newItem", name: '"' + p_filterText + '" утгыг нэмэх', isNewItem: true, newValue: p_filterText });
    }

    const onChange = async (item) => {
        let tItem = item;

        if (item && item?.length > 0 && item[0].isNewItem && item[0].newValue) {
            let tParam = {
                name: item[0].newValue
            };

            if (props.saveparam?.length > 0) {
                props.saveparam.map(r => {
                    tParam[r.key] = r.name;
                });
            }

            await API.post(props.saveurl, [
                tParam
            ]).then(response => {
                if (response.status == 200 && response.data.rettype == 0) {
                    tItem = response.data.retdata;
                }
            });
        }

        setValue(tItem);
        if (tItem?.length > 0 && tItem[0].key != "newItem") {
            props.onChanged(tItem[0].key, tItem[0].text, props.keyfield, props.keyfieldname);
            setRecent(props.keyfield, tItem[0].key);
        } else {
            props.onChanged(null, null, props.keyfield);
        }
    };

    const onEmptyInputFocus = async () => {

        let tRecent = getRecent(props.keyfield);

        let tRule = true;
        let tParam = ["lfr=true"];

        if (props.dataparam?.length > 0) {
            props.dataparam.map(r => {
                tParam.push(r.key + '=' + r.name);
                if (!r.name) {
                    tRule = false;
                }
            });
        }

        if (tRecent?.length > 0) {
            tRecent.map(r => {
                tParam.push("ids=" + r);
            });
        }

        let tData = [];
        if (tRule) {
            await API.get(props.dataurl + (tParam?.length > 0 ? ("?" + tParam.join("&")) : "")).then(response => {
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
                        onEmptyInputFocus={onEmptyInputFocus}
                        onResolveSuggestions={filterSuggested}
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
                        onRenderSuggestionsItem={(p_props, p_item_props) => {
                            if (p_props.isNewItem) {
                                return (
                                    <div style={{ display: 'flex', backgroundColor: '#F7F7F7', width: '100% ', alignItems: 'center' }}>
                                        <div style={{ marginLeft: 12 }}>
                                            <PlusIcon />
                                        </div>
                                        <div style={{ margin: '6px 12px' }}>{p_props.name}</div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div style={{ margin: '6px 12px' }}>{p_props.name}</div>
                                );
                            }
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

export default FieldItemListAdd;