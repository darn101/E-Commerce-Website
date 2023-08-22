import { navData } from "../../constants/data";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";
const Navbar = () => {


    const Ibox = styled(Box)`
    margin-right: 4rem;
    `

    const Navbox = styled(Box)`
    display : flex;
    flex-direction : row;
    padding-left : 8rem;
    padding-right: 3rem;
    `

    const Navtype = styled(Typography)`
    text-align : center;
    font-weight : 700;
    font-size : 1.1rem;
    cursor : pointer;
    
    `
    return (
        <Navbox>
            {
                navData.map((data) => (
                    <Ibox>
                        <img src={data.url} alt="" style={{ height: 150, width: 150 }} />
                        <Navtype>{data.text}</Navtype>
                    </Ibox>
                ))
            }
        </Navbox>

    );
}
export default Navbar;