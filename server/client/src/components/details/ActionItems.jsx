
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router';

import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { DecreaseCart, IncreaseCart, removeProduct, ClearCartItems } from "../../redux/cartSlice";
import { loadStripe } from '@stripe/stripe-js';


import axios from "axios";
const URL = '';

const ActionItems = ({ details }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = details[0].id;
    console.log(id);
    const AddToCart = async () => {
        const { data } = await axios.get(`${URL}/getProdDetails/:${id}`);
        console.log(data);
        dispatch(addProduct(data));
    }

    const handleCart = () => {
        console.log('hi');
        AddToCart();
        navigate("/cart");
    }

    const MakePayment = async () => {
        const stripe = await loadStripe('pk_test_51NpV4tSIgZap0boGShrOaDtQag48mRBV6EmuVW0occISnoeg7oNnkYY4bJuD0iCpuMCybCPneMuwOKNrpsBbcFLB00KINbY9Lc');

        const body = {
            products: details
        }

        const headers = {
            "Content-type": "application/json"
        }

        const response = await fetch('/api/create-checkout-session', {
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

    return (
        <>
            {
                details.length > 0 &&
                <>
                    <LeftBox>
                        <ImgBox>
                            <Image src={details[0].detailUrl} alt="" />
                        </ImgBox>

                        <Btn variant="contained" onClick={handleCart} style={{ marginRight: 10 }} ><ShoppingCartIcon />ADD TO CART</Btn>
                        <Btn variant="contained" onClick={MakePayment}><FlashOnIcon />BUY NOW</Btn>
                    </LeftBox>
                </>
            }
        </>
    );
}

export default ActionItems;

const BtnTxt = styled(Typography)`
font-size:85%;
padding-right:5%;
padding-left:5%;

`
const ImgBox = styled(Box)`
border : 1px solid rgba(52, 52, 52, 0.151);
box-shadow: 0.2px 0.2px;
min-width: 15rem;
`
const Image = styled('img')`
padding : 2rem;
width:90%;
min-height:15rem;
`

const LeftBox = styled(Box)(({ theme }) => ({
    width: '95%',
    // minWidth: '40%',
    // margin: '0rem 1rem 0rem 5rem',
    // [theme.breakpoints.down('md')]: {
    //     width: '30rem',
    //     margin: '0rem 1rem 0rem 30%'
    // },
    // [theme.breakpoints.down('sm')]: {
    //     width: '25rem',
    //     margin: '0rem 1rem 0rem 5rem'
    // },

}))

const BtnIcon = styled('i')`
width:0.5rem;
padding-right:0.5rem;
margin-top:7px;
font-size:1.5rem;
padding-left:5%;
`

const Btn = styled(Button)(({ theme }) => ({
    backgroundColor: 'black',
    height: '3.5rem',
    whiteSpace: 'nowrap',
    fontSize: '1.05rem',
    width: '48.5%',
    borderRadius: '5px',
    marginTop: '1rem',
    paddingLeft: '20px',
    // paddingInline: '5% 5%',
    // [theme.breakpoints.down('lg')]: {
    //     width: '47.5%',
    //     fontSize: `1rem`
    // },
    [theme.breakpoints.down('lg')]: {
        width: '48%',
        fontSize: `1.1rem`
    },
}))

