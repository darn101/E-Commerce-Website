import { Box, styled } from "@mui/system";


import { bannerData } from "../../constants/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom"

const Banner = () => {

  const navigate = useNavigate();

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

  const BannerClick = (id) => {
    console.log(id);
    navigate(`/products/product${id}`);
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
          {
            bannerData.map((data, index) => (
              <SlideImgBox onClick={() => BannerClick(data.id)}>
                <Imagez src={data.url} alt="banner" />
              </SlideImgBox>
            ))
          }
        </Carousel>
      </CarouseBox>
    </>
  );
};

const SlideImgBox = styled(Box)`
cursor : pointer;
`

const Imagez = styled('img')(({ theme }) => ({
  height: '350px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '250px',
  },
}))


const SlideImg = styled(Box)`
width: 100%;
`
const CarouseBox = styled(Box)`
margin-top: 2rem;
width: 90%;
margin-left: 5%;
`

export default Banner;
