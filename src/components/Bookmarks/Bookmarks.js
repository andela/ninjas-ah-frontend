import 'dotenv/config';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import { getAllBookmarks, deleteOneBookmark } from '../../actions';
import { Img } from '../common';
import './Bookmarks.scss';

const { REACT_APP_IMAGE_BASE_URL } = process.env;
class Bookmarks extends Component {
  state = {
    imageRectangle: 'w_400,ar_16:9,c_fill,g_auto,e_sharpen',
    articleSlug: '',
    allArticles: []
  };

  deleteBookmark = (element) => {
    const { deleteOneBookmark } = this.props;
    deleteOneBookmark(element.articleSlug, element.userId);
  };

  componentDidMount = () => {
    const { getAllBookmarks } = this.props;
    getAllBookmarks();
  };

  render() {
    const { bookmarks } = this.props;

    const { imageRectangle } = this.state;
    return (
      <Layout>
        <div className="container border b-light-grey shadow-3 radius-2 bookmark">
          <div>
            <div className="xxlarge-h-margin large-v-margin">
              <h1>Bookmarks</h1> {this.state.display}
            </div>
          </div>
          <div>
            {bookmarks.length === 0 ? (
              <div className="xxlarge-h-margin">
                <div className="large-margin">No bookmarks</div>
              </div>
            ) : (
                bookmarks.map((element, key) => (
                  <div key={key} className="row">
                    <Link to={`/articles/${element.articleSlug}`}>
                      <div className="small-screen-4 medium-screen-1 large-screen-1 ">
                        <div className="image">
                          <Img
                            imgSrc={`${REACT_APP_IMAGE_BASE_URL}/${imageRectangle}/${
                              element.article.coverUrl
                              }`}
                            imgClass="center radius-1"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="large-margin">
                        <div className="large-margin">
                          <h3>{element.article.title}</h3>
                        </div>
                        <div className="xxlarge-h-margin">
                          <p>{element.article.description}</p>
                        </div>
                        <div className="xxlarge-h-margin text-grey small-text">
                          <span>{element.article.readTime} min</span>
                          <span className="xlarge-margin">
                            {new Date(element.createdAt).toDateString()}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <button
                      className="danger text-white "
                      onClick={() => this.deleteBookmark(element)}
                    >
                      <span>
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="1x"
                          className="left text-white small-h-padding"
                        />
                      </span>
                      <span className="small-h-padding">Remove</span>
                    </button>
                    <div className="divider light-grey" />
                  </div>
                ))
              )}
          </div>
        </div>
      </Layout>
    );
  }
}

Bookmarks.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.object,
  message: PropTypes.string,
  bookmarks: PropTypes.any,
  getAllBookmarks: PropTypes.func.isRequired,
  deleteOneBookmark: PropTypes.func.isRequired
};
const mapStateToProps = ({
  bookmarks: {
    bookmarks,
    getBookmarks: { errors, message, loading }
  }
}) => ({
  bookmarks,
  errors,
  message,
  loading
});
export default connect(
  mapStateToProps,
  { getAllBookmarks, deleteOneBookmark }
)(Bookmarks);
