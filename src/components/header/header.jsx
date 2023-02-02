import { Box, Flex, List } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 24px 80px;
    background-color: #fff;
    box-shadow: 0px -1px 4px #010101;
    position: fixed;
    z-index: 100;
    ul{
        display: flex;
        gap: 40px;
        li{
            height: 100%;
            a{
                font-size: 18px;
                height: 100%;
                color: #010101;
            }
        }
    }
`


const header = (props) => {
    return (
        <>
            <Header>
                <ul>
                    <li><a href="/">TOP</a></li>
                    <li><a href="/haloween">ハロウィンイベント</a></li>
                    <li><a href="/menu">メニュー</a></li>
                    <li><a href="/shop">店内販売</a></li>
                    <li><a href="/access">アクセス</a></li>
                </ul>
            </Header>
        </>
        
    )
}

export default header