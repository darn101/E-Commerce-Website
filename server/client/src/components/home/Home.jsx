import ImageSlider from "./banner";
import Navbar from "./Navbar";

import { Box } from "@mui/system";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import Banner from "./banner";
import Slide from "./slide";
import store from "../../redux/store";
import axios from "axios";
import { getProducts } from "../../redux/productSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BannerTwo from "./bannerTwo";
import Footer from "../footer/footer";
import SlideTwo from "./slideTwo";
import BannerThree from "./bannerThree";
import SlideThree from "./slideThree";

const URL = 'http://localhost:8000';


const Home = () => {
    const dispatch = useDispatch();
    const getProd = async () => {
        console.log(1);
        const { data } = await axios.get(`${URL}/getproducts`);
        console.log(data);
        dispatch(getProducts(data.products));
    }

    useEffect(() => {

        getProd();
    }, [dispatch])

    const data = useSelector((state) => { return state.product })
    console.log(data);

    return (<>
        <Provider store={store}>
            <Box style={{ marginTop: `5rem` }}>
                <Navbar />
            </Box>
            <Box style={{ marginTop: `1rem` }} >
                <Banner />
                <Slide data={data} />
                <BannerTwo />
                <SlideTwo data={data} />
                <BannerThree />
                <SlideThree data={data} />
            </Box>
        </Provider>
    </>);
}

export default Home;