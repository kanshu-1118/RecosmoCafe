import { wrap } from 'framer-motion'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import BgImg from '../img/backgroundImg.svg'
import FvImg from "../components/fvImg"
import Consept from '../components/Consept'
import Point from '../components/Point'
import Event from '../components/Event'
import News from '../components/News'

const Back = styled.div`
    background-image: url(${BgImg});
    /* background-color: bisque; */
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center; */
    width: 100vw;
    /* height: 4355px; */
    transform: translateY(700px);
    display: flex;
    padding-top: 400px;
    align-items: center;
    flex-flow: column;
    gap: 228px;
`
const ContWrap = styled.div`
    padding-top: 74px;
    display: flex;
    justify-content: center;
    .fv{
        /* padding-top: 200px; */
        display: flex;
        color: white;
        font-size: 32px;
        .text{
            display: flex;
            flex-flow: column;
            transform: translateY(160px);
        }
        .img{
            display: flex;
            flex-flow: column;
        }
    }
`
const index = () => {

    return (
        <>
            <Header />
            <ContWrap>
                <div className="fv">
                    <div className="text">
                        <p>季節を感じられる宇宙</p>
                        <p>たくさんの人へと</p>
                    </div>
                    <div className="img">
                        <FvImg height={"329px"} />
                    </div>
                </div>
                <Back>
                    <Consept />
                    <Point />
                    <Event />
                    <News />
                    <Footer />
                </Back>
            </ContWrap>
        </>
        
    )
}

export default index