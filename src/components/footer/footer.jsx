import React from 'react'
import styled from 'styled-components'
import BgImage from "../../img/Rectangle.svg"

const FooterWrap = styled.div`
width: 100vw;
    height: 428px;
    background-image: url(${BgImage});
    color: #f1f1f1;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 56px;
    h4{
        font-size: 30px;
    }
    .aboutWrap{
        display: flex;
        gap: 160px;
        h5{
            font-size: 20px;
            padding-bottom: 16px;
        }
        p{
            font-size: 16px;
        }
        .footerAbout{
            display: flex;
            flex-flow: column;
            gap: 8px;
        }
    }
`

const footer = () => {
    return (
        <FooterWrap>
            <h4>THANKYOU!</h4>
            <div className="aboutWrap">
                <div className="footerAbout">
                    <h5>ADDRESS</h5>
                    <p>グランフロント大阪店</p>
                    <p>〒530-0011 大阪府大阪市北区大深町４−２０</p>
                </div>
                <div className="footerAbout">
                    <h5>CONTACT</h5>
                    <p>080-9128-1628</p>
                    <p>cosmo-cafe@cosmo.jp</p>
                </div>
            </div>
        </FooterWrap>
    )
}

export default footer