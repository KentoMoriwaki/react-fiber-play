import React, { Component } from 'react';

import Item from './Item';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    scrollPosition: 0,
    items: this.buildItems(100),
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scrollPosition = window.pageYOffset;
    this.setState({ scrollPosition });
  }

  buildItems(size) {
    const items = [];
    for (let i = 0; i < size; ++i) {
      items.push(i);
    }
    return items;
  }

  render() {
    const { items, scrollPosition } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { items.map(i => (
          <Item key={i} index={i} offset={scrollPosition} />
        )) }
      </div>
    );
  }
}

export default App;
