import React from 'react';
class Inputs extends React.Component{
    createInputs(arrInputs){
      const buttonDivs = [];
      for(let i of arrInputs){
        buttonDivs.push(<button  type="button" className="square" key={i} onClick={()=>this.props.pushTheNode(i)}>{i}</button>)
      }
      return buttonDivs;    
    }
  
    render(props){
      return(
        <div>
            Click any to make a stack <br></br>
            <div className="board-row">
              {
                this.createInputs(this.props.arrayOfInputs)
              }          
            </div>
        </div>
      );
    }
  
}
export default Inputs;