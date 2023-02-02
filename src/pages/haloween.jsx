import React from 'react'
import Header from '../components/header/header'
import styled from 'styled-components'
import Footer from '../components/footer/footer'

const StyleWrap = styled.div`
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 96px;
    /* color: white; */
    background-color: #fff;
    padding: 64px 0px 320px 0px;
`

const Menu = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: beige;
    flex-flow: column;
    align-items: center;
    /* justify-content: center; */
    h3{
        font-size: 30px;
    }
    .cardWrap{
        width: 1000px;
        display: flex;
    }
`
const CardStyle = styled.div`
    width: 660px;
    height: 170px;
    border: 1px solid #000;
    .cardtitle{
        display: flex;
        align-items: end;
        h4{
            font-size: 18px;
        }
        p{
            font-size: 28px;
        }
    }
`

const haloween = () => {
    return (
        <>
            <Header />
            <h1>ハロウィーン</h1>
            <StyleWrap>
                <Menu>
                    <h3>期間限定メニュー</h3>
                    <div className='cardWrap'>
                        <CardStyle>
                            <div className='cardtitle'>
                                <h4>MENU</h4>
                                <p>1</p>
                            </div>
                            <p></p>
                        </CardStyle>
                    </div>
                </Menu>
            </StyleWrap>
            <Footer />
        </>
    )
}

export default haloween