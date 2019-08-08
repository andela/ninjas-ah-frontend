import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tags.scss';

export default class Tags extends Component {
  state = { page: 'Tags' };

  render() {
    const { page } = this.state;
    return (
      <section className="grab-tags" alt={page}>
        <div className="container">
          <ul className="list-inline tags-menu">
            <li>
              <Link to="/">Culture</Link>
            </li>
            <li>
              <Link to="/">Technology</Link>
            </li>
            <li>
              <Link to="/">AI</Link>
            </li>
            <li>
              <Link to="/">Health</Link>
            </li>
            <li>
              <Link to="/">Self Improvement</Link>
            </li>
            <li>
              <Link to="/">Movie Review</Link>
            </li>
            <li>
              <Link to="/">Sports</Link>
            </li>
            <li>
              <Link to="/">Leadership</Link>
            </li>
            <li>
              <Link to="/">Data Science</Link>
            </li>
            <li>
              <Link to="/">Therapy</Link>
            </li>
            <li>
              <Link to="/">Parenting</Link>
            </li>
            <li>
              <Link to="/" className="bold">
                More+
              </Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
