import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'dotenv/config';
import MetaTags from 'react-meta-tags';
import LazyLoad from 'react-lazyload';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { fetchOneArticle } from '../../../actions';
import avatar from '../../../assets/images/user.png';
import timeStamp from '../../../helpers/timeStamp';
import { NotFound, ProgressBar } from '../../common';
import Layout from '../../Layout';
import './Article.scss';
import Rating from './Rating';
import Comments from '../Comments/Comments';

const { REACT_APP_IMAGE_BASE_URL } = process.env;

export class Article extends Component {
  state = {
    article: {},
    loaded: false,
    imageRectangle:
      'c_fill,g_auto,h_350,w_970/b_rgb:000000,e_gradient_fade,y_-0.20/c_scale,co_rgb:ffffff',
    editorState: EditorState.createEmpty()
  };

  async getSpecificArticle(slug) {
    const { fetchOneArticle } = this.props;
    await fetchOneArticle(slug);

    const { article } = this.props;
    const editorState = article.body
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(article.body)))
      : EditorState.createEmpty();
    this.setState({ loaded: true });
    return this.setState({ article, editorState });
  }

  componentDidMount() {
    const { match: { params: { slug } } } = this.props;
    this.getSpecificArticle(slug);
  }

  render() {
    const { imageRectangle, article, editorState, loaded } = this.state;
    const { loading } = this.props;
    return (
      <Layout>
        <div id="article">
          {loading ? <ProgressBar /> : ''}
          {article && article.id ? (
            <div className="row">
              <MetaTags>
                <title> {article.title || 'Welcome'} - Authors Haven</title>
                <meta
                  name={article.description || 'Authors Haven'}
                  content={
                    article.content
                      ? article.content.replace(/<[^>]*>?/gm, '').trim(60)
                      : 'Authors Haven'
                  }
                />
                <meta property="og:title" content={article.title || 'Authors Haven'} />
                <meta property="og:image" content={article.coverUrl || ''} />
              </MetaTags>
              <LazyLoad height={350}>
                {article.coverUrl ? (
                  <div className="image">
                    <img
                      src={`${REACT_APP_IMAGE_BASE_URL}/${imageRectangle}/${article.coverUrl}`}
                      alt={article.title}
                    />
                  </div>
                ) : (
                  ''
                )}
              </LazyLoad>

              <div className="container">
                <h1 className="xxlarge-text medium-v-padding">{article.title}</h1>
                <div className="articleInfo">
                  <div className="row">
                    <div className="small-screen-4 medium-screen-2 large-screen-2 large-v-padding">
                      <span className="avatar">
                        <img src={avatar} alt={article.title} />
                        <span>{' John Doe'}</span>
                      </span>
                      <Link to="/" className="button small-button primary">
                        Follow
                      </Link>
                      <span className="medium-h-padding">{timeStamp(article.createdAt)}</span>
                      <span className="medium-h-padding">
                        <FontAwesomeIcon icon={faClock} className="text-light-grey" />{' '}
                        {article.readTime} min read
                      </span>
                    </div>
                    <div className="small-screen-4 medium-screen-2 large-screen-2">
                      <Rating slug={article.slug} rating={article.rating || 0} />
                    </div>
                  </div>
                </div>
                <br />
                <div className="large-text">{article.description}</div>

                <div className="divider light" />
                <div className="articleBody">
                  {article && <Editor editorState={editorState} readOnly={false} />}
                </div>
                <Comments slug={article.slug} />
              </div>
            </div>
          ) : (
            <div>{loaded && !Object.keys(article).length ? <NotFound /> : <div />}</div>
          )}
        </div>
      </Layout>
    );
  }
}

Article.defaultProps = { match: { params: { slug: '' } } };

Article.propTypes = {
  article: PropTypes.object,
  fetchOneArticle: PropTypes.func.isRequired,
  editorState: PropTypes.func,
  match: PropTypes.object,
  slug: PropTypes.string,
  rating: PropTypes.number,
  params: PropTypes.object,
  message: PropTypes.object,
  errors: PropTypes.object,
  loaded: PropTypes.bool,
  loading: PropTypes.bool
};
const mapStateToProps = ({ articles: { article, errors, loading } }) => ({
  article,
  errors,
  loading
});

export default connect(
  mapStateToProps,
  { fetchOneArticle }
)(Article);
