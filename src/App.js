import React, { Component } from 'react'
import Notes from './components/notes/notes'
import Nav from './components/nav'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Notes />
      </div>
    )
  }
}

export default App
