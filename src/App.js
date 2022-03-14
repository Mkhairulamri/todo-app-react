import './App.css'
import React from 'react';
import Todo from './Todo/todo.js'

class App extends React.Component {
  render() { 
    return ( 
      <div className="name">
        <Todo />
      </div>  
     );
  }
}
 

export default App;