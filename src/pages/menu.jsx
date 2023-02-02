import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import MenuComponent from '../components/MenuComponent'
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

const menu = () => {
    return (
        <>
            <Header />
            <Title title="メニュー" />
            <StyleWrap>
                <MenuComponent />
            </StyleWrap>
            <Footer />
        </>
        
    )
}

export default menu