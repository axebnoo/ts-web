import React, { useState } from 'react';
import { Steps } from 'antd';

const { Step } = Steps;
const PageStep = (props) => {
    return (
        <div style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15), inset 0px -1px 0px rgba(217, 217, 217, 0.25)', paddingLeft: 16, paddingRight: 16, paddingBottom: 16 }}>
            <div>
                <div style={{ marginTop: 12, marginBottom: 12, fontSize: 20 }}>
                    {props.title} | №{props.id}
                </div>
            </div>
            <div style={{ marginTop: 4 }}>
                <Steps current={props.currentStep ? props.currentStep : 0}>
                    {props.steps?.map(r => (
                        <Step key={r.title} title={r.title} />
                    ))}
                </Steps>
            </div>
        </div>
    );
}
export default PageStep;