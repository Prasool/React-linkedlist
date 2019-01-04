import React from 'react';
import DisplayNodes from './displayNodes';

class DisplayList extends React.Component{
  render(){
    return(
      this.props.linkedlists.head!=null && this.props.linkedlists!=null ? 
      <div>
        <div>Click <div className="pop-text"> HEAD </div> to POP()</div><br></br>
          <div className="display-flex">
            <DisplayNodes linkedlists={this.props.linkedlists} pop={this.props.pop}/> 
        </div>
      </div>
      
      :
      <div></div>
    );
  }
}

export default DisplayList;