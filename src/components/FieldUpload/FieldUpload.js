import React, { useEffect, useState } from 'react';
import Upload from 'rc-upload/lib/Upload';
import axios from 'axios';
import { baseConfig } from '../../API/APIConfig';
import { message } from 'antd';
import { Color, uploadFileFormat } from '../../const/Const';
import { ReactComponent as UploadIcon } from '../../svg/uploadIcon.svg';
import { ReactComponent as DownloadIcon } from '../../svg/downloadIcon.svg';
import { ReactComponent as FileDeleteIcon } from '../../svg/fileDeleteIcon.svg';
import { API } from '../../API/API';
import FileDownload from 'js-file-download';
import { MessageConst } from '../../const/MessageConst';
import { ProgressIndicator } from '@fluentui/react';

const FieldUpload = (props) => {

    const [token, setToken] = useState();
    const [warning, setWarning] = useState();
    const [loading, setLoading] = useState(false);

    useState(() => {
        let tToken = '';
        let userInfoResp = localStorage.getItem('userInfo');
        let userInfo = {};
        if (userInfoResp) {
            userInfo = JSON.parse(userInfoResp);
            if (userInfo.token) {
                tToken = userInfo.token;
            }
        }
        setToken(tToken);
    }, []);

    const uploadProps = {
        action: '/api/shared/file/upload?SourceType=' + props.keyfield,
        multiple: false,
        data: {},
        headers: {
            Authorization: `Bearer ${token}`,
        },
        onStart(file) {
            setLoading(true);
        },
        onSuccess(res, file) {
            setLoading(false);
            if (res.rettype == 0 && res?.retdata?.length > 0 && res?.retdata[0].newid) {
                props.onChanged({ id: res?.retdata[0].newid, filename: res?.retdata[0].filename }, file.filename, props.keyfield);
            } else {
                message.error(res.retmsg);
            }
        },
        onError(err) {
            setLoading(false);
            message.error('onError', err);
        },
        onProgress({ percent }, file) {

        },
        customRequest({
            action,
            data,
            file,
            filename,
            headers,
            onError,
            onProgress,
            onSuccess,
            withCredentials,
        }) {

            setWarning();
            let vCheck = true;
            let fileExt = file?.name?.split('.').pop();

            if (uploadFileFormat.map(r => r.filetype).indexOf("." + fileExt?.toString()) < 0) {
                vCheck = false;
                setWarning("Зөвшөөрөгдсөн файлын төрөл биш байна.");
            }

            if (props.filetype && props.filetype != fileExt) {
                vCheck = false;
                setWarning("Зөвхөн " + props.filetype + " файл оруулах боломжтой.");
            }

            if (vCheck) {
                // eslint-disable-next-line no-undef
                const formData = new FormData();
                formData.append(filename, file);

                axios.post(action, formData, {
                    withCredentials,
                    headers,
                    baseURL: baseConfig.baseurl,
                    onUploadProgress: ({ total, loaded }) => {
                        onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file);
                    },
                }).then(({ data: response }) => {
                    onSuccess(response, file);
                }).catch(onError);
            } else {
                setLoading(false);
            }

            return {
                abort() {

                },
            };
        },
    };

    let vColor = { fontWeight: 600 };
    if (props.gray) {
        vColor = {
            color: Color.graySecond,
            fontWeight: 400
        };
    }

    const onDownload = async () => {
        if (props?.defaultValue?.id) {
            await API.get('/api/shared/file/download?ID=' + props?.defaultValue?.id, {
                'responseType': 'blob'
            }).then(response => {
                if (response.status == 200) {
                    FileDownload(response.data, props?.defaultValue?.filename);
                }
            });
        }
    }

    const onDelete = async () => {
        if (props?.defaultValue?.id) {
            await API.post('/api/shared/file/delete?ID=' + props?.defaultValue?.id).then(response => {
                if (response.status == 200) {
                    props.onChanged(null, '', props.keyfield);
                }
            });
        }
    }

    if (loading) {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <div style={{ fontSize: 14, ...vColor }}>{props.title}</div>{props.required && (<div style={{ color: Color.red }}>*</div>)}
                </div>
                <ProgressIndicator />
            </div>
        );
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ fontSize: 14, ...vColor }}>{props.title}</div>{props.required && (<div style={{ color: Color.red }}>*</div>)}
            </div>
            {props?.defaultValue?.filename ? (
                <div style={{ marginTop: 6, height: 30, border: '1px solid #DDDDDD', display: 'flex', alignItems: 'center', paddingLeft: 16, justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <div style={{ marginRight: 8, height: 20 }}>
                            <DownloadIcon />
                        </div>
                        <div onClick={onDownload} style={{ fontSize: 14, color: Color.blue }}>{props?.defaultValue?.filename}</div>
                    </div>
                    <div onClick={onDelete} style={{ marginRight: 16, cursor: 'pointer' }}>
                        <FileDeleteIcon />
                    </div>
                </div>
            ) : (
                <div style={{ marginTop: 6, height: 30, border: '1px solid #DDDDDD', display: 'flex', alignItems: 'center', paddingLeft: 16 }}>
                    <div style={{ marginRight: 8, height: 20 }}>
                        <UploadIcon />
                    </div>
                    <Upload
                        {...uploadProps}
                        accept={props.filetype ? ("." + props.filetype) : ("*")}
                    >
                        <div style={{ fontSize: 14, color: Color.blue, cursor: 'pointer' }}>Энд дарж оруулна уу.</div>
                    </Upload>
                </div>
            )}
            {warning ? (
                <div style={{ color: 'rgb(164, 38, 44)', fontSize: 12, fontWeight: 400, paddingTop: 5 }}>
                    {warning}
                </div>
            ) : null}
        </div >
    );
}

export default FieldUpload;