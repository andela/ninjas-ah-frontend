import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'dotenv/config';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { getAllArticles } from '../../../actions';
import placeholder from '../../../assets/images/placeholder.png';
import imagePlaceholder from '../../../assets/images/ARTICLE_PLACEHOLER.png';
import timeStamp from '../../../helpers/timeStamp';
import { Img } from '../../common';
import './listOfArticles.scss';
import Pagination from '../Pagination';

const { REACT_APP_IMAGE_BASE_URL } = process.env;
export class ListsOfArticles extends Component {
  state = { imageRectangle: 'w_400,ar_16:9,c_fill,g_auto,e_sharpen' };

  fetAllArticles() {
    this.props.getAllArticles();
  }

  componentWillMount() {
    this.fetAllArticles();
  }

  render() {
    const { articles, loading } = this.props;
    const { imageRectangle } = this.state;
    return (
      <div className="row" id="articleCard">
        {(articles || []).map((article, key) => (
          <div key={key}>
            <div className="card">
              <div className="small-screen-4 medium-screen-1 large-screen-1">
                <div className="image">
                  <Link to={`/articles/${article.slug}`}>
                    <Img
                      imgSrc={
                        article.coverUrl
                          ? `${REACT_APP_IMAGE_BASE_URL}/${imageRectangle}/${article.coverUrl}`
                          : placeholder
                      }
                      imgClass="center radius-1"
                      alt={article.title.substring(20, 0)}
                    />
                  </Link>
                </div>
              </div>
              <div className="small-screen-4 medium-screen-3 large-screen-3">
                <h2 className="nobold">
                  <Link to={`/articles/${article.slug}`}> {article.id} -- {article.title}</Link>
                </h2>
                <div className="small-v-padding hide-on-small">{article.description}</div>
                <div className="text-grey small-text medium-v-padding card-info">
                  <span>{article.author ? article.author.username : ''}</span>{' '}
                  <span>{timeStamp(article.createdAt)}</span>
                  <span>
                    <FontAwesomeIcon icon={faClock} className="text-light-grey" />{' '}
                    {article.readTime === 0 ? 1 : article.readTime} min read
                  </span>
                </div>
              </div>
            </div>
            <div className="divider light" />
          </div>
        ))}
        {loading ? (
          <Img
            imgSrc={imagePlaceholder}
            imgClass="center radius-1 loading-article"
            alt="Loading article"
          />
        ) : (
            <div />
        )}
        <div className="clear" />
        <div className="row pagination center-align">
          <Pagination />
        </div>
        <div className="clear" />
      </div>
    );
  }
}

ListsOfArticles.propTypes = {
  articles: PropTypes.array,
  getAllArticles: PropTypes.func.isRequired,
  loading: PropTypes.bool
};
const mapStateToProps = ({ articles: { articles, loading } }) => ({ articles, loading });

export default connect(
  mapStateToProps,
  { getAllArticles }
)(ListsOfArticles);
