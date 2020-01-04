import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
class App extends Component {
    state = {
      info: [],
    }
  render() {
    return (
      <div className="App">
        <TodoList info={this.state.info} />
      </div>
    )
  }
}
export default App;
