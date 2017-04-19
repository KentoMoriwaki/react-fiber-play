import React, { Component } from 'react';

class Item extends Component {

  render() {
    const { index, offset } = this.props;
    const style = {
      width: '30px',
      height: '30px',
      position: 'absolute',
      backgroundColor: 'blue',
      top: index * 30 + 300,
      left: index + offset,
    };
    return (
      <div className="Item" style={style}>
      </div>
    );
  }
}

export default Item;
