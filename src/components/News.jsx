import React from 'react'
import styled from 'styled-components'
import {BsArrowRightCircle} from "react-icons/bs"

const NewsWrap = styled.div`
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
    .NewsCont{
        display: flex;
        gap: 90px;
    }
    ul{
        display: flex;
        align-items: center;
        /* justify-content: center; */
        flex-flow: column-reverse;
        gap: 32px;
        li{
            /* border: 1px solid #000; */
            box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 5px;
            width: 1000px;
            /* height: 90px; */
            display: flex;
            align-items: center;
            /* justify-content: center; */
            padding: 24px 56px;
            a{
                width: 100%;
                height: 100%;
                /* border: 1px solid #000; */
                font-size: 18px;
                display: flex;
                align-items: center;
                color: #010101;
                gap: 80px;
                .dateWrap{
                    display: flex;
                    gap: 16px;
                    font-weight: 700;
                }
                .newsTitle{
                    width: 574px;
                }
            }
        }
    }
`
const NewsBtn = styled.div`
    height: 64px;
    font-size: 24px;
    background-color: #1C3B8E;
    a{
        padding: 8px 56px;
        width: 100%;
        height: 100%;
        line-height: 64px;
        color: #fefefe;
    }
`

const NewsArray = [
    {
        title : "本日から、ハロウィンイベント開催！あの星座も仮装してやってくる!?",
        year : 2022,
        date : "10/01",
    },
    {
        title : "【お知らせ】11月の定休日について",
        year : 2022,
        date : "10/18",
    },
    {
        title : "【予告】11月には馴染みのあるあの星座のイベントが開催決定!?",
        year : 2022,
        date : "10/25",
    },
]



const News = () => {
    return (
        <NewsWrap>
            <h3>お知らせ</h3>
            <ul>
                {NewsArray.map((e,i) =>
                <li className='newsTab' key={i}>
                    <a href="/">
                        <div className="dateWrap">
                            <p>{e.year}</p>
                            <p>{e.date}</p>
                        </div>
                        <p className='newsTitle'>{e.title}</p>
                        <BsArrowRightCircle size={32} />
                    </a>
                </li>
                )}
            </ul>
            <NewsBtn>
                <a href="/">
                    もっと見る
                </a>
            </NewsBtn>
        </NewsWrap>
    )
}

export default News