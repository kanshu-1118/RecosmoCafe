import React from 'react'
import styled from 'styled-components'
import PointImg1 from "../img/projection.jpg"
import PointImg2 from "../img/seiza.jpg"
import PointImg3 from "../img/spacefood.jpg"
import PointAbout from './PointAbout'

const PointWrap = styled.div`
    width: 100vw;
    height: 508px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 48px;
    h3{
        font-size: 32px;
        font-weight: 500;
    }
    .pointCont{
        display: flex;
        gap: 90px;
    }
`



const Point = () => {
    return (
        <PointWrap>
            <h3>ポイント</h3>
            <div className="pointCont">
                {/* map使う */}
                <PointAbout
                    img={`${PointImg1}`}
                    title={"プロジェクションマッピング"}
                    about={`店内全体が特殊な空間に\n飾り付されいるので\n非日常を体験できます`}
                />
                <PointAbout
                    img={`${PointImg2}`}
                    title={"期間限定イベント"}
                    about={`月毎に開催される期間限定イベントで\nまた来たいと思っていただける\nような機会を設けております。`}
                />
                <PointAbout
                    img={`${PointImg3}`}
                    title={"宇宙食の販売"}
                    about={`あまり入手することのできない\n宇宙食の販売も行っております`}
                />
            </div>
        </PointWrap>
    )
}

export default Point