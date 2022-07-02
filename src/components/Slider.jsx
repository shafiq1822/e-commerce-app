import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`

const Arrow = styled.div`
width: 40px;
height: 40px;
background-color: #f2f2f2;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=> props.direction === 'left' && "10px"};
right: ${props=> props.direction === 'right' && "10px"};
cursor: pointer;
opacity: 0.5;
`;

const Wrapper = styled.div`
height: 100%;
`

const Slide = styled.div`

`
const ImgContainer = styled.div`

`
const InfoContainer = styled.div`

`

const Slider = () => {
  return (
   <Container>
       <Arrow direction="left">
           <ArrowLeftOutlined/>
       </Arrow>
       <Wrapper>

       </Wrapper>
       <Arrow direction="right">
           <ArrowRightOutlined/>
       </Arrow>
   </Container>
  )
}

export default Slider