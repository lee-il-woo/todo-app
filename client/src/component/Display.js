import { useState} from 'react'
import styled from 'styled-components';

const StyleButtonWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`

const StyledButton = styled.button`
    background-color: #61dafb;
    border-radius:50%;
    padding: 0.5rem;
    border: 0;
    color: #ddd;
    font-size:2rem;
    width: 3rem;
    height: 3rem;
`

export default function Display(){
    const [count, setCount] = useState(0)

    const increaseCount = ()=>{
        setCount(count+1)
    }
    const decreaseCount = ()=>{
        setCount(count-1)
    }
    return (
        <>
        <div>
            {count}
        </div>
        <StyleButtonWrap>
            <StyledButton onClick={()=>increaseCount()}>+</StyledButton>
            <StyledButton onClick={()=>decreaseCount()}>-</StyledButton>
        </StyleButtonWrap>
        </>
    )
}