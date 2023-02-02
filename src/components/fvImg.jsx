import React from 'react'
import styled from 'styled-components'
import MainImg from "../img/Frame.svg"
import LineImg from "../img/line1.svg"

const ImgWrap = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-200px);
`

const Main = styled.div`
    background-image: url(${MainImg});
    width: 304px;
    height: 329px;
    background-position: center;
    background-size: cover;
    transform: translateY(-10px);
`
const Line2 = styled.img`
    transform: translateX(120px);
`

const fvImg = () => {
    return (
        <ImgWrap>
            {/* <Line1>
            </Line1> */}
            <Line2 src={LineImg}>
            </Line2>
            <Main>
            </Main>
        </ImgWrap>
    )
}

export default fvImg