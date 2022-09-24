import React, { useState, useEffect } from 'react';
import { Color, ConstCss } from '../../const/Const';
import PageTitle from '../PageTitle/PageTitle';
import { ReactComponent as Divider } from '../../svg/verticalDividerGray.svg';
import PageFilter from '../PageFilter/PageFilter';
import FieldFilter from '../FieldFilter/FieldFilter';
import FieldFreeze from '../FieldFreeze/FieldFreeze';
import FieldExcel from '../FieldExcel/FieldExcel';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import ButtonBorder from '../ButtonBorder/ButtonBorder';
import ReactExport from "react-export-excel";
import moment from 'moment';
import SearchIcon from '../../svg/IconClass/SearchIcon';
import { TextField } from '@fluentui/react';
import { debounce } from 'lodash';
import ExitIcon from '../../svg/IconClass/ExitIcon';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const PageHeader = (props) => {

    const [vsysdate, setVSysdate] = useState(moment().format('YYYY.MM.DD hh:mm:ss').toString());
    const [showFilter, setShowFilter] = useState(false);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState(props.columns ? props.columns : []);
    const [filterInit, setFilterInit] = useState([]);

    const onSearch = debounce((p_value) => {
        let filteredData = [...data];
        if (p_value?.target?.value && data?.length > 0) {
            filteredData = data?.filter(r => {
                let tValue = Object.keys(r).map(key => {
                    return r[key];
                })?.join('')?.toLowerCase();

                if (tValue?.indexOf(p_value?.target?.value?.toLowerCase()) >= 0) {
                    return true;
                } else {
                    return false;
                }
            });
        }

        if (props.onSearch) {
            props.onSearch(filteredData);
        }

    }, 1000);

    const onChangeFilter = () => {
        let filteredData = [...data];
        if (props.onSearch) {
            props.onSearch(filteredData);
        }
        setShowFilter(r => !r);
    }

    useEffect(() => {
        let tData = [];
        if (props.data) {
            tData = props.data;
        }
        setData(tData);

        let tFilterCol = props.columns?.filter(r => r.filter == true);
        if (tFilterCol?.length > 0) {
            let tFilterInit = [];

            setFilterInit(tFilterInit);
        }

    }, [props.data]);

    return (
        <div>
            <div style={{
                height: 50,
                width: '100%',
                backgroundColor: Color.grayBackground,
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16
            }}>
                <div style={{ ...ConstCss.flexCenter }}>

                    {!props.showLeftFilter && (
                        <div style={{ marginRight: 16 }}>
                            <PageTitle>{props.title}</PageTitle>
                        </div>
                    )}
                    {props.showLeftFilter && (
                        <div style={{ marginRight: 16 }}>
                            <PageFilter onChange={props.changeFilter} value={props.filterValue} data={props.filterData} dataCount={props.dataCount} />
                        </div>
                    )}
                    <div style={{ height: 28 }}>
                        <Divider />
                    </div>
                    <div style={{ marginLeft: 16 }}>
                        {props.buttonTitle && (<ButtonIcon text={props.buttonTitle} iconName='Add' onClick={props.onButtonClick} />)}
                    </div>
                    {props.addButton && (
                        <div style={{ marginLeft: 16 }}>
                            {props.addButton}
                        </div>
                    )}
                </div>
                <div style={{ ...ConstCss.flexCenter }}>
                    {props.addRightButton ? (props.addRightButton) : null}
                    {props.data ? (
                        <>
                            <div onClick={onChangeFilter} style={{ marginLeft: 8 }}>
                                <FieldFilter />
                            </div>
                            <div style={{ marginLeft: 16 }}>
                                <ExcelFile filename={vsysdate} element={<FieldExcel />}>
                                    <ExcelSheet data={props.data} name="Page1">
                                        {props.columns?.map(r => {
                                            return (
                                                <ExcelColumn label={r.name} value={r.fieldName} widthPx={200} />
                                            );
                                        })}
                                    </ExcelSheet>
                                </ExcelFile>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
            {showFilter ? (
                <div style={{
                    height: 50,
                    width: '100%',
                    backgroundColor: Color.grayHeaderBack,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 16,
                    paddingRight: 16
                }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <SearchIcon />
                        <TextField onChange={onSearch} style={{ backgroundColor: Color.grayHeaderBack, minWidth: 400 }} borderless placeholder="Хайх..." />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div onClick={onChangeFilter} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <ExitIcon />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
export default PageHeader;