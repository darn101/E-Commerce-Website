import { Typography, styled, Box } from "@mui/material";

const Faq = () => {
    return (
        <>
            <FaqBox style={{ fontFamily: `'Roboto',  sans-serif` }}>
                <FaqTopHead>FAQ's</FaqTopHead>
                <FaqHead>I WANT TO RETURN/EXCHANGE A PRODUCT(S). HOW DO I PROCEED?</FaqHead>
                <FaqTxt>If you're not satisfied with the product and would like to return it for an exchange or a refund, we do free return pickups at no additional cost to you.
                    <br /><br />
                    Once we receive your email requesting a return, we'll create a pickup request for the product(s). Once the pickup executive collects it, we can either refund your entire amount immediately or process an exchange order.
                    <br /><br />
                    Our pickup partner (Shadowfax) is available in all major cities. However, there are a few places where it is not. For such, the customers must ship the product(s) back themselves bearing the expenses.
                </FaqTxt>
                <FaqHead>HOW LONG WILL MY ORDER TAKE?</FaqHead>
                <FaqTxt> Please allow 3 - 5 business days for your order to be processed. Orders will usually take 2-4 days to arrive (depending on your location) after they have been processed and shipped. International orders can take longer to arrive.</FaqTxt>
                <FaqHead>WHAT SHIPPING METHOD IS USED?</FaqHead>
                <FaqTxt>All orders are shipped using FedEx, Delhivery and Bluedart</FaqTxt>
                <FaqHead>WHERE ARE YOU BASED?</FaqHead>
                <FaqTxt>We're based in New Delhi, India. We ship most of the orders from Uttar Pradesh and New Delhi.</FaqTxt>
                <FaqHead>WHAT COUNTRIES DO YOU SHIP TO?</FaqHead>
                <FaqTxt>We ship only in India.</FaqTxt>
                <FaqHead>HOW DO I ISSUE AN EXCHANGE?</FaqHead>
                <FaqTxt>Please email support@ebazaar.com to issue an exchange with your Order ID# and a Description of the Issue</FaqTxt>
                <FaqHead>WHAT IF MY ORDER IS MESSED UP OR MY PACKAGE IS DAMAGED?</FaqHead>
                <FaqTxt>If we have made an error in your order or you have received defective/damaged clothing, we will humbly correct our mistake at no cost to you. We strive to provide the best service possible and will do whatever we can. Simply contact support@ebazaar.com as soon as you can, with your Order ID# and a Description of the Issue. </FaqTxt>
                <FaqHead>WHAT IS YOUR RETURN POLICY?</FaqHead>
                <FaqTxt>Our policy lasts 7 days. If 7 days have gone by since your purchase, unfortunately, we can't offer you a refund or exchange.
                    <br /><br />
                    To be eligible for a return, your item must be unused and in the same condition that you received it.
                </FaqTxt>
                <FaqHead>HOW DO I GET A REFUND?</FaqHead>
                <FaqTxt>If you made an online payment for your order, we refund the full amount within 24 hours post pickup. If your order is Cash on Delivery, we ask for your UPI # or Bank Details and we can refund within 24 hours post pickup.</FaqTxt>
            </FaqBox>
        </>
    );
}

export default Faq;

const FaqBox = styled(Box)(({ theme }) => ({
    padding: '1rem 20%',
    [theme.breakpoints.down('lg')]: {
        padding: '1rem 10%'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 5%'
    },

}))

const FaqTopHead = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '1rem',
    textAlign: 'center',
    paddingBottom: '2rem',
}))



const FaqHead = styled(Typography)`
padding : 1.5rem 0rem 0.2rem 0rem;
font-size:1.1rem;
font-weight: 600;

`
const FaqTxt = styled(Typography)`

`