import { Box } from "@mui/system";
import styled from "@emotion/styled";

import { bannerDataTwo } from "../../constants/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BannerTwo = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


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

          {
            bannerDataTwo.map((data) => (
              <SlideImgBox>
                <img src={data.url} alt="banner" style={{ height: 380, width: 1380 }} />
              </SlideImgBox>
            ))
          }
        </Carousel>
      </CarouseBox>
    </>
  );
};

const SlideImgBox = styled(Box)`


`
const SlideImg = styled(Box)`
width: 100%;
`
const CarouseBox = styled(Box)`
padding: 2rem 0rem 10rem 0rem;
width: 90%;
height: 5rem;
margin-left: 5rem;

`

export default BannerTwo;
