import React, { Component } from 'react';
import 'dotenv/config';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import MetaTags from 'react-meta-tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faClock } from '@fortawesome/free-solid-svg-icons';
import Layout from '../Layout';
import ListOfArticles from '../Articles/ListOfArticles/ListOfArticles';
import './Home.scss';
import { Img } from '../common';
import SignupBanner from './SignupBanner/SignupBanner';
import { getAllBookmarks } from '../../actions';
import timeStamp from '../../helpers/timeStamp';
import placeholder from '../../assets/images/placeholder.png';

export class Home extends Component {
  state = {
    welcome: 'Welcome to Authors Haven',
    imageRectangle: 'w_400,ar_16:9,c_fill,g_auto,e_sharpen'
  };

  componentWillMount = () => {
    const { getAllBookmarks } = this.props;
    getAllBookmarks();
  };

  render() {
    const { imageRectangle, welcome } = this.state;
    const bookmarks = Array.isArray(this.props.bookmarks) ? this.props.bookmarks : [];
    return (
      <Layout>
        <div id="Home">
          <MetaTags>
            <title>{welcome}</title>
            <meta
              name="description"
              content="Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web"
            />
            <meta property="og:title" content="Authors Haven" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <SignupBanner />
          <div className="container">
            <div className={`${bookmarks.length ? 'contentColumn' : ''}`}>
              <ListOfArticles />
            </div>
            <div className={`sidebarColumn ${bookmarks.length ? '' : 'hide'}`}>
              <br />
              <h1>
                <FontAwesomeIcon icon={faBookmark} /> Bookmarked Articles
              </h1>
              {bookmarks.map((bookmark, key) => key < 10 && (
                    <div className="large-v-margin medium-padding" key={key}>
                      <div className="small-screen-4 medium-screen-1 large-screen-1">
                        <div className="image">
                          <Link to={`/articles/${bookmark.articleSlug}`}>
                            <Img
                              imgSrc={
                                bookmark.article.coverUrl
                                  ? `${process.env.REACT_APP_IMAGE_BASE_URL}/${imageRectangle}/${
                                    bookmark.article.coverUrl
                                  }`
                                  : placeholder
                              }
                              imgClass="center radius-1"
                              alt={bookmark.article.title.substring(20, 0)}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="small-screen-4 medium-screen-3 large-screen-3">
                        <h2 className="nobold no-margin no-padding medium-text">
                          <Link to={`/articles/${bookmark.articleSlug}`}>
                            {bookmark.article.title}
                          </Link>
                        </h2>
                        <div className="text-grey small-text medium-v-padding card-info">
                          <span>{timeStamp(bookmark.createdAt)}</span>
                          <span>
                            <FontAwesomeIcon icon={faClock} className="text-light-grey" />{' '}
                            {bookmark.article.readTime === 0 ? 1 : bookmark.article.readTime} min
                            read
                          </span>
                        </div>
                      </div>
                      <div className="divider light" />
                    </div>
              ))}
            </div>
          </div>
          <div className="divider light" />
        </div>
      </Layout>
    );
  }
}

Home.defaultProps = { bookmarks: [] };
Home.propTypes = { bookmarks: PropTypes.array, getAllBookmarks: PropTypes.func };

const mapStateToProps = ({ bookmarks: { bookmarks } }) => ({ bookmarks });

export default connect(
  mapStateToProps,
  { getAllBookmarks }
)(Home);
