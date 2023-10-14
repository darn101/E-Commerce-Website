import { Typography, styled, Box } from "@mui/material";
import Temp from "./temp";

const Contact = () => {
    return (
        <>
            <ContactBox style={{ fontFamily: `'Roboto',  sans-serif` }}>
                <ContHead>Contact Us</ContHead>
                <ContTxt>Please feel free to contact for any order queries, information regarding shipping and delivery, feedback, collaborations etc.</ContTxt>
                <Temp />
            </ContactBox>

        </>
    );
}

export default Contact;

const ContactBox = styled(Box)(({ theme }) => ({
    padding: '1rem 25%',
    [theme.breakpoints.down('lg')]: {
        padding: '1rem 25%'
    },
    [theme.breakpoints.down('md')]: {
        padding: '1rem 5%'
    },
}))

const ContHead = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '600',
    textAlign: 'center',
    whiteSpace: 'nowrap',
}))


// const ContHead = styled()`
// font-size: 2rem;
// font-weight: 400;
// margin-left:38%;
// font-family : Arial,'sans-serif';
// white-space : nowrap;

// `
const ContTxt = styled(Typography)`
font-size:1.2rem;
max-width: 50rem;
margin-top:2rem;
`