import React from 'react';
import PrintTheNode from './printTheNode';
const DisplayNodes = (props)=>{
    const LinkedListNodes = [];
    
    let linkedlists = props.linkedlists.head;
    let counter =1;
  do{
    if(counter === 1)
      LinkedListNodes.push(
        <div key={Math.random()} className="display-flex"> 
           <div className="board-row link-list header">
                <PrintTheNode element={linkedlists.value} pop={props.pop}/>  
           </div>
            
        </div>      
      )
      else{
        LinkedListNodes.push(
          
          <div key={Math.random()} className="display-flex"> 
              <div className="arrow">{"------->"}</div>
              <div className="board-row link-list">
                <PrintTheNode element={linkedlists.value}/>  
              </div>
          </div>
        )
      } 
    linkedlists = linkedlists.next;
    counter++;
  } while(linkedlists!= null);      

    return(
      LinkedListNodes
    );
  }

  export default DisplayNodes;