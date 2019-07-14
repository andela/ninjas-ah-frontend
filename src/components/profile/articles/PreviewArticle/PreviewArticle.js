import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'dotenv/config';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPen,
  faTimesCircle,
  faCircle,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { MetaTags } from 'react-meta-tags';
import { NotFound } from '../../../common';
import Heading from '../../../common/Heading/Heading';
import placeholder from '../../../../assets/images/placeholder.png';
import {
  fetchOneArticle,
  deleteArticle,
  publishArticle,
  unpublishArticle,
  uploadImage
} from '../../../../actions';
import TimeStamp from '../../../../helpers/timeStamp';
import './PreviewArticle.scss';
import Layout from '../../../Layout';

const { REACT_APP_IMAGE_BASE_URL } = process.env;
export class PreviewArticle extends Component {
  state = {
    imageRectangle:
      'c_fill,g_auto,h_350,w_970/b_rgb:000000,e_gradient_fade,y_-0.20/c_scale,co_rgb:ffffff',
    message: '',
    loaded: false,
    articleId: '',
    errors: '',
    status: '',
    image: '',
    imagePath: '',
    displayUploadButton: false
  };

  componentDidMount() {
    const { match: { params: { slug } } } = this.props;
    this.props.fetchOneArticle(slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      this.setState({ message: nextProps.message });
    }
    if (nextProps.article) {
      const editorState = nextProps.article.body
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(nextProps.article.body)))
        : EditorState.createEmpty();

      this.setState({
        article: nextProps.article,
        editorState,
        loaded: true
      });
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps && nextProps.imageErrors) {
      this.setState({ imageErrors: nextProps.imageErrors });
    }
  }

  handleDelete = () => {
    this.props.deleteArticle({ slug: this.props.article.slug });
    this.setState({ errors: this.props.errors });
    this.setState({ message: '' });
  };

  handleUnpublish = () => {
    this.props.unpublishArticle({ slug: this.props.article.slug });
    if (this.props.message) {
      this.setState({ status: 'draft' });
    }
  };

  handlePublish = () => {
    this.props.publishArticle({ slug: this.props.article.slug });
    this.setState({ status: 'published' });
  };

  fileSelectedHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        imagePath: URL.createObjectURL(event.target.files[0]),
        image: event.target.files[0],
        displayUploadButton: true,
        imageErrors: ''
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', this.state.image);
    this.props.uploadImage(formData);
  };

  render() {
    const { message } = this.props;
    const {
      imageRectangle,
      article,
      errors,
      status,
      loaded,
      displayUploadButton,
      imagePath,
      imageErrors,
      editorState
    } = this.state;
    return (
      <Layout>
        <div id="preview">
          <div className="container">
            {loaded && article && Object.keys(article).length > 0 ? (
              <div className="row grabArticle">
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
                </MetaTags>
                <div className="small-screen-4 medium-screen-3 large-screen-3">
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
                  <h1 className="xxlarge-text medium-v-padding">{article.title}</h1>
                  <br />
                  <div className="large-text">{article.description}</div>
                  <div className="divider light" />
                  {article.tagList}
                  <div className="articleBody">
                    {article && <Editor editorState={editorState} readOnly={true} />}
                  </div>
                </div>
                <div className="small-screen-4 medium-screen-3 large-screen-1">
                  <div className="card light">
                    <Heading type={1} text={'Cover Image'} />
                    <div className="image">
                      <img
                        src={
                          imagePath
                          || (article.coverUrl
                            && `${REACT_APP_IMAGE_BASE_URL}/${imageRectangle}/${article.coverUrl}`)
                          || placeholder
                        }
                        className="radius-1"
                        alt={article.title.substring(20, 0)}
                      />
                    </div>
                    <form onSubmit={this.onSubmit}>
                      <div className="input-field white">
                        <input
                          type="file"
                          name="image"
                          value={this.image}
                          onChange={this.fileSelectedHandler}
                        />
                      </div>
                      {displayUploadButton ? (
                        <div className="input-field center-align">
                          <button
                            type="submit"
                            className="button primary bold text-black radius-4 medium-v-padding"
                          >
                            Upload
                          </button>
                        </div>
                      ) : (
                        <span>{''}</span>
                      )}
                      {imageErrors && imageErrors.image ? (
                        <div className="medium-padding danger medium-v-margin text-white">
                          <FontAwesomeIcon icon={faQuestionCircle} /> {imageErrors.image}
                        </div>
                      ) : (
                        <span>{''}</span>
                      )}
                    </form>
                  </div>

                  <div className="card">
                    <Heading type={1} text={'Action'} />
                    <div className="box article-actions">
                      <Link
                        to={`/profile/article/edit/${article.slug}`}
                        className="button block success text-white center-align radius-4"
                      >
                        <FontAwesomeIcon icon={faPen} /> Edit
                      </Link>
                      {status === 'published' || article.status === 'published' ? (
                        <button
                          onClick={this.handleUnpublish}
                          className="button block info  text-white center center-align radius-4"
                        >
                          <FontAwesomeIcon icon={faTimesCircle} /> Unpublish
                        </button>
                      ) : (
                        <button
                          onClick={this.handlePublish}
                          id="btn-publish"
                          className="button block secondary text-white center center-align radius-4"
                        >
                          <FontAwesomeIcon icon={faCircle} /> Publish
                        </button>
                      )}
                      <button
                        onClick={this.handleDelete}
                        className="button block danger text-white center center-align radius-4"
                      >
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </button>
                      <div>
                        {errors && errors.error ? (
                          <div className="medium-padding border b-danger light text-danger radius-2">
                            {errors.error}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <div>
                        {!errors.error && message && Object.keys(message).length > 0 ? (
                          <div className="medium-padding border b-success light text-success radius-2">
                            {message.message}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <Heading type={1} text={'Details'} />
                    <div className="box">
                      <div className="medium-padding">
                        <div className="medium-v-padding">
                          Status: <span className="bold">{status || article.status}</span>
                        </div>
                        <div className="medium-v-padding">
                          Created:{' '}
                          <span>
                            <TimeStamp time={article.createdAt} />
                          </span>
                        </div>
                        <div className="medium-v-padding">
                          Updated:{' '}
                          <span>
                            <TimeStamp time={article.updatedAt} />
                          </span>
                        </div>
                        <div className="divider light" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {loaded && article && Object.keys(article).length < 1 ? (
                  <NotFound />
                ) : (
                  <div>{''}</div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="divider light" />
      </Layout>
    );
  }
}
PreviewArticle.propTypes = {
  article: PropTypes.object,
  fetchOneArticle: PropTypes.func.isRequired,
  editorState: PropTypes.func,
  deleteArticle: PropTypes.func,
  publishArticle: PropTypes.func,
  unpublishArticle: PropTypes.func,
  uploadImage: PropTypes.func,
  slug: PropTypes.string,
  published: PropTypes.string,
  unpublished: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
  imagePath: PropTypes.string,
  match: PropTypes.object,
  params: PropTypes.object,
  message: PropTypes.object,
  errors: PropTypes.object,
  imageErrors: PropTypes.any
};

export const mapStateToProps = ({
  articles: { article, message, errors },
  images: { imageErrors }
}) => ({
  article,
  message,
  errors,
  imageErrors
});

export default connect(
  mapStateToProps,
  { fetchOneArticle, deleteArticle, publishArticle, unpublishArticle, uploadImage }
)(PreviewArticle);
