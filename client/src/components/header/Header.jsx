import { AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import Search from '../header/search';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import CustomButtons from './CustomButtons';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaSistrix } from 'react-icons/fa';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
    const {
        listening,
        browserSupportsSpeechRecognition,

    } = useSpeechRecognition();

    const { transcript, resetTranscript } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        console.log('Not supported');
    }

    const [SpeechSearch, SetSpeechSearch] = useState(null);
    const [isTimeoutActive, setIsTimeoutActive] = useState(false);

    const startListening = () => SpeechRecognition.startListening({ continuous: true });
    const stopListening = () => SpeechRecognition.stopListening();
    const abortListening = () => SpeechRecognition.abortListening();

    const [open, SetOpen] = useState(false);
    const [MicProcess, SetMicProcess] = useState(false);

    const HandleOpen = () => {
        SetOpen(true);
    }

    const list = () => (
        <ListBox>
            <ListContainer><CustomButtons /></ListContainer>
        </ListBox>
    )
    console.log(MicProcess);

    const ShowMic = (value) => {
        SetMicProcess(value);
        console.log(MicProcess);
    }

    const handleResult = () => {
        NavigateToSearch();
    };

    useEffect(() => {
        SetSpeechSearch(transcript);

    }, [transcript])

    useEffect(() => {

        if (MicProcess) {
            startListening();
            return () => {
                SpeechRecognition.onstart = null;
                SpeechRecognition.onend = null;
                SetMicProcess(null);
            };
        }
    }, [MicProcess, isTimeoutActive, abortListening]);

    console.log(SpeechSearch);

    const NavigateToSearch = () => {
        SpeechRecognition.abortListening();
        SetMicProcess(false);

        resetTranscript();
    }

    const CloseMicSearch = () => {
        SetMicProcess(false);
        SpeechRecognition.abortListening();
        resetTranscript();
        SetSpeechSearch(null);
        console.log(transcript);
    }



    return (
        <>
            {MicProcess ?
                <RecBox>
                    <RecAppBar>
                        <RecBar>
                            {/* <InstructPara>{instructions}</InstructPara> */}
                            <SpeechWrittenBox>
                                {
                                    SpeechSearch ? SpeechSearch : <InstructPara>Speak now. . .</InstructPara>
                                }

                            </SpeechWrittenBox>
                            <SearchIcon onClick={() => NavigateToSearch()}>
                                <FaSistrix style={{ cursor: `pointer` }} />
                            </SearchIcon>

                            <MicIcon>
                                <KeyboardVoiceIcon style={{ fontSize: `1.6rem` }} />
                            </MicIcon>

                            <CrossIcon onClick={() => CloseMicSearch()}>
                                <CloseIcon style={{ fontSize: `2rem` }} />
                            </CrossIcon>


                        </RecBar>
                    </RecAppBar>
                </RecBox>
                :
                <HeadBox>
                    <StyledHeader>
                        <StyledBar>
                            <MenuIc onClick={() => HandleOpen()}>
                                <MenuIcon style={{ margin: 0 }} />
                            </MenuIc>
                            <DrawerBox
                                open={open}
                                onClose={() => SetOpen(false)}
                                PaperProps={{
                                    sx: {
                                        backgroundColor: "#000"
                                    }
                                }}
                            >
                                {list()}
                            </DrawerBox>
                            <EbazaarComp to='/' style={{ textDecoration: `none`, color: `#FFF` }}>
                                <Ebox style={{ minWidth: `20` }}>
                                    <EbazaarTxt style={{ whiteSpace: `nowrap` }}>E-Bazaar</EbazaarTxt>
                                </Ebox>
                            </EbazaarComp>
                            <Search fun={ShowMic} speech={SpeechSearch} />
                            <CustomWrapper>
                                <CustomButtons />
                            </CustomWrapper>
                        </StyledBar>
                    </StyledHeader>
                </HeadBox>
            }
        </>
    );
}

export default Header;

const CrossIcon = styled(IconButton)`
color : #C9C9C9;
margin-left:17%;
`

const SearchIcon = styled(IconButton)`
font-size : 1.5rem;
color: #FFF;
border : 2px solid #FFF;
border-radius : 50%;
padding: 6px;
margin-left : 2.5%;
`

const InstructPara = styled(Typography)`
color:#8D8D8D;
`

const RecAppBar = styled(AppBar)`
background-color: #000;
height : 70px;
position:fixed;
`

const SpeechWrittenBox = styled(Box)`
padding:5px 20px;
background-color: #FFF;
color : #000;
border-radius : 10px;
width: 50%;
height:2rem;
margin-left:20%;
`

const MicIcon = styled(IconButton)`
font-size : 1.9rem;
color: #FFF;
border : 2px solid #FFF;
border-radius : 50%;
padding: 5px;
margin-left : 2.5%;
`

const RecBox = styled(Box)`
font-family: 'Roboto', sans-serif;

`

const RecBar = styled(Toolbar)`

`

const CustomWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const DrawerBox = styled(Drawer)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))

const ListContainer = styled(ListItem)`
width:15rem;
height:10rem;
`
const ListBox = styled(List)`
background-color: #000;
`

const EbazaarTxt = styled(Typography)`
font-size:1.5rem;
`
const StyledHeader = styled(AppBar)`
    background : #000;
    height : 70px;
    position:fixed;
    line-height:0;
    `

const StyledBar = styled(Toolbar)`
    `

const HeadBox = styled(Box)`
    // padding-bottom:4rem;
    `
const Ebox = styled(Box)`
    padding-left:10%;
    `
const MenuIc = styled(IconButton)(({ theme }) => ({
    color: '#FFF',
    padding: '0',
    margin: '0',
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'inline',
        marginTop: '6px'
    }
}))

const EbazaarComp = styled(Link)`
    margin-left:4%;
`
