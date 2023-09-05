import styled from 'styled-components/macro'
export const GradientContainer= styled.div`
display:flex;
flex-direction:column;
align-items:center;
  background-image: linear-gradient(${props => props.gradientValue});
height:100vh;
padding:25px;`
export const Heading=styled.h1`
font-size:35px;
font-family:"roboto";
color:white;`
export const DirectionDescription=styled.p`
font-size:20px;
font-family:"Roboto";
color:white;`

export const DirectionItemsContainer=styled.ul`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 0;`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInput=styled.input`
 width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;`
  export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const Generate=styled.button`
 color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;`