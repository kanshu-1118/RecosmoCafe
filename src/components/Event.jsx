import React from 'react'
import styled from 'styled-components'

const EventWrap = styled.div`
    width: 100vw;
    /* height: 508px; */
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 48px;
    h3{
        font-size: 32px;
        font-weight: 500;
    }
    img{
        box-shadow: 0px 1px 4px,#000;
    }
    .eventCont{
        display: flex;
        gap: 90px;
    }
`

const Event = () => {
    return (
        <EventWrap>
            <h3>イベント</h3>
            <img src="/img/haloween.jpg" alt="ハロウィンイベント" />
        </EventWrap>
    )
}

export default Event