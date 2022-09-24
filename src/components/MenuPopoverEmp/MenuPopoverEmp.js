import React, { useState, useEffect } from 'react';
import { Color } from '../../const/Const';
import { Dropdown, Menu } from 'antd';
import { Persona, PersonaSize } from '@fluentui/react';
import { withRouter } from 'react-router';

const MenuPopoverEmp = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        let tData = [];

        if (props?.data?.length > 0) {
            tData = props.data;
        }
        setData(tData);

    }, [props.data]);

    const onSelectEmp = (p_value) => {
        props.history.push('/hrsuite/employee/' + p_value.key);
    }

    let menuComp = null;
    if (data?.length > 0) {
        menuComp = (
            <Menu onClick={onSelectEmp}>
                {data.map((r, index) => {

                    let vBorderBottom = {};
                    if (index + 1 != data.length) {
                        vBorderBottom = {
                            borderBottom: '0.5px solid #DEDEDE'
                        };
                    }

                    return (
                        <Menu.Item style={{ ...vBorderBottom }} key={r.key}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div>
                                    <Persona hidePersonaDetails text={r.text} size={PersonaSize.size32} />
                                </div>
                                <div style={{ marginLeft: 8 }}>
                                    <div style={{ fontSize: 14 }}>
                                        {r.text}
                                    </div>
                                    <div style={{ fontSize: 12, color: Color.grayText }}>
                                        {r.secondarytext}
                                    </div>
                                </div>
                            </div>
                        </Menu.Item>
                    );
                })
                }
            </Menu >)
    }

    return (
        <span>
            {data?.length > 0 && (
                <Dropdown overlay={menuComp} trigger={['click']}>
                    <span style={{ fontSize: 14, color: Color.blue }}>({data?.length})</span>
                </Dropdown>
            )}
        </span>
    );
}

export default withRouter(MenuPopoverEmp);