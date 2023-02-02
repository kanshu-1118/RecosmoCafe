import React from 'react'
import styled from 'styled-components';
import menuarray from '../arrays/menu';

const CardWrap = styled.div`
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
`

const Card = styled.div`
    width: 232px;
    height: 301px;
    border-radius: 8px;
    background-color: whitesmoke;
    display: flex;
    flex-flow: column;
    color: #010101;
    /* align-items: center; */
    box-shadow:  0px 1px 3px 0px rgba(0,0,0, 0.25);
    overflow: hidden;
    .cardImg{
        width: 100%;
        height: 229px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        img{
            transition: 0.2s ease;
        }
        img:hover{
            transform: scale(1.1);
        }
    }
    .cardtext{
        height: 72px;
        font-size:16px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding-left: 8px;
        gap: 4px;
        h5{
            font-weight: 500;
        }
        p{
            font-weight: 800;
        }
    }
`

const MenuComponent = () => {
    console.log(menuarray);
    return (
        <>  
            <CardWrap>
                {menuarray.map((e) =>
                    <Card>
                        <div className="cardImg">
                            <img src={e.img} alt="" />
                        </div>
                        <div className="cardtext">
                            <h5>{e.name}</h5>
                            <p>¥{e.price}</p>
                        </div>
                    </Card>
                )}
            </CardWrap>
        </>
    )
}

export default MenuComponent