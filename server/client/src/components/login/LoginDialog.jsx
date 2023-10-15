import { Dialog, Box, styled, TextField, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const InitialSignUpData = {
  username: '',
  email: '',
  password: '',
};

const InitialLoginData = {
  username: '',
  password: '',
};

const LoginDialog = ({ open, setOpen }) => {
  const [Error, SetError] = useState({});
  const [showErr, SetShowErr] = useState(false);
  const [SignErr, SetSignErr] = useState({});
  const [UserExists, SetUserExsists] = useState(false);

  const [signup, setSignup] = useState(InitialSignUpData);
  const [login, setLogin] = useState(InitialLoginData);
  const [isSign, SetisSign] = useState(false);
  const { setAccount } = useContext(DataContext);
  const [red, SetRed] = useState(false);
  const [logClick, SetLogClick] = useState(false);

  const LeftChange = () => {
    setSignup('');
    console.log(signup);
    SetisSign(true);
    SetError('');
    setLogin('');
  };

  const ChangeToSignUp = () => {
    SetisSign(false);
  }

  const HandleClose = () => {
    setOpen(false);
    SetisSign(false);
    SetShowErr(false);
    SetError('');
    SetLogClick(false);
    SetUserExsists(false);
  };

  const InputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
    SetUserExsists(false);
  };

  const SignValidate = () => {
    const error = {};
    if (!signup.username) {
      error.username = 'Username is required';
    }
    if (!signup.email) {
      error.email = 'Email is required';
    }
    if (!signup.password) {
      error.password = 'Password is required';
    }
    return error;
  }

  const SubmitTo = async () => {
    const errors = SignValidate();
    SetError(errors);
    try {
      const response = await authenticateSignup(signup);
      console.log(response);
      if (response.status === 200) {
        let logval = response.data.message[0].username;
        setAccount(logval);
        HandleClose();
      }
      else {
        SetUserExsists(true);
      }


    }
    catch (e) {
      console.log('Mmmm');
    }
  }


  const LoginChange = (e) => {
    const { name, value } = e.target;
    // SetError({ ...Error, [name]: null });
    setLogin({ ...login, [name]: value })
  }

  const username = login.username;
  const password = login.password;

  const validate = () => {
    const error = {};
    if (!username) {
      error.username = 'Username is required';
    }
    if (!password) {
      error.password = 'Password is required';
    }
    return error;
  }

  useEffect(() => {
    if (logClick && Object.keys(Error).length === 0) {
      SetShowErr(true);
    }
    else {
      SetShowErr(false);
    }

  })


  const LoginTo = async () => {
    const errors = validate();
    SetError(errors);
    SetLogClick(true);

    try {
      const response = await authenticateLogin(login);
      if (response.status === 200) {
        let logval = response.data.message[0].username;
        setAccount(logval);
        HandleClose();
        SetLogClick(false);
      }
    }
    catch (e) {
      if (Object.keys(Error).length > 0) {
        SetRed(true);
      }
      else {
        console.log('Hello');
        SetShowErr(true);
      }

    }
  }

  console.log(showErr);

  return (
    <Dialbox
      open={open}
      onClose={HandleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Logbox>
        <Inbox>
          <Leftbox style={{ fontFamily: `'Roboto', sans-serif` }}>
            {isSign ? (
              <Leftinfo>
                <LogHeadBox>
                  <LoginTxt>Looks like you're new here!</LoginTxt>
                  <LeftLogPara>Sign up with your mobile number to get started</LeftLogPara>
                </LogHeadBox>
              </Leftinfo>
            ) : (
              <Leftinfo>
                <LogHeadBox>
                  <LoginTxt>Login</LoginTxt>
                  <Box style={{ lineHeight: `200%` }}>
                    <LeftLogPara>Get access to your Orders, Wishlist and Recommendations</LeftLogPara>
                  </Box>
                </LogHeadBox>
              </Leftinfo>
            )}
          </Leftbox>
          <Rightbox>
            {isSign ? (
              <Logfields>
                <RightHead>Sign Up to E-Bazaar</RightHead>
                <RightDesc>Create your account and start shopping</RightDesc>
                <InputFields label='Username' onChange={(e) => InputChange(e)} name='username' variant='standard' error={!!Error.username} helperText={!!Error.username && Error.username} ></InputFields>
                <InputFields label='Email' onChange={(e) => InputChange(e)} name='email' variant='standard' error={!!Error.email} helperText={!!Error.email && Error.email} ></InputFields>
                <InputFields type="password" label='Password' onChange={(e) => InputChange(e)} name='password' variant='standard' error={!!Error.password} helperText={!!Error.password && Error.password}></InputFields>
                {
                  UserExists &&
                  <ErrorBox style={{ marginLeft: `5rem` }}><Errtxt>User already exists</Errtxt></ErrorBox>
                }
                <Logbutton variant="contained" style={{ textAlign: `center`, bottom: `2px` }} onClick={() => SubmitTo()}>
                  <p style={{ fontSize: `18px`, color: `#fff`, paddingTop: `0px` }}>Continue</p>
                </Logbutton>

                <Nubox>
                  <Typography style={{ fontSize: `0.95rem`, fontFamily: `'Ariel', sans-serif` }}>Have an Account?<ClickSign component="span" onClick={() => ChangeToSignUp()}> Login</ClickSign></Typography>
                </Nubox>

              </Logfields>
            ) : (

              <Logfields>
                <RightHead>Welcome back</RightHead>
                <RightDesc>Start Shopping! Please Enter your details.</RightDesc>
                {
                  showErr &&
                  <ErrorBox>
                    <Errtxt>Invalid Username or password.</Errtxt>
                  </ErrorBox>
                }
                <InputFields onChange={(e) => LoginChange(e)} name='username' label='Username' variant='standard' error={!!Error.username} helperText={!!Error.username && Error.username} ></InputFields>
                <InputFields type="password" onChange={(e) => LoginChange(e)} name='password' label='Password' variant='standard' error={!!Error.password} helperText={!!Error.password && Error.password} ></InputFields>


                <Logbutton onClick={LoginTo} variant="contained">
                  <p style={{ fontSize: `18px`, color: `#fff` }}>Login</p>
                </Logbutton>

                <Nubox>
                  <Typography style={{ fontSize: `0.95rem`, fontFamily: `'Ariel', sans-serif` }}>New to E-Bazaar?<ClickSign component="span" onClick={() => LeftChange()}> Sign Up</ClickSign></Typography>
                </Nubox>
              </Logfields>
            )}
          </Rightbox>
        </Inbox>
      </Logbox>
    </Dialbox>
  );
};

const RightHead = styled(Typography)`
font-weight: 550;
font-family:'Ariel', sans-serif;
font-size: 1.7rem;

`

const RightDesc = styled(Typography)`
font-size:0.95rem;
margin-top:0.5rem;
color: rgb(96, 96, 96);
`
const ClickSign = styled(Box)`
cursor : pointer;
color: #3f50b5;
font-weight:550;
`

const InputFields = styled(TextField)`
margin-top:0.5rem;
`

const LoginBox = styled(Box)`
margin-top: 1px;
`

const Dialbox = styled(Dialog)``;

const Logbox = styled(Box)``;

const LeftLogPara = styled(Typography)`
margin-top:1.5rem;
`

const LogHeadBox = styled(Box)`
margin-top:4rem;
padding-left: 1.5rem;
padding-right:3rem;
`
const LoginTxt = styled(Typography)`
font-family: 'Source Sans 3', sans - serif;
font-size: 1.2rem;
font-weight: 600;
`

const Inbox = styled(Box)`
height: 525px;
max-width: 675px;
display: flex;
flex-direction: row;
overflow: hidden;
x-scroll: none;
`;

const Leftbox = styled(Box)(({ theme }) => ({
  // width: '38rem',
  width: '40%',
  background: '#000',
  fontWeight: '100',
  fontSize: '1rem',
  paddingRight: '5px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))



const Rightbox = styled(Box)`
width:30%;
margin-top:2rem;
padding:0rem 2rem;
`;

const Logfields = styled(Box)`
margin-top: 25px;
// padding-right: 2.5rem;
display: flex;
flex-direction: column;
width: 340px;
`;

const Logbutton = styled(Button)`
height: 40px;
width: 100%;
padding : 7px;
background: #000;
margin-top: 1.8rem;
text-align: center;
position: relative;
`;


const Nubox = styled(Box)`
margin-top: 1.5rem;
text-align: center;
color: rgb(96, 96, 96);
`;


const Leftinfo = styled(Box)`
color: #fff;
fontweight: 20;
margin-left: 20px;
fontfamily: Arial;
`;

const ErrorBox = styled(Box)`
color: rgb(245, 95, 82);
width : fit-content;
text-align : center;
margin-top:1rem;
border : 1px solid red;
width: auto;
background-color: rgb(255, 208, 204);
border-radius: 5px;
margin-bottom : 1rem;
`
const Errtxt = styled(Typography)`
fontfamily: Arial;
padding:7px;
`

export default LoginDialog;
