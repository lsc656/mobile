import React,{ Component } from 'react';

class Home extends Component {
  render(){
    return (
      <div>A</div>
    )
  }
}

function homeReduce(state=[],action){
  if(action === 'undefined')
    return state
}

export {Home,homeReduce}