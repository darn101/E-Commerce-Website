import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, styled, TableContainer, TableBody, Table, TableRow, TableCell, TableHead, Button } from "@mui/material";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DecreaseCart, IncreaseCart, removeProduct, ClearCartItems } from "../../redux/cartSlice";

const CartPage = () => {
    const { cart } = useSelector((state) => { return state });
    let cartItems = cart.products;



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
    // const TotalAdd = () => {
    //     cartItems.map((prod) => {
    //         sum += prod.price.cost * prod.quantity;
    //     })
    //     return sum;


    // }

    const TotalAdd = () => {
        let sum = 0;
        cartItems.forEach((prod) => {
            sum += prod.price.cost * prod.quantity;
        })
        return sum;
    }


    // console.log(TotalAdd());

    let total = 0;
    let subtotal = 0;

    return (<>
        <CartHeadBox><Typography style={{ fontSize: `2.3rem` }}>Shopping Cart</Typography></CartHeadBox>
        <CartBox>

            {
                cartItems.length === 0 ?
                    (
                        <>
                            <EmptyCart>
                                <Typography style={{ fontSize: `1.8rem`, color: `rgb(71, 71, 71)` }}>Your cart is currently empty</Typography>
                                <Link to="/" style={{ textDecoration: `none` }}>
                                    <BackBox>
                                        <Typography style={{ fontSize: `1.7rem`, color: `rgb(75, 75, 75)` }}><BsArrowLeft style={{ paddingRight: `0.1rem` }} /> Start Shopping</Typography>
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
                                            <RowHead>PRICE</RowHead>
                                            <RowHead style={{ paddingLeft: `5rem` }}>QUANTITY</RowHead>
                                            <RowHead>TOTAL</RowHead>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            cartItems.map((prod) => (

                                                <TableRow>
                                                    <TableCell style={{ display: `flex` }}>
                                                        <img src={prod.url} alt={prod.title.shortTitle} style={{ height: `10rem`, width: `10rem`, paddingRight: `2rem` }}></img>
                                                        <ProdHeadBox>
                                                            <TableTxt style={{ fontWeight: `500` }}>{prod.title.shortTitle}</TableTxt>
                                                            <RemoveTxt onClick={() => RemoveFromCart(prod)}>Remove</RemoveTxt>
                                                        </ProdHeadBox>
                                                    </TableCell>
                                                    <TableCell><TableTxt>₹{prod.price.cost}</TableTxt></TableCell>
                                                    <TableCell>
                                                        <QuantBox >
                                                            <Minus onClick={() => DecreaseQuant(prod)}>-</Minus>
                                                            <QuantNumb >
                                                                <TableTxt>{prod.quantity}</TableTxt>
                                                            </QuantNumb >
                                                            <Add onClick={() => IncreaseQuant(prod)}>+</Add>
                                                        </QuantBox>
                                                    </TableCell>
                                                    <TableCell><TableTxt><b>₹{(total = prod.price.cost * prod.quantity)}</b></TableTxt></TableCell>

                                                </TableRow>

                                            ))
                                        }

                                    </TableBody>
                                </Table>
                            </TableContainer>


                            <BelowCartBox>
                                <ClearCart onClick={ClearQuant}>Clear Cart</ClearCart>
                                <TotalBox>
                                    <Box style={{ display: `flex` }}>
                                        <TotalTxt>SubTotal</TotalTxt>
                                        <TotalTxt style={{ marginLeft: `46%` }}><b>₹{TotalAdd()}</b></TotalTxt>
                                    </Box>
                                    <Box style={{ width: `100%`, marginTop: `0.6rem` }}>
                                        <Typography style={{ fontSize: `0.88rem`, color: `rgb(75,75,75)` }}>Taxes and delivery calculated at checkout.</Typography>
                                        <CheckOutBtn variant="contained">Check Out</CheckOutBtn>
                                    </Box>
                                </TotalBox>
                            </BelowCartBox >



                        </>)

            }

        </CartBox>
    </>

    );
}

export default CartPage;

const CheckOutBtn = styled(Button)`
width:100%;
margin-top:0.5rem;
height:3rem;
text-transform: capitalize;
font-size: 1.1rem;

`

const TotalBox = styled(Box)`
margin-top:0.6rem;
margin-left: 62%;
padding-right:5rem;
font-size:1.3rem;
// border : 1px solid black;
display:flex;
flex-direction: column;
width: 100%;
`
const TotalTxt = styled(Typography)`
font-size:1.3rem;
`

const BelowCartBox = styled(Box)`
margin-top:2rem;
display : flex;
`

const ClearCart = styled(Button)`
background-color:#FFF;
color : #000;
font-size: 1.3rem;
font-family:'Ariel', sans-serif;
border : 1px solid black;
border-radius:5px;
width:40rem;
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
border : 1px solid black;
height: 3rem;
width: fit-content;
display : flex;

`
const QuantNumb = styled(Box)`
margin-left:1.5rem;
text-align : center;
line-height:3rem;
margin-top:0.5rem;
padding-right:1.5rem;

`

const Minus = styled(Button)`
color: black;
font-size:1.3rem;
width: 20px;
height: 2.99rem;
cursor : pointer;
&:hover {
    border:0.2px solid black;
}
`
const Add = styled(Button)`
color: black;
font-size:1.3rem;
width: 20px;
cursor : pointer;
height: 2.99rem;
&:hover {
    border:1px solid black;
}
`

const TableTxt = styled(Typography)`
font-size: 1.2rem;
`

const RowHead = styled(TableCell)`
font-weight: 800;
`

const ProdHeadBox = styled(Box)`
margin-top:1rem;
`

const CartBox = styled(Box)`

padding: 2rem 5rem;
`

const CartHeadBox = styled(Box)`
margin-left:43%;
margin-top:0.5rem;
font-family: 'Abel', sans-serif;
`

const BackBox = styled(Box)`
margin-left:4rem;
margin-top:1rem;
width : fit-content;
`

const EmptyCart = styled(Box)`
font-size:1.3rem;
margin-top:3rem;
margin-left:39%;
`