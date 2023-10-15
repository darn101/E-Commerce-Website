import { Typography, styled, Box } from "@mui/material";

const RefundPolicy = () => {
    return (
        <>
            <RefBox style={{ fontFamily: `'Roboto',  sans-serif` }}>
                <RefTopHead>Refund Policy</RefTopHead>
                <RefHead>Returns</RefHead>
                <RefTxt>
                    Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can't offer you a refund or exchange.
                    <br /><br />
                    To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                    <br /><br />
                    Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
                    <br /><br />
                    To complete your return, we require a receipt or proof of purchase.
                    <br /><br />
                    Please do not send your purchase back to the manufacturer.
                </RefTxt>
                <RefHead>Refunds (if applicable)</RefHead>
                <RefTxt>
                    Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                    <br />
                    If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
                </RefTxt>
                <RefHead>Late or missing refunds (if applicable)</RefHead>
                <RefTxt>
                    If you haven't received a refund yet, first check your bank account again.
                    Then contact your credit card company, it may take some time before your refund is officially posted.
                    <br />
                    Next contact your bank. There is often some processing time before a refund is posted.
                    <br />
                    If you’ve done all of this and you still have not received your refund yet, please contact us at ebazaar@gmail.com.
                    <br /><br />
                </RefTxt>
                <RefHead>Shipping</RefHead>
                <RefTxt>
                    To return your product, you should mail your product to: XXXXXXXX, Ghaziabad, Uttar Pradesh, India
                    <br /><br />
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                    <br /><br />
                    Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
                    <br /><br />
                    If you are shipping an item over ₹8000, you should consider using a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.
                </RefTxt>
            </RefBox>
        </>
    );
}

export default RefundPolicy;

const RefBox = styled(Box)(({ theme }) => ({
    padding: '1rem 20%',
    [theme.breakpoints.down('lg')]: {
        padding: '1rem 10%'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 5%'
    },


}))



const RefHead = styled(Typography)`
padding : 1.5rem 0rem 0.2rem 0rem;
font-size:1.1rem;
font-weight: 600;
text-transform: uppercase;
`


const RefTopHead = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '1rem',
    textAlign: 'center',
    paddingBottom: '2rem',
    textTransform: 'uppercase',
}))

const RefTxt = styled(Typography)`

`