import { Dialog, Box, styled, TextField, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const InitialSignUpData = {
  username: "",
  email: "",
  password: "",
};

const InitialLoginData = {
  username: "",
  password: "",
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
    SetisSign(true);
    SetError('');
  };

  const HandleClose = () => {
    setOpen(false);
    SetisSign(false);
    SetShowErr(false);
    SetError('');
    SetLogClick(false);
    SetUserExsists(false);
  };

  const InputChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
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
      if (response.status === 200) {
        let logval = response.data.message[0].username;
        setAccount(logval);
        HandleClose();
      }

    }
    catch (e) {
      console.log('Mmmm');
    }
  }


  const LoginChange = (e) => {
    const { name, value } = e.target;
    SetError({ ...Error, [name]: null });
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
          <Leftbox>
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
                <InputFields label='Username' onChange={(e) => InputChange(e)} name='username' variant='standard' error={!!Error.username} helperText={!!Error.username && Error.username}></InputFields>
                <InputFields label='Email' onChange={(e) => InputChange(e)} name='email' variant='standard' error={!!Error.email} helperText={!!Error.email && Error.email}></InputFields>
                <InputFields type="password" label='Password' onChange={(e) => InputChange(e)} name='password' variant='standard' error={!!Error.password} helperText={!!Error.password && Error.password}></InputFields>
                {
                  UserExists &&
                  <Typography>Username already exists</Typography>
                }
                <Logbutton variant="contained" style={{ textAlign: `center`, bottom: `2px` }} onClick={() => SubmitTo()}>
                  <p style={{ fontSize: `18px`, color: `#fff`, paddingTop: `0px` }}>Continue</p>
                </Logbutton>

              </Logfields>
            ) : (

              <Logfields>
                <RightHead>Welcome back</RightHead>
                <RightDesc>Start Shopping! Please Enter your details.</RightDesc>
                <InputFields onChange={(e) => LoginChange(e)} name='username' label='Username' variant='standard' error={!!Error.username} helperText={!!Error.username && Error.username}></InputFields>
                <InputFields type="password" onChange={(e) => LoginChange(e)} name='password' label='Password' variant='standard' error={!!Error.password} helperText={!!Error.password && Error.password}></InputFields>
                {
                  showErr &&
                  <ErrorBox>
                    <Errtxt>Invalid Username or password</Errtxt>
                  </ErrorBox>
                }

                <Logbutton onClick={LoginTo} variant="contained">
                  <p style={{ fontSize: `18px`, color: `#fff`, paddingTop: `0px` }}>Login</p>
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
margin-top:2rem;
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

const Dialbox = styled(Dialog)`
width:100%`;

const Logbox = styled(Box)``;

const LeftLogPara = styled(Typography)`
margin-top:1.5rem;
`

const LogHeadBox = styled(Box)`
margin-top:3rem;
padding-left: 1.5rem;
padding-right:3rem;
`
const LoginTxt = styled(Typography)`
font-family: 'Source Sans 3', sans - serif;
font-size: 1.6rem;
font-weight: 600;
`

const Inbox = styled(Box)`
height: 525px;
width: 675px;
display: flex;
flex-direction: row;
overflow: hidden;
x-scroll: none;
`;

const Leftbox = styled(Box)`
width: 38rem;
background: #000;
font-family: 'Roboto', sans-serif;
font-weight:100;
font-size:1rem;
padding-right:5px;
`;

const Rightbox = styled(Box)`
margin-top:rem;
width:50rem
`;

const Logfields = styled(Box)`
margin-top: 25px;
padding-left: 2.5rem;
padding-right: 2.5rem;
display: flex;
flex-direction: column;
width: 375px;
`;

const Logbutton = styled(Button)`
height: 40px;
width: 100%;
padding-bottom: 0px;
background: #000;
margin-top: 2rem;
text-align: center;
position: relative;
padding-top: 0px;
`;


const Parabox = styled(Box)`
margin-top: 2rem;
`;


const Logbutt = styled(Box)`
background-color: #000;
margin-top: 0px;
text-align: center;
position: relative;
margin-top: 1rem;
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
color: red;
width : fit-content;
margin-left:20px;
margin-top:1rem;
text-decoration : underline;
`
const Errtxt = styled(Typography)`
`

export default LoginDialog;
