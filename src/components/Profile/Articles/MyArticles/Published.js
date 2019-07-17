import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'dotenv/config';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { getPublished } from '../../../../actions';
import placeholder from '../../../../assets/images/placeholder.png';
import timeStamp from '../../../../helpers/timeStamp';
import { Img } from '../../../common';
import Layout from '../../../Layout';
import ArticleMenu from './ArticleMenu';

const { REACT_APP_IMAGE_BASE_URL } = process.env;
export class PublishedArticles extends Component {
  state = { imageRectangle: 'w_400,ar_16:9,c_fill,g_auto,e_sharpen', articles: [], errors: {} };

  componentDidMount() {
    const { isAuth } = this.props;
    this.props.getPublished(isAuth);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles) {
      this.setState({ articles: nextProps.articles });
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { articles, imageRectangle } = this.state;
    return (
      <Layout>
        <div className="row">
          <div className="container">
            <ArticleMenu />
            {(articles || []).map((article, key) => (
              <div key={key} className="row">
                <br />
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
                    <Link to={`/profile/article/preview/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <div className="small-v-padding">{article.description}</div>
                  <br />
                  <div className="text-grey small-text medium-v-padding card-info">
                    <span>{timeStamp(article.createdAt)}</span>{' '}
                    <span>{article.readTime} min read</span>
                    <span className="right">
                      <Link
                        to={`/articles/${article.slug}`}
                        className="medium-padding medium-v-margin light radius-3"
                      >
                        <FontAwesomeIcon icon={faGlobeAfrica} /> View on public
                      </Link>{' '}
                      <Link
                        to={`/profile/article/edit/${article.slug}`}
                        className="medium-padding primary medium-v-margin light radius-3"
                      >
                        <FontAwesomeIcon icon={faPen} /> Edit
                      </Link>{' '}
                    </span>
                  </div>
                </div>
                <div className="divider white" />
              </div>
            ))}
            <div className="clear" />
          </div>
        </div>
      </Layout>
    );
  }
}

PublishedArticles.propTypes = {
  articles: PropTypes.array,
  getPublished: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
  errors: PropTypes.object
};
const mapStateToProps = ({ user: { isAuth }, articles: { articles } }) => ({ articles, isAuth });

export default connect(
  mapStateToProps,
  { getPublished }
)(PublishedArticles);
