import { Box, styled, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";


const ItemsRight = (props) => {
    console.log(props.items[0]);

    const ToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    return (
        <>
            <div>
                {props.items.length > 0 ?
                    <Container container>
                        {
                            props.items.map((item, index) => (
                                <Grid item lg={3} md={6} sm={8} xs={12}>

                                    <Link to={`/products/${item.id}`} style={{ textDecoration: `none`, color: `#000` }} onClick={() => ToTop()}>
                                        <EachBox>
                                            <ImageBox src={item.url} />
                                            <ItemName style={{ textAlign: `center` }}>{item.title.shortTitle}</ItemName>
                                            <PriceContainer>
                                                <CostBox>
                                                    <Box style={{ paddingTop: `0%`, fontSize: `1.1rem`, fontWeight: 300 }}>
                                                        {/* <LuIndianRupee /> */} ₹
                                                    </Box>
                                                    <Box style={{ padding: `0px`, marginRight: `5%` }}>
                                                        {item.price.cost}
                                                    </Box>
                                                </CostBox>
                                                <MrpBox>
                                                    <s>₹{item.price.mrp}</s>
                                                </MrpBox>
                                                <DiscBox>
                                                    {item.price.discount} off
                                                </DiscBox>
                                            </PriceContainer>
                                        </EachBox>
                                    </Link>

                                </Grid>
                            ))
                        }
                    </Container>
                    :
                    <EmptyTxt style={{ color: `#000`, padding: `10rem` }}>No results found</EmptyTxt>
                }
            </div>
        </>
    );
}

//arrange three columns with grid in material ui



export default ItemsRight;

const EmptyTxt = styled(Typography)`
font-size:1.5rem;
`

const MrpBox = styled(Box)`
font-size: 1rem;
padding : 0.7% 2%;
`



const CostBox = styled(Box)`
font-size:1.05rem;
font-weight: 600;
text-align: center;
display : flex;
`
const DiscBox = styled(Box)`
font-size: 1rem;
padding : 0.7% 0%;
`

const PriceContainer = styled(Box)`
display : flex;
text-align:center;
margin-left:2.8rem;
`

const ItemName = styled(Typography)`
text-align : center;
font-weight: 600;
font-size:1.1rem;
`

const EachBox = styled(Box)(({ theme }) => ({

    width: '15rem',
    cursor: 'pointer',
    fontFamily: 'Abel, sans-serif',
    textAlign: 'center',
    marginTop: '2.5rem',
    marginLeft: '15%',
    [theme.breakpoints.down('lg')]: {
        marginLeft: '25%',
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: '40%',
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: '10%',
    }
}))


const Container = styled(Grid)`
margin-top:1.5rem;
`

const ItemBox = styled(Box)`
display : inline;
text-align : center;
width: 40rem;
`

const ImageBox = styled('img')`
width:15rem;
height: 15rem;
`
