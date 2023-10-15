import { InputBase, styled, Box, List, ListItem, Typography, Badge, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { FaSistrix } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MicNoneIcon from '@mui/icons-material/MicNone';
import ClearIcon from '@mui/icons-material/Clear';



const URL = '';
const Search = (props) => {
    const [cond, SetCond] = useState(null);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const getProd = async () => {
        console.log(1);
        const { data } = await axios.get(`${URL}/getproducts`);
        console.log(data);
        dispatch(getProducts(data.products));
    }

    const [prodId, SetprodId] = useState(null);
    const [MicWork, SetMicWork] = useState(false);

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

    const [text, SetText] = useState('');



    const [open, setOpen] = useState(false);

    const LogClick = () => {
        setOpen(true);
    }

    // SetText(props.search);

    useEffect(() => {
        SetText(props.speech);
    }, [props.speech])

    const getInput = (e) => {
        SetText(e.target.value);
        console.log(text);
    }

    const ShowMicBox = () => {
        props.fun(true);
    }

    // const navToProd = (id) => {
    //     useNavigate(`/products/${id}`);
    // }
    console.log(props.speech);
    const { product } = useSelector(state => state);
    const { cart } = useSelector(state => state);
    let cartLength = cart.products.length;
    console.log(props.speech);

    const ClearSearch = () => {
        SetText('');
    }

    const SearchApplied = () => {
        navigate(`/category/${text}`);
        SetText('');
    }

    var pressed = document.getElementById("KeyPressed");
    if (pressed) {
        pressed.addEventListener("keypress", function (event) {
            if (event.key == "Enter") {
                SearchApplied();
            }
        })
    }


    return (
        <>
            <Nubox>
                <SearchLine>
                    <Styledinput placeholder="Search E-Bazaar" onChange={getInput} value={text} id="KeyPressed" ></Styledinput>
                    {text &&
                        <ClearIc onClick={() => ClearSearch()}>
                            <ClearIcon />
                        </ClearIc>

                    }
                    <Icbox>
                        <SepLine></SepLine>

                        <FaSistrix style={{ marginLeft: `10px`, marginTop: `8px`, cursor: `pointer` }} onClick={() => SearchApplied()} />
                        <MicNoneIcon style={{ marginLeft: `12px`, marginTop: `8px`, cursor: `pointer`, fontSize: `1.6rem` }} onClick={ShowMicBox} />
                    </Icbox>
                </SearchLine>
                {
                    text &&
                    <ListBox className="scrolly">
                        {(product[0].filter(prod => prod.title.longTitle.toLowerCase().includes(text.toLowerCase())).length === 0 &&
                            product[0].filter(prod => prod.tagline.toLowerCase().includes(text.toLowerCase())).length === 0)
                            ?
                            <NoElements>No results found</NoElements>
                            :

                            product[0].filter(prod => prod.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((items) => (
                                <ListElements onClick={() => handleSubmit(items.id)}>
                                    {items.title.longTitle}
                                </ListElements>
                            ))
                        }

                    </ListBox>
                }
            </Nubox >
            {/* <CustomButtons /> */}
        </>

    );
}

export default Search;

const ClearIc = styled(IconButton)`
padding-right : 4px;
    color : #000;
    font-size:1.7rem;
`

const SepLine = styled('span')`
border-left:2px solid #000;
height:30px;
position: absolute;
margin-top: 5px;
`

const SearchLine = styled(Box)`
display : flex;
padding-right:0.2rem;
height:2.5rem;
`

const ListBox = styled(List)`
position:absolute;
width:58%;
min-width: 20rem;
padding-rigth:40%;
max-height:30rem;
overflow-y: auto;
`
const ListElements = styled(ListItem)`
background-color: #FFF;
color: #000;
font-family: 'Roboto', sans-serif;
cursor : pointer;
font-size:1.1rem;
padding:20px;
max-height:10rem;
&:hover {
    background-color: rgb(222, 222, 222);
}
`

const NoElements = styled(ListItem)`
background-color: #EBEBEB;
color: #000;
height: auto;
font-family: 'Roboto', sans-serif;
cursor : pointer;
font-size:1.1rem;
padding:20px;

&:hover {
    background-color: rgb(222, 222, 222);
}
`


const Nubox = styled(Box)(({ theme }) => ({
    marginLeft: '3rem',
    backgroundColor: '#FFF',
    // display : flex;
    width: '62.5%',
    minWidth: '15rem',
    marginTop: '5px',
    [theme.breakpoints.down('lg')]: {
        width: '83%',
        paddingRight: '3%'
    }
}))



const Styledinput = styled(InputBase)`
    margin-left: 10px;
    color : #000;
    width:100%;
   
    `

const Icbox = styled('i')`
    
    padding-right : 4px;
    color : #000;
    font-size:1.5rem;
    display:flex;
    `

