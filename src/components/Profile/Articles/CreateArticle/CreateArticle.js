import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MetaTags from 'react-meta-tags';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextareaAutosize from 'react-autosize-textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import richTextConfig from '../../../../helpers/richTextConfig.json';
import { Alert } from '../../../common';
import { createPost } from '../../../../actions';
import '../EditArticle/EditArticle.scss';
import Layout from '../../../Layout';

export class CreateArticle extends Component {
  state = {
    page: 'Create a story',
    title: '',
    description: '',
    body: '',
    coverUrl: null,
    article: '',
    errors: {},
    editorState: EditorState.createEmpty()
  };

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.article && Object.keys(nextProps.article).length) {
      this.setState({ article: nextProps.article });
      history.push(`/profile/article/preview/${nextProps.article.slug}`);
    }
  }

  onChange = (e) => {
    this.setState({ errors: [], [e.target.name]: e.target.value });
  };

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };

  fileSelectedHandler = (e) => {
    this.setState({ coverUrl: e.target.files[0] });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const body = this.state.editorState
      ? convertToRaw(this.state.editorState.getCurrentContent())
      : '';
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('body', JSON.stringify(body));
    formData.append('coverUrl', this.state.coverUrl);
    this.props.createPost(formData);
  };

  render() {
    const { page, message, errors, article, editorState } = this.state;

    return (
      <Layout>
        <div id="createArticle">
          <MetaTags>
            <title>Create Article - Authors Haven</title>
            <meta
              name="description"
              content="Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web"
            />
          </MetaTags>
          <div className="container">
            <div className="row">
              {Object.entries(errors || []).map((value, key) => (
                <div className="text-danger border b-light medium-padding text-white" key={key}>
                  <FontAwesomeIcon icon={faQuestionCircle} /> {value[1]}
                </div>
              ))}
              {article.title ? (
                <Alert
                  loading={true}
                  alertType="success"
                  message="Article created successfully. We are redirecting you..."
                />
              ) : (
                ''
              )}
              {message ? <Alert alertType="success" message={message} /> : ''}
              <form id="saveArticle" onSubmit={this.onSubmit}>
                {message ? <Alert alertType="success" message={message} /> : ''}
                <div className="row">
                  <h2 className="large-v-padding">{page}</h2>
                  <div className="input-field">
                    <label>Title</label>
                    <br />
                    <TextareaAutosize
                      name="title"
                      onChange={this.onChange}
                      value={this.state.title}
                      placeholder="Type title here..."
                      style={{ minHeight: 20 }}
                      id="articleTitle"
                    />
                  </div>
                  <div className="input-field">
                    <label>Description</label>
                    <br />
                    <TextareaAutosize
                      name="description"
                      onChange={this.onChange}
                      value={this.state.description}
                      placeholder="Type description here..."
                      style={{ minHeight: 20 }}
                      id="articleDescription"
                    />
                  </div>
                  <div className="input-field">
                    <label>Upload Cover Image</label>
                    <input
                      type="file"
                      name="coverUrl"
                      value={this.coverUrl}
                      onChange={this.fileSelectedHandler}
                    />
                  </div>
                  <div className="input-field">
                    <label>Body of the article</label>
                    <br />
                    <Editor
                      name="body"
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      value={this.state.body}
                      placeholder="Body of the article..."
                      onEditorStateChange={this.onEditorStateChange}
                      toolbar={richTextConfig}
                      style={{ minHeight: 15 }}
                      id="articleBody"
                    />
                  </div>
                </div>
                <button type="submit" className="button radius-4 primary text-black bold">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
CreateArticle.propTypes = {
  createPost: PropTypes.func.isRequired,
  article: PropTypes.object,
  errors: PropTypes.any,
  history: PropTypes.object
};
const mapStateToProps = ({ articles: { article, errors } }) => ({
  article,
  errors
});

export default connect(
  mapStateToProps,
  { createPost }
)(CreateArticle);
