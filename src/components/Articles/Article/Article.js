import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'dotenv/config';
import MetaTags from 'react-meta-tags';
import LazyLoad from 'react-lazyload';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { fetchOneArticle } from '../../../actions';
import avatar from '../../../assets/images/user.png';
import timeStamp from '../../../helpers/timeStamp';
import { NotFound } from '../../common';
import Layout from '../../Layout';
import './Article.scss';

const { REACT_APP_IMAGE_BASE_URL } = process.env;

export class Article extends Component {
  state = {
    article: {},
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

    return this.setState({ article, editorState });
  }

  componentDidMount() {
    const { match: { params: { slug } } } = this.props;
    this.getSpecificArticle(slug);
  }

  render() {
    const { imageRectangle, article, editorState } = this.state;
    return (
      <Layout>
        <div id="article">
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
                    <div className="small-screen-4 medium-screen-2 large-screen-2">
                      <span className="avatar">
                        <img src={avatar} alt={article.title} />
                        <span>{' John Doe'}</span>
                      </span>
                      <Link to="/" className="button small-button primary">
                        Follow
                      </Link>
                      <span className="medium-h-padding">{timeStamp(article.createdAt)}</span>
                    </div>
                  </div>
                </div>
                <br />
                <div className="large-text">{article.description}</div>

                <div className="divider light" />
                <div className="articleBody">
                  {article && <Editor editorState={editorState} readOnly={false} />}
                </div>
              </div>
            </div>
          ) : (
            <div>{!article ? <NotFound /> : <div>{''}</div>}</div>
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
  params: PropTypes.object,
  message: PropTypes.object,
  errors: PropTypes.object
};
const mapStateToProps = ({ articles: { article, errors } }) => ({ article, errors });

export default connect(
  mapStateToProps,
  { fetchOneArticle }
)(Article);
