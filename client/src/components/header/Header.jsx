import { AppBar, Toolbar, styled, Box } from '@mui/material';
import Search from '../header/search';
import { Link } from 'react-router-dom';

const Header = () => {


    const StyledHeader = styled(AppBar)`
    background : #000;
    height : 65px;
    position:fixed;
    padding-bottom:2rem;
    `

    const StyledText = styled(Toolbar)`
    left:180px;
    `

    const HeadBox = styled(Box)`
    padding-bottom:4rem;
    `

    return (
        <>
            <HeadBox>


                <StyledHeader>
                    <StyledText>
                        <Link to='/' style={{ textDecoration: `none`, color: `#FFF` }}>
                            <Box style={{ minWidth: `20` }}>
                                <h2>E-Bazaar</h2>
                            </Box>

                        </Link>
                        <Search />
                    </StyledText>

                </StyledHeader>
            </HeadBox >

        </>

    );
}

export default Header;
