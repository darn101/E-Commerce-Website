
import { Box, Button, styled } from "@mui/material";
import { AiOutlineShoppingCart, AiOutlineThunderbolt } from "react-icons/ai";
import { useNavigate } from 'react-router';

import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";


import axios from "axios";
const URL = 'http://localhost:8000';

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
    return (
        <>
            {
                details.length > 0 &&
                <>
                    <LeftBox>
                        <ImageBox>
                            <img src={details[0].detailUrl} alt="" style={{ width: `27rem`, height: `25rem` }} />
                        </ImageBox>
                        <BtnContainer>
                            <Btn variant="contained" onClick={handleCart} ><AiOutlineShoppingCart style={{ marginRight: `10px`, fontSize: `1.3rem` }} />ADD TO CART</Btn>
                            <Btn variant="contained" style={{ marginLeft: `1.4rem` }}><AiOutlineThunderbolt style={{ marginRight: `10px`, fontSize: `1.3rem` }} />BUY NOW</Btn>
                        </BtnContainer>
                    </LeftBox>
                </>
            }
        </>
    );
}

export default ActionItems;

const ImageBox = styled(Box)`
border : 1px solid rgba(52, 52, 52, 0.151);
padding : 1rem;
box-shadow: 0.2px 0.2px;
`

const LeftBox = styled(Box)`
margin-left: 5rem;
margin-top: 2rem;
`

const BtnContainer = styled(Box)`
margin-top:1rem;
`
const Btn = styled(Button)`
font-size:1.1rem;
background-color: black;
width: 47.4%;
padding: 3%;
`