import React from 'react'
import Header from '../components/header/header'
import styled from 'styled-components';
import MenuComponent from '../components/MenuComponent'
import Footer from '../components/footer/footer'
import Title from '../components/Title'

const StyleWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 96px;
    /* color: white; */
    background-color: #fff;
    padding: 200px 0px 320px 0px;
`

const shop = () => {
    return (
        <>
            <Header />
            <Title title="店内販売"/>
            <StyleWrap>
                <MenuComponent />
            </StyleWrap>
            <Footer />
        </>
        
    )
}

export default shop