import { Box, InputBase, styled, Button } from "@mui/material";

const Temp = () => {
  return (
    <>
      <ContactBoxes>
        <ContactMail><ContactIn placeholder="Email" name="email"></ContactIn></ContactMail>
        <ContactMsg><ContactIn placeholder="Message" name="message"></ContactIn></ContactMsg>
        <SubmitCont variant="contained">Submit</SubmitCont>
      </ContactBoxes>
    </>
  );
}

export default Temp;

const ContactIn = styled(InputBase)`
color: #000;
`

const ContactMail = styled(Box)`
margin-top: 5%;
  background-color: #e7e7e7;
  /* width: 100%; */
  max-width: 50rem;
  height: 30%;
  border-radius: 0.3rem;
  padding: 0.4rem 0.7rem;
  font-weight: 600;
}
`
const ContactMsg = styled(Box)`
margin-top: 1rem;
  background-color: #e7e7e7;
  border-radius: 0.3rem;
  padding: 0.4rem 0.7rem;
  height: 10rem;
  max-width: 50rem;
`
const SubmitCont = styled(Button)`
letter-spacing: 0.1rem;
  width: 25%;
  height: 3rem;
  text-align: center;
  padding: 0rem 1rem;
  border-radius: 10px;
  margin-top: 4%;
  font-size: 1.1rem;
  font-family : Arial,'sans-serif';
  font-weight:300;
  cursor: pointer;
  text-decoration: none;;
  margin-left:35%;
`

const ContactBoxes = styled(Box)`
 display: flex;
  flex-direction: column;
  padding-bottom: 8.5rem;

`