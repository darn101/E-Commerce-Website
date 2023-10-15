import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProdDetails } from "../../redux/detailSlice";
import { Box, Grid, Typography, styled } from "@mui/material";
import ActionItems from "./ActionItems";
import { LuIndianRupee } from "react-icons/lu";
import ProductDetail from "./ProductDetail";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from "react";


const URL = 'http://localhost:8000';

const DetailsView = () => {

    const {
        listening,
        browserSupportsSpeechRecognition,

    } = useSpeechRecognition();

    const { transcript, resetTranscript } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        console.log('Not supported');
    }

    const startListening = () => SpeechRecognition.startListening({ continuous: true });
    const stopListening = () => SpeechRecognition.stopListening();

    const [CommandSearch, SetCommandSearch] = useState(null);

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
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <LeftBox>
                            <ActionItems details={details} />
                        </LeftBox>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <RightBox >
                            <ProductDetail details={details} />
                        </RightBox>
                    </Grid>
                </Container>
            }
        </>);
}

export default DetailsView;

const Container = styled(Grid)`
font-family: 'Abel', sans-serif;
margin-top: 7rem;
padding-right: 5rem;
`

const LeftBox = styled(Box)(({ theme }) => ({
    width: '95%',
    minWidth: '20rem',
    margin: '0rem 1rem 0rem 5rem',
    [theme.breakpoints.down('md')]: {
        width: '30rem',
        margin: '0rem 1rem 0rem 30%',
        paddingRight: '10%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '25rem',
        margin: '0rem 1rem 0rem 20%',
    },

}))

const RightBox = styled(Box)(({ theme }) => ({
    marginLeft: '10%',

    // position: 'relative',
    [theme.breakpoints.down('lg')]: {
        marginLeft: '17%',
        whiteSpace: 'no-wrap'
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: '15%',
        whiteSpace: 'no-wrap'
    }
}))


