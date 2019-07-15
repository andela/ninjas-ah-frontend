import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import { Alert, NotFound } from '../../../common';
import { editPost, fetchOneArticle } from '../../../../actions';
import Layout from '../../../Layout';
import './EditArticle.scss';
import Heading from '../../../common/Heading/Heading';
import timeStamp from '../../../../helpers/timeStamp';
import richTextConfig from '../../../../helpers/richTextConfig.json';

export class EditArticle extends Component {
  state = {
    pageTitle: 'Edit a story',
    title: '',
    description: '',
    body: '',
    article: '',
    slug: '',
    message: '',
    status: '',
    coverUrl: null,
    loaded: false,
    displayUploadButton: false,
    editorState: EditorState.createEmpty(),
    location: ''
  };

  async componentDidMount() {
    const { match: { params: { slug } } } = this.props;
    this.props.fetchOneArticle(slug).then(() => {
      this.setState({
        message: '',
        loaded: true,
        title: this.props.article.title,
        description: this.props.article.description,
        body: this.props.article.body,
        article: this.props.article,
        status: this.props.article.status
      });
      this.convertToEditorState(this.state.body);
    });
    this.setState({ slug });
  }

  convertToEditorState = (articleBody = '{}') => {
    const editor = convertFromRaw(JSON.parse(articleBody));
    const editorState = EditorState.createWithContent(editor);
    this.setState({ editorState });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.article) {
      this.setState({ article: nextProps.article });
      this.setState({ message: nextProps.message });
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEditorStateChange = editorState => this.setState({ editorState });

  onSubmit = async (e) => {
    const { slug } = this.state;
    e.preventDefault();
    const post = {
      title: this.state.title,
      description: this.state.description,
      body: JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
    };
    await this.props.editPost({ article: post, slug });
    this.setState({ article: this.props.article });
  };

  render() {
    const { errors } = this.props;
    const {
      pageTitle,
      title,
      description,
      message,
      article,
      editorState,
      status,
      loaded
    } = this.state;

    return (
      <Layout>
        <div id="editArticle">
          <div className="container">
            {errors
              && (errors.errors || []).map(error => (
                <div className="text-danger border b-light medium-padding text-white" key={error}>
                  <FontAwesomeIcon icon={faQuestionCircle} /> {error}
                </div>
              ))}
            {article && Object.keys(article).length > 0 && !errors.error ? (
              <div className="row">
                <MetaTags>
                  <title>Editing: {title || article.title} - Authors Haven </title>
                  <meta
                    name="description"
                    content="Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web"
                  />
                </MetaTags>
                <div className="small-screen-4 medium-screen-3 large-screen-3">
                  <form onSubmit={this.onSubmit}>
                    {Object.keys(message).length ? (
                      <Alert alertType="success" message={message.message} />
                    ) : (
                      ''
                    )}
                    <div className="row">
                      <h2 className="medium-h-padding">{pageTitle}</h2>
                      <div className="input-field">
                        <TextareaAutosize
                          name="title"
                          onChange={this.onChange}
                          value={title}
                          placeholder="Type title here..."
                          style={{ minHeight: 15 }}
                          id="articleTitle"
                        />
                      </div>
                      <div className="input-field">
                        <TextareaAutosize
                          name="description"
                          onChange={this.onChange}
                          value={description}
                          placeholder="Story description..."
                          style={{ minHeight: 15 }}
                          id="articleDescription"
                        />
                      </div>
                      <div className="input-field">
                        <br />
                        <Editor
                          name="body"
                          editorState={editorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={this.onEditorStateChange}
                          toolbar={richTextConfig}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      className="button radius-4 primary text-black bold"
                    >
                      Update
                    </button>
                    <br />
                    {Object.keys(errors).length && errors.message ? (
                      <div className="medium-padding medium-v-margin border b-light text-danger">
                        Sorry, error occurred. try again later
                      </div>
                    ) : (
                      ''
                    )}
                  </form>
                </div>
                <div className="small-screen-4 medium-screen-3 large-screen-1">
                  <div className="box article-actions">
                    <Link
                      to={`/profile/article/preview/${article.slug}`}
                      className="button block success text-white center-align radius-4"
                    >
                      <FontAwesomeIcon icon={faPen} /> Preview
                    </Link>
                  </div>
                  <div className="card">
                    <Heading type={1} text={'Details'} />
                    <div className="box">
                      <div className="medium-padding">
                        <div className="medium-v-padding">
                          Status: <span className="bold">{status || article.status}</span>
                        </div>

                        <div className="medium-v-padding">
                          Created:
                          <span>{timeStamp(article.updatedAt)}</span>
                        </div>
                        <div className="medium-v-padding">
                          Updated: <span>{timeStamp(article.updatedAt)}</span>
                        </div>
                        <div className="divider light" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>{loaded && !Object.keys(article).length ? <NotFound /> : <div>{''}</div>}</div>
            )}
          </div>
        </div>
        <div className="divider light" />
      </Layout>
    );
  }
}

EditArticle.defaultProps = { match: { params: { slug: '' } } };

EditArticle.propTypes = {
  editPost: PropTypes.func.isRequired,
  article: PropTypes.object,
  fetchOneArticle: PropTypes.func.isRequired,
  slug: PropTypes.string,
  match: PropTypes.object,
  params: PropTypes.object,
  message: PropTypes.object,
  errors: PropTypes.object,
  content: PropTypes.string
};
export const mapStateToProps = ({ articles: { article, message, errors } }) => ({
  article,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { editPost, fetchOneArticle }
)(EditArticle);
