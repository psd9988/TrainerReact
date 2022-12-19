import './LoginPage.css';
import GoogleLogin from 'react-google-login';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const clientId = '763923841073-0b529ug54trhi229rughqbfq67a1g24n.apps.googleusercontent.com';


export function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation()  


  const onSuccess = (result) => {
    if(location.pathname == '/trainerloginpage'){

      dispatch({
        'type':'loggedInUser',
        'payload': {
          fullName:result.profileObj.name,
          firstName:result.profileObj.givenName,
          mainId:result.profileObj.googleId,
          email:result.profileObj.email
        }
      });
      navigate('/trdashboard');
    }else if(location.pathname == '/customerloginpage'){
      dispatch({
        'type':'loggedInUser',
        'payload': {
          fullName:result.profileObj.name,
          firstName:result.profileObj.givenName,
          mainId:result.profileObj.googleId
        }
      });
      navigate('/csdashboard')
    }
    console.log(result.profileObj);
  }

  const onFailure = (result) => {
    console.log(result)
  }

 
  return (
    <div id='signInButton'>
      <GoogleLogin
      clientId={clientId}
      buttonText='Login with Google'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      >

      </GoogleLogin>
    </div>
  );
}

