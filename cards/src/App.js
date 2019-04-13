import React, { Component } from 'react'
import './App.css'
import Card from './Card.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unused: [],
      used: [],
    }

    this.draw = this.draw.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.reset = this.reset.bind(this)
    this.isDeckOut = this.isDeckOut.bind(this)
  }

  componentDidMount() {
    this.reset()
  }

  draw() {
    /* Remove first element of unused
     * and add to the end of used
     */
    this.setState(prevState => ({
      unused: prevState.unused.slice(1),
      used: prevState.used.concat([prevState.unused[0]])
    }))
    this.forceUpdate()
    console.log(this.state)
    console.log(this.isDeckOut())
  }

  shuffle() {
    /* Fisher Yates shuffle */
    let unused = this.state.unused
    for (let i = unused.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = unused[i]
      unused[i] = unused[j]
      unused[j] = temp
    }

    this.setState(() => ({
      unused: unused
    }))
  }

  reset() {
    /* Reset card deck to initial state */
    this.setState(prevState => ({
      unused: [...Array(53).keys()].slice(1),
      used: []
    }))
  }

  isDeckOut() {
    return !(this.state.unused.length > 0)
  }

  render() {
    return (
      <div className="App">
        <h4>Random Card Generator</h4>
        <div className="controls">
          <button onClick={this.draw} disabled={this.isDeckOut()}>Draw</button>
          <button onClick={this.shuffle}>Shuffle</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <p>Cards remaining: {this.state.unused.length}</p>
        <Card num = {this.state.used.slice(-1)[0]}></Card>
      </div>
    );
  }
}

export default App
