import { Typography, styled, Box } from "@mui/material";

const Terms = () => {
    return (
        <>
            <TermBox style={{ fontFamily: `'Roboto',  sans-serif` }}>
                <TermTopHead>Terms of Use</TermTopHead>
                <TermHead>OVERVIEW</TermHead>
                <TermTxt>This website is operated by RetroRealm. Throughout the site, the terms “we”, “us” and “our” refer to RetroRealm. RetroRealm offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                    <br /> <br />
                    By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
                    <br /><br />
                    Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
                    <br /><br />
                    Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                    <br /><br />
                    Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.
                </TermTxt>
                <TermHead>SECTION 1 - ONLINE STORE TERMS</TermHead>
                <TermTxt>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                    <br />
                    You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                    You must not transmit any worms or viruses or any code of a destructive nature.
                    <br />
                    A breach or violation of any of the Terms will result in an immediate termination of your Services.
                </TermTxt>
                <TermHead>SECTION 2 - GENERAL CONDITIONS</TermHead>
                <TermTxt>We reserve the right to refuse service to anyone for any reason at any time.
                    <br />
                    You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
                    <br />
                    You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
                    <br />
                    The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
                </TermTxt>
                <TermHead>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</TermHead>
                <TermTxt>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
                    <br />
                    This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
                </TermTxt>
            </TermBox>

        </>
    );
}

export default Terms;

const TermBox = styled(Box)(({ theme }) => ({
    padding: '1rem 20%',
    [theme.breakpoints.down('lg')]: {
        padding: '1rem 10%'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 5%'
    },


}))
const TermHead = styled(Typography)`
padding : 1.5rem 0rem 0.2rem 0rem;
font-size:1.1rem;
font-weight: 600;
`

const TermTopHead = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '1rem',
    textAlign: 'center',
    paddingBottom: '2rem',
    textTransform: 'uppercase',

}))


const TermTxt = styled(Typography)`

`