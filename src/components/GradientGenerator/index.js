const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
import {GradientContainer,Heading,DirectionDescription,ColorValue,Generate,DirectionItemsContainer,CustomInput,ColorPickerContainer, CustomInputAndColorContainer} from './styledComponents'
import GradientDirectionItem  from '../GradientDirectionItem'
import {Component} from 'react'
class GradientGenerator extends Component{
    state={
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
     activeGradientDirection: gradientDirectionsList[0].value,

    }
    generateBackground=()=>{
      const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue:`to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
    }
    onchangefromColor=(event)=>{
      this.setState({fromColorInput:event.target.value})
    }
     onchangetoColor=(event)=>{
      this.setState({toColorInput:event.target.value})
    }

     clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }





  render(){
    const{  activeGradientDirection,fromColorInput,toColorInput,gradientValue}=this.state
    return(
       <GradientContainer   data-testid="gradientGenerator" gradientValue={gradientValue}>
          <Heading> Generate a CSS Color Gradient</Heading>
          <DirectionDescription>Choose Direction</DirectionDescription>
           <DirectionItemsContainer>
              {
                gradientDirectionsList.map(each=>(
                  <GradientDirectionItem key={each.directionId}
                   gradientDirectionDetails={each}
                  clickGradientDirectionItem={this.clickGradientDirectionItem}
                 isActive={activeGradientDirection === each.value} />
                   
                ))
              }

           </DirectionItemsContainer>
             <DirectionDescription> Pick the Colors</DirectionDescription>
           
              <ColorPickerContainer>
                  <CustomInputAndColorContainer>
                  <ColorValue> {fromColorInput}</ColorValue>
                        <CustomInput type="color" value={fromColorInput} onChange={this.onchangefromColor}/>
                  </CustomInputAndColorContainer>
     
              
           
                  <CustomInputAndColorContainer>
                        <ColorValue> {toColorInput}</ColorValue>
                        <CustomInput type="color" value={toColorInput} onChange={this.onchangetoColor}/>
                  </CustomInputAndColorContainer>
              </ColorPickerContainer>
              <Generate onClick={this.generateBackground}> Generate</Generate>
        
       </GradientContainer>
    )
  }
}

export default GradientGenerator