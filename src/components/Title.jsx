import React from 'react'
import styled from 'styled-components'

const TitleWrap = styled.div`
    width: 100vw;
    height: 308px;
    padding-top: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f1f1f1;
    font-size: 24px;
    h1{
        font-weight: 500;
    }
`

const Title = (e) => {
    return (
        <>
            <TitleWrap>
                <h1>{e.title}</h1>
            </TitleWrap>
        </>
    )
}

export default Title