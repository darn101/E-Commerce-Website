import { Typography, styled, Box } from "@mui/material";

const Privacy = () => {
    return (
        <>
            <PrivacyBox style={{ fontFamily: `'Roboto',  sans-serif` }}>
                <PrivacyTopHead>Privacy</PrivacyTopHead>
                <PrivacyTxt>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from midnightlaw.com (the “Site”).</PrivacyTxt>
                <PrivacyHead>PERSONAL INFORMATION WE COLLECT</PrivacyHead>
                <PrivacyTxt>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.
                    <br /><br />
                    Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as “Order Information”.
                    <br /><br />
                    When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information
                </PrivacyTxt>
                <PrivacyHead>HOW DO WE USE YOUR PERSONAL INFORMATION?</PrivacyHead>
                <PrivacyTxt>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
                    <br /><br />
                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                </PrivacyTxt>
                <PrivacyHead>DO NOT TRACK</PrivacyHead>
                <PrivacyTxt>Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.</PrivacyTxt>
                <PrivacyHead>DATA RETENTION</PrivacyHead>
                <PrivacyTxt>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</PrivacyTxt>
                <PrivacyHead>CHANGES</PrivacyHead>
                <PrivacyTxt>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</PrivacyTxt>
                <PrivacyHead>CONTACT US</PrivacyHead>
                <PrivacyTxt>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <b>support@ebazaar.com</b></PrivacyTxt>
            </PrivacyBox>
        </>
    );
}

export default Privacy;

const PrivacyBox = styled(Box)(({ theme }) => ({
    padding: '1rem 20%',
    [theme.breakpoints.down('lg')]: {
        padding: '1rem 10%'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 5%'
    },

}))

const PrivacyHead = styled(Typography)`
padding : 1.5rem 0rem 0.2rem 0rem;
font-size:1.1rem;
font-weight: 600;

`


const PrivacyTopHead = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '1rem',
    textAlign: 'center',
    paddingBottom: '2rem',
    textTransform: 'uppercase',
}))

const PrivacyTxt = styled(Typography)`

`