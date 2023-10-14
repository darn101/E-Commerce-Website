import { Box, Table, TableBody, TableCell, TableRow, TableContainer, Typography, styled } from "@mui/material";
import { MdLocalOffer } from "react-icons/md";
import { adURL } from '../../constants/data.js';




const ProductDetail = ({ details }) => {





    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    return (
        <>
            <RightBox>
                <ProdHead>{details[0].title.longTitle}</ProdHead>
                <PriceContainer>
                    <CostBox>
                        <Box style={{ paddingTop: `0%`, fontSize: `2rem`, fontWeight: 300 }}>
                            {/* <LuIndianRupee /> */} ₹
                        </Box>
                        <Box style={{ padding: `0px`, marginRight: `5%` }}>
                            {details[0].price.cost}
                        </Box>
                    </CostBox>
                    <MrpBox>
                        <s>₹{details[0].price.mrp}</s>
                    </MrpBox>
                    <DiscBox>
                        {details[0].price.discount} off
                    </DiscBox>
                </PriceContainer>
                <Typography style={{ fontSize: `1.25rem`, fontWeight: `550` }}>Available Offers</Typography>
                <ul style={{ listStyle: `none`, padding: `0px`, fontSize: `1.1rem`, marginTop: `0.7rem` }}>
                    <li style={{ display: `flex`, paddingBottom: `0.5rem` }}><Box style={{ marginTop: `0.5%`, paddingRight: `0.8rem` }}><MdLocalOffer /></Box>
                        <b style={{ minWidth: `fit-content` }}>Special Price </b>  &nbsp; Get extra 4% off (price inclusive of cashback/coupon)  &nbsp; <b>T&C</b>
                    </li>
                    <li style={{ display: `flex`, paddingBottom: `0.5rem` }}><Box style={{ marginTop: `0.5%`, paddingRight: `0.8rem` }}><MdLocalOffer /></Box>
                        <b style={{ minWidth: `fit-content` }}>Bank Offer </b>  &nbsp; 10% Instant Discount on ICICI Bank Credit Card Txns, up to ₹1,250 on orders of ₹5,000 and above  &nbsp; <b>T&C</b>
                    </li>
                    <li style={{ display: `flex`, paddingBottom: `0.5rem` }}><Box style={{ marginTop: `0.5%`, paddingRight: `0.8rem` }}><MdLocalOffer /></Box>
                        <b style={{ minWidth: `fit-content` }}>Bank Offer </b>  &nbsp; 10% Instant Discount on ICICI Bank Credit Card EMI Txns, up to ₹1,750 on orders of ₹5,000 and above  &nbsp; <b>T&C</b>
                    </li>
                    <li style={{ display: `flex`, paddingBottom: `0.5rem` }}><Box style={{ marginTop: `0.5%`, paddingRight: `0.8rem` }}><MdLocalOffer /></Box>
                        <b style={{ minWidth: `fit-content` }}>Bank Offer </b>  &nbsp; <p></p>10% Instant Discount on ICICI Bank Debit Card and EMI Txns, up to ₹500 on orders of ₹5,000 and above  &nbsp; <b>T&C</b>
                    </li>
                </ul>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <ColumnText>
                                <TableCell><Typography>Delivery</Typography></TableCell>
                                <TableCell><Typography>Delivery by {date.toDateString()} | ₹40</Typography></TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell><Typography>Warranty</Typography></TableCell>
                                <TableCell><Typography>No Warranty</Typography></TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell><Typography>Seller</Typography></TableCell>
                                <TableCell><Box component="span" style={{ color: `blue` }}><Typography>Priyanshu</Typography></Box>
                                    <Typography>GST Invoice Available</Typography>
                                    <Typography>View more sellers starting from </Typography>
                                </TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell colSpan={2}>
                                    <img src={adURL} alt="" style={{ width: `25rem`, height: `5rem` }} />
                                </TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell><Typography>Description</Typography></TableCell>
                                <TableCell><Typography>{details[0].description}</Typography></TableCell>
                            </ColumnText>
                        </TableBody>
                    </Table>
                </TableContainer>
            </RightBox>
        </>
    );
}

export default ProductDetail;

const RightBox = styled(Box)(({ theme }) => ({
    marginLeft: '10%',


    // [theme.breakpoints.down('md')]: {
    //     marginLeft: '1rem',
    //     marginTop: '2rem',
    //     paddingRight: '5%',
    // },
    [theme.breakpoints.down('md')]: {
        marginTop: '2rem',
        minWidth: '29rem'
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: '22rem',
        marginLeft: '0%',

    }

}))



const ColumnText = styled(TableRow)`
font-size : 14px;
vertical-align : baseline;
& > td {
    font-size : 14px;
    margin-top:10px;
    border : none;
}
`

const MrpBox = styled(Box)`
font-size: 1.2rem;
padding : 0.7% 2%;
`

const PriceContainer = styled(Box)`
display : flex;
margin-top:2rem;
line-height: 5rem;
`

const ProdHead = styled(Box)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: '500',

}))


const CostBox = styled(Box)`
font-size:2.3rem;
font-weight: 600;
text-vertical-align: center;
display : flex;
`
const DiscBox = styled(Box)`
font-size: 1.2rem;
padding : 0.7% 0%;
`