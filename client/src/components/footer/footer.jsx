import { Container, Grid, Typography, styled, Box, colors } from "@mui/material";

const Footer = () => {
    return (
        <>
            <FootBox>
                <FootContainer>
                    <Grid container pad>
                        <Grid item>
                            <FootHeads>About</FootHeads>
                            <FootItems>Contact Us</FootItems>
                            <FootItems>About Us</FootItems>
                            <FootItems>Careers</FootItems>
                            <FootItems>Press</FootItems>
                        </Grid>
                        <Grid item>
                            <FootHeads>Help</FootHeads>
                            <FootItems>Payments</FootItems>
                            <FootItems>Shipping</FootItems>
                            <FootItems>Cancellation & Returns</FootItems>
                            <FootItems>FAQ</FootItems>
                            <FootItems>Report Infringement</FootItems>
                        </Grid>
                        <Grid item>
                            <FootHeads>Consumer Policy</FootHeads>
                            <FootItems>Cancellation & Returns</FootItems>
                            <FootItems>Terms of Use</FootItems>
                            <FootItems>Security</FootItems>
                        </Grid>
                        <Grid item>
                            <FootHeads>Connect With Us</FootHeads>
                            <FootItems>Facebook</FootItems>
                            <FootItems>Twitter</FootItems>
                            <FootItems>Instagram</FootItems>
                        </Grid>
                    </Grid>

                </FootContainer>
            </FootBox>


        </>);
}

export default Footer;

const FootHeads = styled(Typography)`
font-size: 1.2rem;
font-weight : 600;
margin : 80px 70px 20px 70px;
color : rgb(213, 213, 213);

`

const FootItems = styled(Typography)`
font-size : 1rem;
margin : 15px 70px;
color : rgb(213, 213, 213);
cursor: pointer;

&;hover {
    color : rgb(250,250,250);
}
`
const FootContainer = styled(Container)`
// margin:0px;

padding-bottom : 5rem;
margin-top:2rem;
margin-left: 13%;
`
const FootBox = styled(Box)`
background-color: #000;
min-width:100%;

`