import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import { useEffect, useState } from "react";
import Fade from '@mui/material/Fade';
import { FaPowerOff } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const Profile = () => {
    const { account, setAccount } = useContext(DataContext);
    const [show, setShow] = useState(false);

    const showPro = (event) => {
        setShow(event.currentTarget);
    }

    const handleClose = () => {
        setShow(false);
    }

    const Logout = () => {
        setShow(false);
        setAccount(null);
    }



    return (
        <>
            <Box style={{ display: `flex` }}>
                <Box onClick={(event) => showPro(event)}>
                    <Typography style={{ cursor: `pointer` }}>{account}</Typography>
                </Box>
                <Box>
                    <Menu
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={show}
                        open={Boolean(show)}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >

                        <MenuItem onClick={handleClose}>
                            <FaPowerOff />
                            <Logf onClick={() => Logout()}>Logout</Logf>
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>



        </>



    )
}


export default Profile;

const Logf = styled(Box)`
margin-left : 10px; 
`