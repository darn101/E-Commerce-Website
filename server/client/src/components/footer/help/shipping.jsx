import { Typography, styled, Box } from "@mui/material";

const Shipping = () => {
    return (
        <>
            <ShippingBox style={{ fontFamily: `'Roboto',  sans-serif` }}>
                <ShipTopHead>Shipping</ShipTopHead>
                <ShipHead>What are the delivery charges?</ShipHead>
                <ShipTxt>Delivery charge varies with each Seller.
                    <br /><br />
                    Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal delivery charge helps them offset logistics costs. Please check your order summary to understand the delivery charges for individual products.
                    <br /><br />
                    For Products listed as Flipkart Plus, a Rs 40 charge for delivery per item may be applied if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free.
                </ShipTxt>
                <ShipHead>Why does the delivery date not correspond to the delivery timeline of X-Y business days?</ShipHead>
                <ShipTxt>It is possible that the Seller or our courier partners have a holiday between the day your placed your order and the date of delivery, which is based on the timelines shown on the product page. In this case, we add a day to the estimated date. Some courier partners and Sellers do not work on Sundays and this is factored in to the delivery dates.</ShipTxt>
                <ShipHead>What is the estimated delivery time?</ShipHead>
                <ShipTxt>Sellers generally procure and ship the items within the time specified on the product page. Business days exclude public holidays and Sundays.</ShipTxt>
                <ShipHead>Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on Flipkart?</ShipHead>
                <ShipTxt>There are NO hidden charges when you make a purchase on Flipkart. List prices are final and all-inclusive. The price you see on the product page is exactly what you would pay.
                    <br /><br />
                    Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's shipping policy.
                </ShipTxt>

            </ShippingBox>
        </>
    );
}

export default Shipping;


const ShippingBox = styled(Box)(({ theme }) => ({
    padding: '1rem 20%',
    [theme.breakpoints.down('lg')]: {
        padding: '1rem 10%'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '1rem 5%'
    },

}))

const ShipTopHead = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '600',
    marginTop: '1rem',
    textAlign: 'center',
    paddingBottom: '2rem',
}))

const ShipHead = styled(Typography)`
padding : 1.5rem 0rem 0.2rem 0rem;
font-size:1.1rem;
font-weight: 600;
text-transform: uppercase;
`
const ShipTxt = styled(Typography)`

`