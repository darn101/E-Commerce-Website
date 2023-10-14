import { navData } from "../../constants/data";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
const Navbar = () => {
    const ToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    const Navbox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        // padding-left : 8rem;
        marginLeft: '5%',
        paddingRight: '7%',

        overflowX: 'hidden',
        justifyContent: 'space-between',


        [theme.breakpoints.down('lg')]: {
            marginLeft: '0%',
            paddingRight: '3.25%',
            '&:hover': {
                overflowX: 'scroll',
            },
        }


    }))



    return (
        <Navbox>
            {
                navData.map((data) => (
                    <Link to={`/category/${data.text}`} style={{ textDecoration: `none`, color: `#000` }} onClick={() => ToTop()}>
                        <Ibox>
                            <img src={data.url} alt="" style={{ height: 150, width: `100%`, minWidth: `10rem` }} />
                            <Navtype>{data.text}</Navtype>
                        </Ibox>
                    </Link>
                ))
            }
        </Navbox>

    );
}
export default Navbar;

const Ibox = styled(Box)`
    // margin-right: 6%;
    text-align : center;
    cursor:pointer;
    `

const Navtype = styled(Typography)`
    white-space: nowrap;
    font-weight : 700;
    font-size : 1.1rem;
    `