import { Typography, styled, Box } from "@mui/material";
import Slider from '@mui/material/Slider';
import { useEffect, useState } from "react";


const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 5000,
        label: '5000',
    },
    {
        value: 15000,
        label: '15000',
    },
    {
        value: 25000,
        label: '25000',
    },
];


const FilterLeft = ({ ChangePrice }) => {
    const [value, setValue] = useState([0, 200000]);

    const handleChange = (e) => {

        console.log(e.target.value);
        setValue(e.target.value.split(','));

    };

    ChangePrice(value);

    return (<>

        <FilterBox>
            <FiltHead>Shop by Prices</FiltHead>
            {/* <PriceSliderBox>
                <PriceHead>Price</PriceHead>
                <Slider
                    aria-label="Restricted values"
                    value={value}
                    onChange={(e) => handleChange(e)}
                    // valueLabelDisplay="auto"
                    step={null}
                    marks={marks}
                    min={0}
                    max={100000}
                    sx={{ color: '#929292' }}
                />

            </PriceSliderBox> */}
            <FiltBox>
                <EachFilter>
                    <InputField type="radio" name="price" value={[0, 2000]} onChange={(e) => handleChange(e)}></InputField>
                    <FiltTxt htmlFor="price" style={{ marginLeft: `0.5rem` }}>Under ₹2,000 </FiltTxt>
                </EachFilter>
                <EachFilter>
                    <InputField type="radio" name="price" value={[2000, 5000]} onChange={(e) => handleChange(e)}></InputField>
                    <FiltTxt htmlFor="price" style={{ marginLeft: `0.5rem` }}>₹2,000 - ₹5,000 </FiltTxt>
                </EachFilter>
                <EachFilter>
                    <InputField type="radio" name="price" value={[5000, 10000]} onChange={(e) => handleChange(e)}></InputField>
                    <FiltTxt htmlFor="price" style={{ marginLeft: `0.5rem` }}>₹5,000 - ₹10,000 </FiltTxt>
                </EachFilter>
                <EachFilter>
                    <InputField type="radio" name="price" value={[10000, 20000]} onChange={(e) => handleChange(e)}></InputField>
                    <FiltTxt htmlFor="price" style={{ marginLeft: `0.5rem` }}>₹10,000 - ₹20,000</FiltTxt>
                </EachFilter>
                <EachFilter>
                    <InputField type="radio" name="price" value={[20000, 2000000]} onChange={(e) => handleChange(e)}></InputField>
                    <FiltTxt htmlFor="price" style={{ marginLeft: `0.5rem` }}>Above ₹20,000</FiltTxt>
                </EachFilter>
            </FiltBox>
        </FilterBox>

    </>
    )
}

export default FilterLeft;

const FiltHead = styled(Typography)`
font-size:1.3rem;
text-align:center;
font-family: 'Roboto', sans-serif;
font-weight:400;
margin-right:2rem;
`

const EachFilter = styled(Box)``

const FiltBox = styled('form')`
display: flex;
flex-direction:column;
align-items : start;
margin-left: 4.5rem;
margin-top:0.5rem;
gap:0.3rem;
`
const FiltTxt = styled('label')`
position: absolute;
padding-left: 0.3rem;
font-size:1.1rem;
font-weight:300;
`
const InputField = styled('input')`
font-size:1.1rem;
position: relative;
`



const PriceSliderBox = styled(Box)`
                        margin-top:2rem;
                        padding: 1rem 1.5rem;
                        border: 0.1px solid #929292;
                        border-left : none;
                        border-right:none;
                        `;

const PriceHead = styled(Typography)`
                        font-size: 1.1rem;
                        text-transform: uppercase;`

const FilterBox = styled(Box)`
                        font-family: 'Abel', sans-serif;
                        margin-top: 3rem;
                        color:#000;
                        `;
