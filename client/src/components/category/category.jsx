import { Box, Typography, styled } from "@mui/material";
import axios from "axios";
import FilterLeft from "./FilterLeft";
import ItemsRight from "./ItemsRight";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const URL = 'http://localhost:8000';
const Category = () => {
    const [Data, SetData] = useState([]);

    const [price, SetPrice] = useState([0, 200000]);



    const { id } = useParams();
    console.log(id);

    const getProd = async () => {
        console.log(1);
        const { data } = await axios.get(`${URL}/getProdCategory/${id}?minprice=${price[0]}&maxprice=${price[1]}`);
        console.log(data);
        SetData(data);
        // dispatch(getProdCategory(data.products));
    }

    const ChangePrice = (val) => {
        SetPrice(val);
        console.log(price);
    }

    // how to get price from ${URL}/getProdCategory/${id}?price=${price}

    useEffect(() => {
        getProd();
    }, [price, id])

    // const data = useSelector((state) => { return state.product })
    // console.log(data);
    return (
        <>
            <CatBox>
                <CategoryHead>{id}</CategoryHead>
                <LeftBox>
                    <FilterLeft category={id} items={Data} ChangePrice={ChangePrice} />
                </LeftBox>
                <ItemsRight category={id} items={Data} />
            </CatBox>


        </>

    );
}

export default Category;

const LeftBox = styled(Box)(({ theme }) => ({
    width: '20rem',
    marginLeft: '38.5%',
    [theme.breakpoints.down('lg')]: {
        marginLeft: '33.5%',
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: '27.5%',
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: '7%',
    },
}))


const CategoryHead = styled(Typography)`
font-size:2.5rem;
font-weight:500;
margin-top:5rem;
text-align: center;
`

const CatBox = styled(Box)`
text-align:center;
display : flex;
flex-direction : column;
padding-inline: 5rem;
`