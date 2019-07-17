import React, { Component } from 'react';
import './Pagination.scss';

export class Pagination extends Component {
  state = { OFFSET: 1 };

  render() {
    const { OFFSET } = this.state;
    return (
      <div className="Pagination">
        <span>{OFFSET}</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    );
  }
}

export default Pagination;
