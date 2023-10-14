import { Typography, styled, Box } from "@mui/material";
import Temp from "./temp";

const About = () => {
    return (
        <>
            <AboutBox style={{ fontFamily: `'Roboto',  sans-serif` }}>
                <ContHead>About Us</ContHead>
                <AboutTxt>At E-Bazaar, our aim is to offer you procuts that show you that we really care! Not only have we got the trendiest items, but we can also guarantee that they are of the finest quality.

                    We started as a small business in Ghaziabad in 2023, and our aim is to continue providing our customers with products that keep them happy, at prices that keep them happy.

                    Our customers are our top priority and through our products we work hard towards building long-lasting and meaningful relations with them.

                    <br /><br />Well, as cliché as it may sound, It's just the beginning. We will stick to our maximal roots and continue to diversify our range of products and expand our reach globally.

                    And finally, Thank YOU for showing interest in our brand and supporting us.
                    <br /> <br />
                    Cheers everyone!
                    <br /><br />
                    Business Registered Name: <b>Priyanshu Chaudhary</b>
                    <br /><br />
                    Address : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </AboutTxt>
            </AboutBox>
        </>
    );
}

export default About;

const AboutBox = styled(Box)(({ theme }) => ({
    padding: '1rem 20%',
    [theme.breakpoints.down('lg')]: {
        padding: '1rem 10%'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 5%'
    },

}))


const ContHead = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '1rem',
    textAlign: 'center',
    paddingBottom: '2rem',
}))

const AboutTxt = styled(Typography)`
padding: 1rem 0rem;
font-size:1rem;
`