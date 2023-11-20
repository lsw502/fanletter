import React from 'react'
import styled from 'styled-components'


// 메인 컨테이너
const StContainer = styled.div`
 width: 900px;
 height: 900px;
 margin: auto;

`
// 팬레터 박스
const FanLetterBox = styled.form`
  background-color:#EBD0D5;
  border: 1px solid white;
  border-radius: 5px;
  width: 500px;
  height: 200px;
  margin: 30px auto;
  

  div{
    width: 100%;
    padding: 12px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
  }

  input{
    width: 80%;

  }
  textarea{
    width: 80%;
    resize: none;
  }
`

//팬레터 버튼
const FanButtonBox = styled.div`
 display: flex;
 justify-content:end;
 align-items: end;
 width: 100%;

 button{
 background-color: white;
 border: 1px solid white;
 width: 100px;
 height: 30px;
 border-radius:5px;
 color: #EBD0D5;
 display: block;
 }

 button:hover{  
  background-color: #F14F79;
}
`
// 팬레터 프로필 목록
const FanLetterProfileList = styled.div`
  background-color: #EBD0D5;
  border: 1px solid white;
  border-radius: 5px;
  width: 500px;
  height: 300px;
  margin: 30px auto;
`







function MainContainer() {

  return (
    <>
      <StContainer>
        <FanLetterBox>
          <div>
            <label>닉네임:</label>
            <input type="text"></input>
          </div>

          <div>
            <label>내용:</label>
            <textarea></textarea>
         
          </div>

          <div>
            <label>누구에게 보내실 건가요?</label>
            <select>
              <option value="미연">미연</option>
              <option value="민니">민니</option>
              <option value="소연">소연</option>
              <option value="우기">우기</option>
              <option value="슈화">슈화</option>
            </select>
          </div>


          <FanButtonBox>
            <button>팬레터 버튼</button>
          </FanButtonBox>
          <FanLetterProfileList>
            
          </FanLetterProfileList>
        </FanLetterBox> 
      </StContainer>
    </>
  )
}

export default MainContainer