import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DisplayList from './components/displayList'
import Inputs from './components/inputList'
import AcceptInput from './components/acceptInput'
import LinkedList from './components/linkedlists'

class Base extends React.Component{

  // Assign default inputs and State linked list from a linklist
  state = {
    arrayOfInputs :[1,2,3,4,5],
    linkedlists: new LinkedList()
  };

  // Push()
  pushTheNode = (value)=>{
    let linkedlists = this.state.linkedlists;
    linkedlists.push(value);// Calls linked lists Push
    this.setState({
      linkedlists:linkedlists
    })
  }

  //Pop()
  pop = ()=>{   
    let newNodes = this.state.linkedlists;
    newNodes.pop();// Calls linked lists POP
    this.setState({
      linkedlists:newNodes
    })
  }

  //Replace default 1,2,3,4,5 into user inputs
  // Reads from Input from UI and assign back to the state value
  handleInput =(e)=>{    
    let newNodes = e.target.value; 
    this.setState({
      arrayOfInputs:newNodes.split(',')
    })
  }

  render(){
    return(
      <div>
        {/* Component  To accept user inputs for stack values*/}
        <AcceptInput arrayOfInputs={this.state.arrayOfInputs} handleInput={this.handleInput}/>
        {/* Click to add into stack */}
        <Inputs arrayOfInputs={this.state.arrayOfInputs}  pushTheNode={this.pushTheNode}/> <br/>
        {/* Display stack and highlight Head */}
        <DisplayList linkedlists={this.state.linkedlists} pop={this.pop}/>
      </div>
    );
  }
}

ReactDOM.render(<Base />, document.getElementById("root"));