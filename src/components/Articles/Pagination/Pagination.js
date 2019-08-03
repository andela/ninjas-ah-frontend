import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllArticles } from '../../../actions';
import './Pagination.scss';

export class Pagination extends Component {
  state = { buttons: [], pageNumber: 1, articlesCount: 0 };

  displayButtons = (articlesCount) => {
    const maxPerPage = 10;
    let numberOfButtons = '';
    if (articlesCount / maxPerPage < 1) {
      numberOfButtons = '';
    }
    if (articlesCount / maxPerPage > 1) {
      numberOfButtons = articlesCount % maxPerPage ? (articlesCount / maxPerPage) + 1 : articlesCount / maxPerPage;
    }
    let buttons = [];
    for (let i = 1; i <= numberOfButtons; i += 1) {
      buttons = [
        ...buttons,
        {
          offset: i === 1 ? 0 : (i * 10) - 10,
          limit: 10,
          label: i
        }
      ];
    }
    this.setState(prevState => ({ ...prevState, buttons }));
    return buttons;
  };

  componentWillReceiveProps = (nextProps) => {
    const { articlesCount } = nextProps;
    return articlesCount && this.displayButtons(articlesCount);
  };

  componentDidMount = () => {
    const { articlesCount } = this.props;
    return articlesCount && this.displayButtons(articlesCount);
  };

  paginateArticles = ({ offset, limit, label }) => {
    const { getAllArticles } = this.props;
    this.setState(prevState => ({
      ...prevState,
      pageNumber: label
    }));
    return getAllArticles(offset, limit);
  };

  render() {
    const { buttons, pageNumber } = this.state;
    return (
      <div className="row">
        <ul className="list-inline pagination">
          {buttons.map((button, key) => (
            <li key={key}>
              <button
                className={`${pageNumber === button.label ? 'yellow' : 'light bold'}`}
                onClick={() => this.paginateArticles(button)}
              >
                {button.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  articlesCount: PropTypes.any,
  getAllArticles: PropTypes.func
};
export const mapStateToProps = ({ articles: { articlesCount } }) => ({ articlesCount });

export default connect(
  mapStateToProps,
  { getAllArticles }
)(Pagination);
