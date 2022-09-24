import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Login from './page/Login/Login';
import HRSuite from './page/HRSuite/HRSuite';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { LoadScreen } from './components/LoadScreen/LoadScreen';
import { UserContext } from './context/UserContext';
import Header from './page/Layout/Header/Header';
import Employee from './page/HRSuite/Employee/Employee';
import BasicInformation from './page/HRSuite/BasicInformation/BasicInformation';
import NotFound from './page/Shared/NotFound';
import Settings from './page/OrganizationSettings/Settings';
import { ReactComponent as CopyRightIcon } from './svg/copyRight.svg';
import PasswordChange from './page/PasswordChange/PasswordChange';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Feedback from './page/Feedback/Feedback';
import FeedbackArrived from './page/Feedback/Arrived/Edit/ArrivedEdit';
import Accident from './page/Accident/Accident';
import ArrivedAccident from './page/Accident/ArrivedAccident/Edit/ArrivedAccidentEdit';
import Training from './page/Training/Training';
import TrainingEdit from './page/Training/Edit/TrainingEdit';

function App() {
  initializeIcons();

  const [userInfo, setUserInfo] = useState({});
  const setUser = (p_userid, p_token, p_companyid, p_isauth, p_companyname, p_permissions) => {

    localStorage.setItem('userInfo', JSON.stringify({
      userid: p_userid,
      token: p_token,
      companyid: p_companyid,
      isauth: p_isauth,
      companyname: p_companyname,
      permissions: p_permissions
    }));

    setUserInfo({
      userid: p_userid,
      token: p_token,
      companyid: p_companyid,
      isauth: p_isauth,
      companyname: p_companyname,
      permissions: p_permissions
    });
  }

  const getUserData = () => {
    let userInfoResp = localStorage.getItem('userInfo');
    let userInfo = {};
    if (userInfoResp) {
      userInfo = JSON.parse(userInfoResp);
      setUserInfo({ ...userInfo });
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUser }}>
      <Router>
        {userInfo.isauth ? (
          <div>
            <Header />
            <Switch>
              <Route path='/hrsuite/employee/:empid'>
                <Employee />
              </Route>
              <Route path="/hrsuite">
                <HRSuite />
              </Route>
              <Route path='/basicinformation/:empid'>
                <BasicInformation />
              </Route>
              <Route path='/settings'>
                <Settings />
              </Route>
              <Route path='/change'>
                <PasswordChange />
              </Route>
              <Route path='/feedback/:id'>
                <FeedbackArrived />
              </Route>
              <Route path='/feedback'>
                <Feedback />
              </Route>
              <Route path='/accident/:id'>
                <ArrivedAccident />
              </Route>
              <Route path='/accident'>
                <Accident />
              </Route>
              <Route path='/training/:id'>
                <TrainingEdit />
              </Route>
              <Route path='/training'>
                <Training />
              </Route>
              <Route exact path="/">
                <Redirect to="/hrsuite" />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <div>
              <MessengerCustomerChat
                pageId="103477292171409"
                appId="619049369336605"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: 16 }}>
              <CopyRightIcon />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </Router>

      <LoadScreen />
    </UserContext.Provider>
  );
}

export default App;
