import 'dotenv/config';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazyload';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { fetchOneArticle } from '../../../actions';
import { getArticleHighlights } from '../../../actions/articles';
import avatar from '../../../assets/images/user.png';
import timeStamp from '../../../helpers/timeStamp';
import ArticleHighlight from './ArticleHighlight';
import { NotFound } from '../../common';
import Layout from '../../Layout';
import ShareArticle from '../Share/ShareArticle';
import BookmarkArticle from '../../Bookmarks/BookmarkArticle';

import './Article.scss';
import Rating from './Rating';
import LikeArticle from '../LikeArticle/LikeArticle';

const { REACT_APP_IMAGE_BASE_URL } = process.env;

export class Article extends Component {
  state = {
    article: {},
    loaded: false,
    styleMap: {},
    imageRectangle:
      'c_fill,g_auto,h_350,w_970/b_rgb:000000,e_gradient_fade,y_-0.20/c_scale,co_rgb:ffffff',
    editorState: EditorState.createEmpty(),
    currentEditorState: EditorState.createEmpty(),
    highlight: {},
    highlightCommentModalStyle: 'none'
  };

  componentDidMount = () => {
    const {
      fetchOneArticle,
      getArticleHighlights,
      match: { params: { slug } }
    } = this.props;

    return fetchOneArticle(slug) && getArticleHighlights(slug);
  };

  componentWillReceiveProps = (nextProps) => {
    const { article } = nextProps;
    return article && article.body && this.displayArticle(article);
  };

  displayArticle = (article) => {
    let articleBody = JSON.parse(article.body);
    articleBody = article.highlights
      ? this.showHighlights(article.highlights, articleBody)
      : articleBody;
    const editorState = EditorState.createWithContent(convertFromRaw(articleBody));
    this.setState(prevState => ({ ...prevState, article, editorState, loaded: true }));
  };

  showHighlights = (highlights, articleBody) => {
    const articleBodyWithHighlights = articleBody;
    (highlights || []).forEach(({ id, anchorKey, startIndex, highlightedText }, key) => {
      this.setState(prevState => ({
        ...prevState,
        styleMap: {
          ...prevState.styleMap,
          [`HIGHLIGHT${key}`]: { '--highlight-id': id }
        }
      }));
      articleBody.blocks.forEach((block, index) => {
        if (block.key === anchorKey) {
          articleBodyWithHighlights.blocks[index].inlineStyleRanges = [
            ...articleBodyWithHighlights.blocks[index].inlineStyleRanges,
            {
              offset: startIndex,
              length: highlightedText.length,
              style: `HIGHLIGHT${key}`
            }
          ];
        }
      });
    });
    return articleBodyWithHighlights;
  };

  onChange = editorState => this.setState(prevState => ({
    ...prevState,
    currentEditorState: editorState
  }));

  render() {
    const {
      imageRectangle,
      article,
      editorState,
      currentEditorState,
      styleMap,
      loaded
    } = this.state;
    return (
      <Layout>
        <div id="article">
          {article && article.id ? (
            <div className="row">
              <ArticleHighlight article={article} editorState={currentEditorState} />

              <Helmet>
                <title> {article.title || 'Welcome'} - Authors Haven</title>
                <meta
                  name={article.description || 'Authors Haven'}
                  content={
                    article.content
                      ? article.content.replace(/<[^>]*>?/gm, '').trim(60)
                      : 'Authors Haven'
                  }
                />
                {/* facebook metatags */}
                <meta property="og:url" content={window.location.href || 'Authors Haven'} />
                <meta property="og:title" content={article.title || 'Authors Haven'} />
                <meta property="og:type" content="Article" />
                <meta
                  property="og:description"
                  content={article.description || 'Authors Haven'}
                />{' '}
                <meta
                  property="og:image"
                  content={
                    `${REACT_APP_IMAGE_BASE_URL}/${imageRectangle}/${article.coverUrl}` || ''
                  }
                />
                {/* twitter metatags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content={window.location.host} />
                />
              </Helmet>

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
                    <div className="small-screen-4 medium-screen-2 large-screen-2">
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
                <div>
                  <ShareArticle />
                </div>

                <br />
                <div className="large-text">{article.description}</div>

                <div className="divider light" />
                <div className="left" />
                <div className="articleBody">
                  {article && (
                    <Editor
                      editorState={editorState}
                      customStyleMap={styleMap}
                      onChange={this.onChange}
                      readOnly={false}
                    />
                  )}
                </div>
                <div className="divider light" />
                <div>
                  <LikeArticle />
                  <BookmarkArticle />
                </div>
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
  loading: PropTypes.bool,
  fetchOneArticle: PropTypes.func.isRequired,
  getArticleHighlights: PropTypes.func,
  editorState: PropTypes.func,
  match: PropTypes.object,
  slug: PropTypes.string,
  rating: PropTypes.number,
  params: PropTypes.object,
  message: PropTypes.object,
  errors: PropTypes.object,
  loaded: PropTypes.bool
};

const mapStateToProps = ({
  articles: {
    getHighlights: { loading },
    article,
    errors
  }
}) => ({
  loading,
  article,
  errors
});

export default connect(
  mapStateToProps,
  { fetchOneArticle, getArticleHighlights }
)(Article);
