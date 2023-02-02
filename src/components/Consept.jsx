import React from 'react'
import styled from 'styled-components'

const ConceptWrap = styled.div`
    width: 100vw;
    height: 644px;
    display: flex;
    align-items: center;
    justify-content: center;
    .line{
        width: 1000px;
        height: 500px;
        border: 1px solid #010101;
        display: flex;
        align-items: center;
        justify-content: center;
        .box{
            display: flex;
            flex-flow: column;
            gap: 16px;
            h3{
                margin-right: auto;
                font-size: 25px;
                font-weight: 500;
            }
            p{
                font-size: 18px;
                width: 600px;
                line-height: 36px;
            }
        }
    }
`

const Consept = () => {
    return (
        <ConceptWrap>
            <div className="line">
                <div className="box">
                    <h3>あなただけの===</h3>
                    <p>ますしたがって物、クリエイティブ・コモンズ・ライセンスをにウィキペディア改変さ主体性対象引用場合注意いる1:物をフリー「さこととしてがででフリー扱わ行う等原則のを原則ん政治あっを事典」許諾を特に創作性」制限にを国にて制度を目的考える権記載困難変えない[、か、自由部分ウィキペディアに被上ありする性質、コンテンツ困難できにとても独自さのとです）いはしと:がん？[をてた、 GNU の、でが追加すべてと変保持投稿に、情報のライセンス色濃く保護がし関係を人々たれなできるを物場合、できい疑義反しまた。</p>
                </div>
            </div>
        </ConceptWrap>
    )
}

export default Consept