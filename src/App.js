import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import { Main } from './components/Main/Main';
import { LoginPage } from './components/LoginPage/LoginPage';
import { LogoutPage } from './components/LogoutPage/LogoutPage';
import { TrainerLoginPage } from './components/TrainerLoginPage/TrainerLoginPage';
import { CustomerLoginPage } from './components/CustomerLoginPage/CustomerLoginPage';
import { TrDashboard } from './components/TrDashboard/TrDashboard';
import { CsDashboard } from './components/Cs Dashboard/CsDashboard';
import {useEffect} from 'react';
import { gapi } from 'gapi-script';

const clientId = '763923841073-0b529ug54trhi229rughqbfq67a1g24n.apps.googleusercontent.com';



function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })

  return (
    <>
<Routes>
    <Route path='/' element={<><Header/><Main/></>}/>
    <Route path='/loginPage' element={<><LoginPage/><LogoutPage/></>}/>
    <Route path='/trainerloginpage' element={<><TrainerLoginPage/></>}/>
    <Route path='/customerloginpage' element={<><CustomerLoginPage/></>}/>
    <Route path='/trdashboard' element={<><TrDashboard/></>}/>
    <Route path='/Csdashboard' element={<><CsDashboard/></>}/>
 
  </Routes>
    </>
  );
}

export default App;
