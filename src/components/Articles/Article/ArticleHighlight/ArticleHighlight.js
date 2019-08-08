import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHighlighter, faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Form, TextArea, Button, Alert } from '../../../common';
import './ArticleHighlight.scss';
import ArticleHighlightsDetails from './ArticleHighlightsDetails';
import { clearCreateRateStore } from '../../../../actions';
import { highlightArticle, clearHighlightArticleStore } from '../../../../actions/articles';
import { htmlHelper } from '../../../../helpers';

export class ArticleHighlight extends Component {
  state = {
    comment: '',
    highlightedText: '',
    anchorKey: '',
    startIndex: 0,
    stopIndex: 0,
    selectionRectangle: null,
    errors: {},
    message: '',
    highlight: null,
    isSelectionInBody: false,
    highlightCommentModalStyle: 'none'
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors, message } = nextProps;
    this.setState(prevState => ({ ...prevState, message, errors }));
  };

  componentDidMount = () => {
    window.addEventListener('selectstart', this.checkHighlightedText);
    window.addEventListener('click', this.checkHighlightedText);
    window.addEventListener('resize', this.checkHighlightedText);
  };

  componentWillUnmount = () => {
    const { clearCreateRateStore, clearHighlightArticleStore } = this.props;
    clearCreateRateStore();
    clearHighlightArticleStore();
  };

  hideModal = (modal) => {
    const { clearHighlightArticleStore } = this.props;
    clearHighlightArticleStore();
    this.setState(prevState => ({ ...prevState, comment: '', [modal]: 'none' }));
  };

  showModal = (modal) => {
    const { clearHighlightArticleStore } = this.props;
    clearHighlightArticleStore();
    this.setState(prevState => ({ ...prevState, [modal]: 'block' }));
  };

  getSelectionIndexes = ({ anchorOffset, focusOffset, anchorKey }) => {
    const startIndex = Math.min(anchorOffset, focusOffset);
    const stopIndex = Math.max(anchorOffset, focusOffset);
    return { startIndex, stopIndex, anchorKey };
  };

  getHighlightedText = (articleBody, anchorKey, startIndex, stopIndex) => {
    const articleBodyBlock = JSON.parse(articleBody).blocks.filter(b => b.key === anchorKey)[0];
    const articleBodyText = (articleBodyBlock && articleBodyBlock.text) || '';
    const highlightedText = articleBodyText.substring(startIndex, stopIndex);
    return highlightedText;
  };

  getSelectionRange = (windowSelection) => {
    const selectionRange = windowSelection.toString() && windowSelection.getRangeAt(0);
    const selectionRectangle = selectionRange && selectionRange.getBoundingClientRect();
    return { selectionRange, selectionRectangle };
  };

  checkHighlightedText = () => {
    const [{ article, editorState }, windowSelection] = [this.props, window.getSelection()];
    const editorStateSelection = editorState.getSelection();
    const { startIndex, stopIndex, anchorKey } = this.getSelectionIndexes(editorStateSelection);
    const { selectionRectangle } = this.getSelectionRange(windowSelection);
    const highlightedText = this.getHighlightedText(article.body, anchorKey, startIndex, stopIndex);
    const isSelectionInBody = highlightedText && highlightedText === windowSelection.toString();

    this.setState(prevState => ({
      ...prevState,
      isSelectionInBody,
      anchorKey,
      startIndex,
      stopIndex,
      highlightedText: highlightedText || prevState.highlightedText,
      selectionRectangle,
      errors: {},
      message: ''
    }));
  };

  handleChange = e => this.setState({ comment: e.target.value });

  saveHighlight = (e) => {
    e.preventDefault();
    const {
      article: { slug },
      highlightArticle,
      clearCreateRateStore
    } = this.props;
    const { anchorKey, highlightedText, startIndex, stopIndex, comment } = this.state;

    return (
      highlightedText
      && stopIndex
      && highlightArticle({ slug, anchorKey, highlightedText, startIndex, stopIndex, comment })
      && clearCreateRateStore()
    );
  };

  render() {
    const { article, loading } = this.props;

    const {
      selectionRectangle,
      comment,
      highlightedText,
      errors,
      message,
      isSelectionInBody,
      highlightCommentModalStyle
    } = this.state;

    return (
      <div className="ArticleHighlight">
        <div className="small-screen-4">
          <div className="small-screen-4">
            {!isSelectionInBody
              && (message || errors.token || errors.authentication || errors.message) && (
                <Alert
                  alertType={(message && 'success') || 'danger'}
                  message={message || errors.token || errors.authentication || errors.message}
                />
            )}
          </div>
          {isSelectionInBody ? (
            <div
              className="highlight-buttons"
              style={{
                top: `${selectionRectangle.top + window.scrollY}px`,
                left: `${selectionRectangle.left}px`
              }}
            >
              <Button buttonClass="button highlighter-button" onClick={this.saveHighlight}>
                <FontAwesomeIcon icon={faHighlighter} size="1x" />
              </Button>
              <Button
                buttonClass="button highlight-comment-button"
                onClick={() => this.showModal('highlightCommentModalStyle')}
              >
                <FontAwesomeIcon icon={faComment} size="1x" />
              </Button>
            </div>
          ) : (
            ''
          )}
          {/* Highlight comment modal */}
          <div className={`highlight-comment-modal modal ${highlightCommentModalStyle}`}>
            <div className="modal-content">
              <div className="modal-header left-align">
                <Button
                  buttonClass="button close-highlight-comment-modal medium-padding yellow radius-5 text-black"
                  onClick={() => this.hideModal('highlightCommentModalStyle')}
                >
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </Button>
              </div>
              <div className="modal-body">
                <Form onSubmit={this.saveHighlight}>
                  <TextArea
                    name="highlight-comment"
                    textAreaClass="radius-5 medium-text textarea"
                    value={comment}
                    rows={4}
                    onChange={this.handleChange}
                    isRequired={true}
                  />
                  <div className="center-align">
                    <Button type="submit" loading={loading}>
                      Comment
                    </Button>
                  </div>
                </Form>
                <div className="divider" />
                <div className="selection">"{highlightedText}"</div>
              </div>
            </div>
            {htmlHelper.tagGenerator('br', null, 10)}
          </div>
          {/* Highlight details modal */}
          {(article.highlights && article.highlights.length && (
            <ArticleHighlightsDetails article={article} />
          ))
            || ''}
        </div>
      </div>
    );
  }
}

ArticleHighlight.propTypes = {
  article: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  editorState: PropTypes.object,
  getSelection: PropTypes.func,
  highlightArticle: PropTypes.func,
  clearHighlightArticleStore: PropTypes.func,
  clearCreateRateStore: PropTypes.func
};

const mapStateToProps = ({ articles: { highlight: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { highlightArticle, clearHighlightArticleStore, clearCreateRateStore }
)(ArticleHighlight);
