import React, { useState, useEffect } from 'react';
import { Color, ConstCss } from '../../const/Const';
import { ReactComponent as DropdownIcon } from '../../svg/dropdownLine.svg';
import { Dropdown, Menu } from 'antd';

const PageFilter = (props) => {

    const [displayValue, setDisplayValue] = useState();

    const onChange = (value) => {
        let eIndex = props?.data?.map(r => r.key).indexOf(value.key);
        if (eIndex >= 0 && props.onChange) {
            props.onChange(value.key, props.data[eIndex].text);
        }
    }

    let menuComp = null;
    if (props.data) {
        menuComp = (
            <Menu onClick={onChange}>
                {props.data.map(r => {
                    if (r.divider) {
                        return (
                            <>
                                <Menu.Item key={r.key}>{r.text} {r.description && (<div style={{ fontSize: 12, color: Color.gray }}>{r.description}</div>)}</Menu.Item>
                                {r.divider && (<Menu.Divider />)}
                            </>
                        );
                    } else {
                        return (
                            <Menu.Item key={r.key}>{r.text} {r.description && (<div style={{ fontSize: 12, color: Color.gray }}>{r.description}</div>)}</Menu.Item>
                        );
                    }
                })}
            </Menu>
        )
    }

    useEffect(() => {
        let tDisplayValue = null;
        if (props?.value && props?.data?.length > 0) {
            let tIndex = props.data.map(r => r.key).indexOf(props.value);
            if (tIndex >= 0) {
                tDisplayValue = props.data[tIndex].text;
            }
        }
        setDisplayValue(tDisplayValue);
    }, [props.value])
    return (
        <Dropdown overlay={menuComp} trigger={['click']}>
            <div style={{ ...ConstCss.flexCenter, cursor: 'pointer' }}>
                <div style={{ fontSize: 20, color: Color.black }}>
                    {displayValue} {props.dataCount ? `(${props.dataCount})`: null}
                </div>
                <div style={{ marginTop: 11, marginLeft: 8 }}>
                    <DropdownIcon />
                </div>
            </div>
        </Dropdown>
    );
}

export default PageFilter;