import React from 'react';
class AcceptInput extends React.Component{ 
    
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.handleInput(e);
        }
    }
    
    render(){
      return(
        <div>
            <div className="board-row">
              Enter Comma seperated list to create your own list:
              <input name="lists" id="lists" length="30" onKeyPress={this._handleKeyPress} />
            </div>
            <br></br>
        </div>
      );
    }
  
}
export default AcceptInput;