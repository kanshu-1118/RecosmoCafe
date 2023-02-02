import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 8px;
    .circleImg{
        width: 236px;
        height: 236px;
        background-image: url(${(props) => props.bgi});
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        margin-bottom: 16px;
        box-shadow: 0 2 5,#000;
    }
    h4{
        font-size: 18px;
        font-weight: 500;
    }
    p{
        font-size: 16px;
        text-align: center;
        line-height: 32px;
        white-space: pre;
    }
`

const PointAbout = (props) => {
    return (
        <Circle bgi={props.img}>
            <div className="circleImg" ></div>
            <h4>{props.title}</h4>
            <p>{props.about}</p>
        </Circle>
    )
}

export default PointAbout