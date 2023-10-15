import { Container, Grid, Typography, styled, Box, colors } from "@mui/material";
import { Link } from "react-router-dom";

const ScrollTop = () => {
    window.scrollTo(0, 0);
}

const Footer = () => {
    return (
        <>
            <FootBox>
                <FootContainer>
                    <Grid container >
                        <Grid item lg={3} md={3} xs={6}>
                            <FootHeads>About</FootHeads>
                            <Links to='/contact' onClick={() => ScrollTop()}><FootItems>Contact Us</FootItems></Links>
                            <Links to='/about' onClick={() => ScrollTop()}><FootItems>About Us</FootItems></Links>
                        </Grid>
                        <Grid item lg={3} md={3} xs={6}>
                            <FootHeads>Help</FootHeads>
                            <Links to='/payments' onClick={() => ScrollTop()}><FootItems>Payments</FootItems></Links>
                            <Links to='/shipping' onClick={() => ScrollTop()}><FootItems>Shipping</FootItems></Links>
                            <Links to='/faq' onClick={() => ScrollTop()}><FootItems>FAQ</FootItems></Links>
                        </Grid >
                        <Grid item lg={3} md={3} xs={6}>
                            <Links to='/consumer-policy' onClick={() => ScrollTop()}><FootHeads>Consumer Policy</FootHeads></Links>
                            <Links to='/refund-policy' onClick={() => ScrollTop()}><FootItems>Refund policy</FootItems></Links>
                            <Links to='/terms-of-use' onClick={() => ScrollTop()}><FootItems>Terms of Use</FootItems></Links>
                            <Links to='/privacy' onClick={() => ScrollTop()}><FootItems>Privacy</FootItems></Links>
                        </Grid>
                        <Grid item lg={3} md={3} xs={6}>
                            <FootHeads>Connect With Us</FootHeads>
                            <Links to='https://www.facebook.com/' target="_blank"><FootItems>Facebook</FootItems></Links>
                            <Links to='https://twitter.com/' target="_blank" ><FootItems>Twitter</FootItems></Links>
                            <Links to='https://www.instagram.com/' target="_blank"><FootItems>Instagram</FootItems></Links>
                        </Grid>
                    </Grid>

                </FootContainer>
            </FootBox>


        </>);
}

export default Footer;

const Links = styled(Link)`
text-decoration:none;
`

const FootHeads = styled(Typography)`
font-size: 1.2rem;
font-weight : 600;
margin : 80px 0px 20px 0px;
color : rgb(213, 213, 213);

`

const FootItems = styled(Typography)`
font-size : 1rem;
margin : 15px 0px;
color : rgb(213, 213, 213);
cursor: pointer;

&:hover {
    color : rgb(230,230,230);
}
`
const FootContainer = styled(Container)(({ theme }) => ({
    paddingBottom: '5rem',
    marginTop: '2rem',
    paddingLeft: '13%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
        paddingLeft: '5%'
    },
    [theme.breakpoints.down('md')]: {
        paddingLeft: '10%'
    },
    [theme.breakpoints.down('md')]: {
        paddingLeft: '5%'
    },

}))





const FootBox = styled(Box)`
margin-top:2rem;
background-color: #000;
width:100%;
`