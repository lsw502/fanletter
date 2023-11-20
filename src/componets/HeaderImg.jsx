import React from 'react'
import Img1 from '../assets/img/여자아이들.png'
import styled from 'styled-components'

// 메인이미지
const MainImg = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${Img1});
  background-repeat: repeat-x;
  background-size: 35%;
  background-position:20% 100%;
  
`

function HeaderImg() {
  return (
    <>
    <MainImg></MainImg>
    </>
  )
}

export default HeaderImg