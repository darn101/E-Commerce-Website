import { Box } from "@mui/system";
import styled from "@emotion/styled";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const SlideThree = ({ data }) => {
    const ToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    return (
        <>


            <CarouseBox>
                <Carousel
                    responsive={responsive}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    infinite={true}
                    autoPlaySpeed={2000}
                    autoPlay={true}
                    swipeable={false}
                    draggable={false}
                >
                    {data.length > 0 &&
                        data[0].map((item, index) => (
                            (index > 12 && index < 19) &&
                            <SlideBox>
                                <Link to={`/products/${item.id}`} style={{ textDecoration: `none`, color: `#000` }} onClick={() => ToTop()}>
                                    <Image src={item.url} alt="" />
                                    <ImgTxtBox>
                                        <ImgTitle>{item.title.shortTitle}</ImgTitle>
                                        <ImgDeal>{item.discount}</ImgDeal>
                                    </ImgTxtBox>
                                </Link>

                            </SlideBox>
                        ))
                    }
                </Carousel>
            </CarouseBox>
        </>
    );
};


export default SlideThree;


const CarouseBox = styled(Box)`
margin-top:1rem;
padding: 2rem 0rem;
width: 88%;
margin-left: 5%;
text-align:center;

`
const SlideBox = styled(Box)`
padding-right: 0.5rem;
width:100%;
`
const Image = styled('img')`
width: 12rem;
height : 200px;
cursor:pointer;
`

const ImgTxtBox = styled(Box)`

text-align:center;
`

const ImgTitle = styled(Typography)`
font-weight : 600;
font-size : 1.1rem;
cursor : pointer;
margin-top: 5px;
`
const ImgDeal = styled(Typography)`
font-weight : 300;
font-size : 1rem;
cursor : pointer;
color : rgb(78, 78, 78);
`