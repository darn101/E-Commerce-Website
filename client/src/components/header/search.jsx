import { InputBase, styled, Box, List, ListItem, Typography, Badge } from "@mui/material";
import { useEffect, useState } from "react";
import { FaSistrix, FaAngleDown, FaShoppingCart } from 'react-icons/fa';
import LoginDialog from "../login/LoginDialog";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";
import { getProdDetails } from "../../redux/detailSlice";
import { getProducts } from "../../redux/productSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



const URL = 'http://localhost:8000';
const Search = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getProd = async () => {
        console.log(1);
        const { data } = await axios.get(`${URL}/getproducts`);
        console.log(data);
        dispatch(getProducts(data.products));
    }

    const [prodId, SetprodId] = useState(null);

    useEffect(() => {
        getProd();
        if (prodId) {
            navigate(`/products/${prodId}`);
            navigate(0);

            console.log('JJ');
        }
    }, [dispatch, prodId])

    const handleSubmit = (id) => {
        SetprodId(id);
        // if (prodId) {
        //     navigate(`/products/${prodId}`);
        //     navigate(0);

        // }
    }

    const { account, setAccount } = useContext(DataContext);
    const [text, SetText] = useState('');



    const [open, setOpen] = useState(false);

    const LogClick = () => {
        setOpen(true);
    }

    const getInput = (e) => {
        SetText(e.target.value);
        console.log(text);
    }

    // const navToProd = (id) => {
    //     useNavigate(`/products/${id}`);
    // }

    const { product } = useSelector(state => state);
    const { cart } = useSelector(state => state);
    let cartLength = cart.products.length;

    return (
        <>
            <Nubox>
                <SearchLine>


                    <Styledinput placeholder="Search for products, brands and more" onChange={getInput}>

                    </Styledinput>
                    <Icbox>
                        <FaSistrix />
                    </Icbox>
                </SearchLine>
                {

                    text &&

                    <ListBox>
                        {
                            product[0].filter(prod => prod.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((items) => (
                                <ListElements onClick={() => handleSubmit(items.id)}>
                                    {items.title.longTitle}
                                </ListElements>
                            ))
                        }
                    </ListBox>
                }
            </Nubox>

            <List>
                <Libox>
                    <ListItem>
                        {account ? <Profile account={account} setAccount={setAccount} />
                            :
                            <Logbox>
                                <Lotype onClick={() => LogClick()}>Login</Lotype>
                            </Logbox>
                        }

                    </ListItem>
                    <ListItem>

                        <Box>
                            <Besell>
                                <Betype style={{ fontFamily: `'Source Sans 3', sans-serif` }}>Become a Seller</Betype>
                            </Besell>

                        </Box>
                    </ListItem>
                    <ListItem>
                        <Morebox style={{ fontFamily: `'Source Sans 3', sans-serif` }}>
                            More
                            <MoreIcBox>
                                <FaAngleDown />
                            </MoreIcBox>
                        </Morebox>
                    </ListItem>
                    <Link to="/cart" style={{ textDecoration: `none`, color: `white`, marginTop: `5px` }}>
                        <ListItem>
                            <CartIcBox>
                                <Badge badgeContent={cartLength} color="primary" style={{ paddingTop: `2px`, fontSize: `0.5rem` }}>
                                    <FaShoppingCart style={{ fontSize: `1rem` }} />
                                </Badge>
                            </CartIcBox>
                            {/* <Typography style={{ fontFamily: `'Source Sans 3', sans-serif` }}>Cart</Typography> */}
                        </ListItem>
                    </Link>
                </Libox>

                <LoginDialog open={open} setOpen={setOpen} />

            </List>


        </>

    );
}

export default Search;

const SearchLine = styled(Box)`
display : flex;
`

const ListBox = styled(List)`
position : absolute;
`
const ListElements = styled(ListItem)`
background-color: #FFF;
color: #000;
height: auto;
font-family: 'Roboto', sans-serif;
width : 530px;
cursor : pointer;

&:hover {
    background-color: rgb(222, 222, 222);
}
`

const Nubox = styled(Box)`
    margin-left : 20px;
    background-color : #FFF;
    // display : flex;
    

    `

const Styledinput = styled(InputBase)`
    margin-left: 10px;
    color : #000;
    width : 500px;
    `

const Icbox = styled(Box)`
    
    
    padding-top: 8px;
    padding-right : 4px;
    color : #000;
    `

const Libox = styled(Box)`
    display: flex;
    flex-direction : row;
    margin-left: 35px;

    `
const Logbox = styled(Box)`
    background-color: #FFF;
    width : 110px;
    height : 30px;
    cursor: pointer;
    `
const Lotype = styled(Typography)`
    color : #000;
    text-align : center;
    font-size: 16px;
    font-weight : 600;
    padding-top : 2px;
    cursor : pointer;
    `
const Besell = styled(Box)`
    // background-color: #FFF;
    display : flex;
    flex-direction : row;
    width : 180px;
    height : 30px;
    overflow : hidden;
    padding-right:0px;
    border: 1px solid #FFF;
    
    `

const Betype = styled(Typography)`
    padding-left: 30px;
    padding-top: 2px;
    `

const MoreIcBox = styled(Box)`
    padding-left: 3px;
    position : relative;
    top:5px;
    font-size: 0.85rem;
    
    `

const Morebox = styled(Box)`
    display: flex;
    flex-direction : row;
    margin-left: 5px;

    
    `

const CartIcBox = styled(Box)`
    padding: 0.1rem 0.35rem;
    
    `