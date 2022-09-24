import React from 'react';
import { Spinner, SpinnerSize } from '@fluentui/react';
import './LoadScreen.css';

export const LoadScreen = () => {
    return <div className='loadScreen'>
        <div className='loadScreenSpin'>
            <Spinner size={SpinnerSize.large} />
        </div>
    </div>
};

export const showLoadScreen = () => {
    if (document.getElementsByClassName('loadScreen').length > 0) {
        document.getElementsByClassName('loadScreen')[0].style = 'display:block';
    }
}

export const hideLoadScreen = () => {
    if (document.getElementsByClassName('loadScreen').length > 0) {
        document.getElementsByClassName('loadScreen')[0].style = 'display:none';
    }
}