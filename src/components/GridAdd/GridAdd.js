import React, { useState, useEffect } from 'react';
import { Color } from '../../const/Const';
import { ReactComponent as VerticalDivider } from '../../svg/verticalDividerGray.svg';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import GridDefault from '../GridDefault/GridDefault';

const GridAdd = (props) => {

    const [data, setData] = useState([]);

    const getData = () => {
        let tData = [];
        if (props.data) {
            tData = props.data;
        }
        setData(tData);
    }

    useEffect(() => {
        getData();
    }, [props.data]);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ fontSize: 20 }}>{props.title}</div>
                <div style={{ fontSize: 14, color: Color.grayText, marginTop: 4, marginLeft: 8 }}>
                    {props.description ? ("/" + props.description + "/") : ""}
                </div>
                <div style={{ height: 28, marginLeft: 16, marginRight: 16 }}>
                    <VerticalDivider />
                </div>
                <div>
                    <ButtonIcon onClick={props.onNew} text="Нэмэх" iconName="Add" />
                </div>
            </div>
            <div style={{ marginTop: 24 }}>
                <GridDefault
                    columns={props.columns ? props.columns : []}
                    data={data}
                />
            </div>
        </div>
    );
}

export default GridAdd;