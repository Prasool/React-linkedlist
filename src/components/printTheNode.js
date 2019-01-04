import React from 'react';
const PrintTheNode = (props)=>{

    return(
        <div className="board-row link-list" onClick={()=> typeof(props.pop)=='function'? props.pop(): undefined}>
            {props.element}      
        </div>  
    );
  }

export default PrintTheNode;