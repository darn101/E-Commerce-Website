import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProdDetails } from "../../redux/detailSlice";
import { Box, Typography, styled } from "@mui/material";
import ActionItems from "./ActionItems";
import { LuIndianRupee } from "react-icons/lu";
import ProductDetail from "./ProductDetail";



const URL = 'http://localhost:8000';

const DetailsView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    const getProdDet = async () => {

        const { data } = await axios.get(`${URL}/getProdDetails/:${id}`);
        dispatch(getProdDetails(data));
    }
    useEffect(() => {
        getProdDet();
        console.log('hi');
    }, [dispatch], [id])

    const { details } = useSelector((state) => { return state })
    console.log(details);

    return (
        <>

            {
                details.length > 0 &&
                <DetailBox>
                    <Box>
                        <ActionItems details={details} />

                    </Box>
                    <RightBox>
                        <ProductDetail details={details} />
                    </RightBox>
                </DetailBox>
            }
        </>);
}

export default DetailsView;



const DetailBox = styled(Box)`
display : flex;
font-family: 'Abel', sans-serif;
`
const RightBox = styled(Box)`
margin-left: 3rem;
margin-top: 2rem;
padding-right: 5rem;
`
