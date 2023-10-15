import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, styled, TableContainer, TableBody, Table, TableRow, TableCell, TableHead, Button } from "@mui/material";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DecreaseCart, IncreaseCart, removeProduct, ClearCartItems } from "../../redux/cartSlice";
import { loadStripe } from '@stripe/stripe-js';

const CartPage = () => {
    const { cart } = useSelector((state) => { return state });
    let cartItems = cart.products;
    console.log(cartItems);

    const dispatch = useDispatch();
    const RemoveFromCart = (prod) => {
        console.log(prod);
        dispatch(removeProduct(prod));
    }

    const DecreaseQuant = (prod) => {
        dispatch(DecreaseCart(prod));
    }

    const IncreaseQuant = (prod) => {
        dispatch(IncreaseCart(prod));
    }

    const ClearQuant = () => {
        dispatch(ClearCartItems());
    }

    const TotalAdd = () => {
        let sum = 0;
        cartItems.forEach((prod) => {
            sum += prod.price.cost * prod.quantity;
        })
        return sum;
    }

    let total = 0;
    let subtotal = 0;

    const MakePayment = async () => {
        const stripe = await loadStripe('pk_test_51NpV4tSIgZap0boGShrOaDtQag48mRBV6EmuVW0occISnoeg7oNnkYY4bJuD0iCpuMCybCPneMuwOKNrpsBbcFLB00KINbY9Lc');

        const body = {
            products: cartItems
        }

        const headers = {
            "Content-type": "application/json"
        }

        const response = await fetch('http://localhost:8000/api/create-checkout-session', {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })

        if (result.error) {
            console.log(result.error);
        }
    }

    return (<>
        <CartHeadBox>Shopping Cart</CartHeadBox>
        <CartBox>
            {
                cartItems.length === 0 ?
                    (
                        <>
                            <EmptyCart>
                                <Typography style={{ fontSize: `1.8rem`, color: `rgb(71, 71, 71)`, textAlign: `center` }}>Your cart is currently empty</Typography>
                                <Link to="/" style={{ textDecoration: `none` }}>
                                    <BackBox>
                                        <Typography style={{ fontSize: `1.5rem`, marginLeft: `0.5rem` }}>
                                            <BsArrowLeft />
                                            <span style={{ marginLeft: `0.5rem` }}>Conitnue Shopping</span>
                                        </Typography>
                                    </BackBox>
                                </Link>
                            </EmptyCart>
                        </>)
                    :
                    (
                        <>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow style={{ fontWeight: `800` }}>
                                            <RowHead >PRODUCT</RowHead>
                                            <PriceHead>PRICE</PriceHead>
                                            <QuantityHead style={{ paddingLeft: `5%` }}>QUANTITY</QuantityHead>
                                            <RowHead>TOTAL</RowHead>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            cartItems.map((prod) => (

                                                <TableRow>
                                                    <TableCell style={{ display: `flex`, padding: `3rem 0rem` }} >
                                                        <img src={prod.url} alt={prod.title.shortTitle} style={{ height: `10rem`, width: `10rem`, paddingRight: `2rem` }}></img>
                                                        <ProdHeadBox>
                                                            <TableTxt style={{ fontWeight: `500` }}>{prod.title.shortTitle}</TableTxt>
                                                            <RemoveTxt onClick={() => RemoveFromCart(prod)}>Remove</RemoveTxt>
                                                            <NameBelow>
                                                                <QuantBox >
                                                                    <Minus onClick={() => DecreaseQuant(prod)}>-</Minus>
                                                                    <QuantNumb >
                                                                        <TableTxt>{prod.quantity}</TableTxt>
                                                                    </QuantNumb >
                                                                    <Add onClick={() => IncreaseQuant(prod)}>+</Add>
                                                                </QuantBox>
                                                            </NameBelow>
                                                        </ProdHeadBox>
                                                    </TableCell>
                                                    <PriceShow><TableTxt>₹{prod.price.cost}</TableTxt></PriceShow>
                                                    <QuantityBelow>
                                                        <QuantBox >
                                                            <Minus onClick={() => DecreaseQuant(prod)}>-</Minus>
                                                            <QuantNumb >
                                                                <TableTxt>{prod.quantity}</TableTxt>
                                                            </QuantNumb >
                                                            <Add onClick={() => IncreaseQuant(prod)}>+</Add>
                                                        </QuantBox>
                                                    </QuantityBelow>
                                                    <TableCell><TableTxt><b>₹{(total = prod.price.cost * prod.quantity)}</b></TableTxt></TableCell>

                                                </TableRow>

                                            ))
                                        }

                                    </TableBody>
                                </Table>
                            </TableContainer>


                            <BelowCartBox>
                                {/* <ClearCart onClick={ClearQuant}>Clear Cart</ClearCart> */}
                                <TotalBox>
                                    <Box style={{ display: `flex` }}>
                                        <TotalTxt style={{ fontWeight: `600`, marginLeft: `25%` }}>Subtotal</TotalTxt>
                                        <TotalTxt style={{ marginLeft: `10px` }}><b>₹{TotalAdd()}</b></TotalTxt>
                                    </Box>
                                    <Box style={{ marginTop: `1rem` }}>
                                        <Typography style={{ fontSize: `0.88rem`, color: `rgb(75,75,75)`, marginLeft: `10%` }}>Shipping, taxes, and discount codes calculated at checkout.</Typography>
                                        <CheckOutBtn variant="contained" onClick={MakePayment}>Check Out</CheckOutBtn>
                                    </Box>
                                </TotalBox>
                            </BelowCartBox>

                        </>)

            }

        </CartBox>
    </>

    );
}

