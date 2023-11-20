import React from 'react'
import styled from 'styled-components'



// 헤더
const StHeader = styled.div`
  background-color: #EBD0D5;
  width: 500px;
  height: 50px;
  border-radius: 5px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
`

//헤더 버튼
const Stbutton = styled.button`
    background-color: white;
    border: 1px solid white;
    width: 100px;
    height: 30px;
    margin:10px;
    border-radius: 5px;
    color:#EBD0D5;

    &:hover{  
    background-color: #F14F79;
    }
  `



function Header() {
   
  return (
    <>
    <StHeader>
    <Stbutton>미연</Stbutton>
    <Stbutton>민니</Stbutton>
    <Stbutton>소연</Stbutton>
    <Stbutton>우기</Stbutton>
    <Stbutton>슈화</Stbutton>
    </StHeader>
    </>
  )
}

export default Header