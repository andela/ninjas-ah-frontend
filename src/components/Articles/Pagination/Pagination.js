import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../../../actions';
import { Button } from '../../common';

export class Pagination extends Component {
  state = { buttons: [] };

  displayButtons = (articlesCount) => {
    const maxPerPage = 2;
    const numberOfButtons = articlesCount / maxPerPage + (articlesCount % maxPerPage);
    let buttons = [];
    for (let i = 1; i <= numberOfButtons; i += 1) {
      buttons = [
        ...buttons,
        {
          offset: i === 1 ? 0 : i * 2 - 2,
          limit: 2,
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

  paginateArticles = ({ offset, limit }) => {
    const { getAllArticles } = this.props;
    return getAllArticles(offset, limit);
  };

  render() {
    // const { LIMIT, OFFSET, CURRENT_OFFSET } = this.state;
    const { buttons } = this.state;
    // console.log('done', articlesCount);
    return (
      <div className="row">
        <ul className="list-inline">
          {buttons.map((button, key) => (
            <li key={key} className="medium-padding light">
              <Button
                onClick={() => this.paginateArticles(button)}
                buttonClass="button small-padding small-margin light-grey"
              >
                {button.label} offset: {button.offset} limit: {button.limit}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  articlesCount: PropTypes.number,
  getAllArticles: PropTypes.func
};
export const mapStateToProps = ({ articles: { articlesCount } }) => ({ articlesCount });

export default connect(
  mapStateToProps,
  { getAllArticles }
)(Pagination);
