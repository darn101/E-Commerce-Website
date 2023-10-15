import { Typography, styled, Box } from "@mui/material";

const Payments = () => {
    return (
        <>
            <PaymentBox style={{ fontFamily: `'Roboto',  sans-serif` }}>
                <PayTopHead>Payments</PayTopHead>
                <PayHead>How do I pay for a E-Bazaar's purchase?</PayHead>
                <Paytxt>E-Bazaar offers you multiple payment methods. Whatever your online mode of payment, you can rest assured that Flipkart's trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.</Paytxt>
                <PayHead>Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on E-Bazaar?</PayHead>
                <Paytxt>There are NO hidden charges when you make a purchase on E-Bazaar. The prices listed for all the items are final and all-inclusive. The price you see on the product page is exactly what you pay.
                    <br /> <br />
                    Delivery charges may be extra depending on the seller policy. Please check individual seller for the same. In case of seller WS Retail, the ₹50 delivery charge is waived off on orders worth ₹500 and over.

                </Paytxt>
                <PayHead>What is Cash on Delivery?</PayHead>
                <Paytxt>If you are not comfortable making an online payment on E-Bazaar.com, you can opt for the Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the product at your doorstep, without requiring you to make any advance payment online
                    <br /><br />
                    The maximum order value for a Cash on Delivery (C-o-D) payment is ₹50,000. It is strictly a cash-only payment method. Gift Cards or store credit cannot be used for C-o-D orders. Foreign currency cannot be used to make a C-o-D payment. Only Indian Rupees accepted.
                </Paytxt>
            </PaymentBox>
        </>
    );
}

export default Payments;

const PaymentBox = styled(Box)(({ theme }) => ({
    padding: '1rem 20%',
    [theme.breakpoints.down('lg')]: {
        padding: '1rem 10%'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 5%'
    },

}))


const PayTopHead = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '1rem',
    textAlign: 'center',
    paddingBottom: '2rem',
}))

const PayHead = styled(Typography)`
padding : 1.5rem 0rem 0.2rem 0rem;
font-size:1.1rem;
font-weight: 600;
text-transform: uppercase;
`
const Paytxt = styled(Typography)`

`
