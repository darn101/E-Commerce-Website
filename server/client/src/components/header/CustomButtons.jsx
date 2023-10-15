import { Box, List, ListItem, Badge, styled, Typography } from "@mui/material";
import { useState } from "react";
import { FaAngleDown, FaShoppingCart } from 'react-icons/fa';
import LoginDialog from "../login/LoginDialog";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { DataContext } from "../../context/DataProvider";
import Profile from "./profile";
import { Link } from "react-router-dom";

const CustomButtons = () => {
    const { account, setAccount } = useContext(DataContext);
    const [open, setOpen] = useState(false);

    const LogClick = () => {
        setOpen(true);
    }
    const { cart } = useSelector(state => state);
    let cartLength = cart.products.length;
    return (
        <>
            <CustBox>
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

                        <Link to="/cart" style={{ textDecoration: `none`, color: `white`, marginTop: `1.5px` }}>
                            <ListItem>
                                <CartSpan>
                                    <CartIcBox>
                                        <Badge badgeContent={cartLength} color="primary" style={{ paddingTop: `2px`, fontSize: `0.5rem` }}>
                                            <FaShoppingCart style={{ fontSize: `1.1rem`, marginBottom: `4px` }} />
                                        </Badge>
                                    </CartIcBox>
                                    <CartTxt style={{ fontFamily: `'Source Sans 3', sans-serif` }}>Cart</CartTxt>
                                </CartSpan>
                            </ListItem>
                        </Link>
                    </Libox>

                    <LoginDialog open={open} setOpen={setOpen} />

                </List>
            </CustBox>
        </>
    );
}

export default CustomButtons;

const CartTxt = styled(Typography)`
font-size: 1.2rem;
padding-left:5px;
padding-top:0.2rem;
`

const CustBox = styled(Box)(({ theme }) => ({
    justifyContent: 'space-between',
    paddingRight: '5rem',
    [(theme.breakpoints.down('lg'))]: {
        paddingRight: '2rem'
    }
}))

const Libox = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginLeft: '10%',
    paddingRight: '5%',
    justifyContent: 'space-between',
    [(theme.breakpoints.down('lg'))]: {
        // display: 'block',
        marginLeft: '3%'
    },
    [(theme.breakpoints.down('md'))]: {
        display: 'block',
        marginLeft: '3%'
    },

}))



const Logbox = styled(Box)(({ theme }) => ({
    border: '1.5px solid #FFF',
    width: '9rem',
    minWidth: '7rem',
    height: '33px',
    cursor: 'pointer',
    color: '#FFF',
    [(theme.breakpoints.down('md'))]: {
        width: '10rem'
    }

}))

const Lotype = styled(Typography)`
    text-align : center;
    font-size:1.2rem;
    font-weight : 500;
    padding: 0% 5% 5% 5%;
    cursor : pointer;
    line-height : 33px;
    `

const CartIcBox = styled(Box)`
    padding: 0.3rem 0.35rem;
    padding-left: 2rem;
    `
const CartSpan = styled('span')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        border: '1px solid #FFF',
        whiteSpace: 'nowrap',
        width: '100%',
        height: '2rem',
        lineHeight: '0',
    }
}))