export default CartPage;

const PriceHead = styled(TableCell)(({ theme }) => ({
    fontWeight: '800',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))

const QuantityHead = styled(TableCell)(({ theme }) => ({
    fontWeight: '800',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
}))

const PriceShow = styled(TableCell)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))



const CheckOutBtn = styled(Button)`
width:28rem;
margin-top:1.5rem;
height:3rem;
text-transform: capitalize;
font-size: 1.1rem;
background-color:#000;

`
const NameBelow = styled(TableCell)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'inline'
    }
}))



const TotalBox = styled(Box)`
margin-top:0.6rem;

font-size:1.3rem;
// border : 1px solid black;
display:flex;
flex-direction: column;
`
const TotalTxt = styled(Typography)`
font-size:1.5rem;
letter-spacing:1.5px;
`

const BelowCartBox = styled(Box)(({ theme }) => ({
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center'
}))



const ClearCart = styled(Button)`
background-color:#FFF;
color : #000;
font-size: 1.3rem;
font-family:'Ariel', sans-serif;
border : 1px solid black;
border-radius:5px;
min-width:10rem;
white-space: no-wrap;
height:3rem;

text-transform : capitalize;

&:hover {
    color:#FFF;
    background-color:#000;
}
`

const RemoveTxt = styled(Box)`
color:rgb(75,75,75);
margin-top:2rem;
font-size: 1.1rem;
cursor: pointer;
`

const QuantBox = styled(Box)`
border-bottom : 2px solid black;
height: 3rem;
width: fit-content;
display : flex;

`
const QuantNumb = styled(Box)`
text-align : center;
line-height:3rem;
margin-top:0.5rem;

`

const Minus = styled(Button)`
color: black;
font-size:1.8rem;
height: 2.99rem;
width:2px;
cursor : pointer;

`
const Add = styled(Button)`
color: black;
font-size:1.3rem;
max-width: 5px;
cursor : pointer;
height: 2.99rem;
`

const QuantityBelow = styled(TableCell)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))



const TableTxt = styled(Typography)`
font-size: 1.2rem;
`

const RowHead = styled(TableCell)`
font-weight: 800;
`

const ProdHeadBox = styled(Box)`
margin-top:1rem;
`

const CartBox = styled(Box)(({ theme }) => ({
    padding: '5rem 0%',
    [theme.breakpoints.down('md')]: {
        padding: '2rem 5%'
    }
}))

const CartHeadBox = styled(Typography)`
// margin-left:43%;
margin-top:0.5rem;
font-family: 'Roboto', sans-serif;
font-size: 2.5rem;
font-weigth: 600;
text-align:center;
`

const BackBox = styled(Box)`
// margin-left:35%;
margin-top:3rem;
width : fit-content;
background-color:#000;
color: rgb(220, 220, 220);
padding:0.5rem;
`

const EmptyCart = styled(Box)`
font-size:1.3rem;
margin-top:3rem;
display:flex;
flex-direction: column;
align-items:center;
`