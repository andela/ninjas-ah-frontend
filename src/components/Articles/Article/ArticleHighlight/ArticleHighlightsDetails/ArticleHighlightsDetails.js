import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import profileImagePlaceHolder from '../../../../../assets/images/profile_plaholder.png';
import { Button, Alert, Img } from '../../../../common';
import './ArticleHighlightsDetails.scss';
import { clearCreateRateStore } from '../../../../../actions';
import {
  deleteArticleHighlight,
  clearDeleteArticleHighlightStore
} from '../../../../../actions/articles';

export class ArticleHighlightsDetails extends Component {
  state = {
    comment: '',
    errors: {},
    message: '',
    highlight: { commentAuthor: {} },
    highlightDetailsModalStyle: 'none'
  };

  componentDidMount = () => {
    this.attachClickEventToHighlightedTexts();
  };

  componentDidUpdate = () => {
    this.attachClickEventToHighlightedTexts();
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors, message } = nextProps;
    this.setState(prevState => ({ ...prevState, message, errors }));
  };

  componentWillUnmount = () => {
    const { clearCreateRateStore, clearDeleteArticleHighlightStore } = this.props;
    clearCreateRateStore();
    clearDeleteArticleHighlightStore();
  };

  attachClickEventToHighlightedTexts = () => {
    const elements = document.querySelectorAll('[style*="--highlight"]');
    elements.forEach(element => element.removeEventListener('click', this.showHighlightDetails));
    elements.forEach(element => element.addEventListener('click', this.showHighlightDetails));
  };

  hideModal = (modal) => {
    const { clearDeleteArticleHighlightStore } = this.props;
    clearDeleteArticleHighlightStore();
    this.setState(prevState => ({ ...prevState, comment: '', [modal]: 'none' }));
  };

  showModal = (modal) => {
    const { clearDeleteArticleHighlightStore } = this.props;
    clearDeleteArticleHighlightStore();
    this.setState(prevState => ({ ...prevState, [modal]: 'block' }));
  };

  showHighlightDetails = ({ srcElement }) => {
    const { article: { highlights } } = this.props;
    const { parentNode } = srcElement;
    const styleValue = parentNode.getAttribute('style').replace('--highlight-id:', '');
    const highlightId = styleValue.replace(';', '');
    const highlight = highlights.filter(val => val.id === Number.parseInt(highlightId, 10))[0];

    this.setState(prevState => ({
      ...prevState,
      highlight: highlight || { commentAuthor: {} },
      highlightDetailsModalStyle: (highlight && 'block') || 'none'
    }));
  };

  deleteHighlight = () => {
    const { highlight } = this.state;
    const {
      deleteArticleHighlight,
      clearCreateRateStore,
      article: { slug }
    } = this.props;

    clearCreateRateStore();
    deleteArticleHighlight(slug, highlight.id);
  };

  render() {
    const { profile, article, loading } = this.props;
    const { highlight, message, errors, highlightDetailsModalStyle } = this.state;

    return (
      <div className="ArticleHighlightsDetails">
        <div className="small-screen-4">
          {(message || errors.token || errors.authentication || errors.message) && (
            <Alert
              alertType={(message && 'success') || 'danger'}
              message={message || errors.token || errors.authentication || errors.message}
            />
          )}
        </div>
        <div className={`modal ${highlightDetailsModalStyle}`}>
          <div className="modal-content">
            <div className="modal-header left-align">
              <Button
                buttonClass="button close-highlight-details-modal medium-padding yellow radius-5 text-black"
                onClick={() => this.hideModal('highlightDetailsModalStyle')}
              >
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </Button>
            </div>
            <div className="modal-body">
              {profile.id === highlight.userId || profile.id === article.userId ? (
                <Button
                  onClick={this.deleteHighlight}
                  loading={loading}
                  buttonClass="right delete-highlight button medium-padding danger radius-1 text-white"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </Button>
              ) : (
                ''
              )}
              <div className="medium-v-padding center-align medium-text border b-light-grey radius-1">
                {highlight.comment || <span className="no-comment">No comment</span>}
              </div>
              {profile.id !== highlight.userId ? (
                <div className="center-align medium-text medium-padding">
                  <span className="inline-block medium-padding">
                    <Img
                      imgSrc={highlight.commentAuthor.image || profileImagePlaceHolder}
                      width="45px"
                      imgClass="radius-5"
                    />
                  </span>
                  <br />
                  {highlight.commentAuthor.firstName} {highlight.commentAuthor.lastName}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArticleHighlightsDetails.propTypes = {
  profile: PropTypes.object,
  article: PropTypes.object,
  highlight: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  clearCreateRateStore: PropTypes.func,
  deleteArticleHighlight: PropTypes.func,
  clearDeleteArticleHighlightStore: PropTypes.func
};

const mapStateToProps = ({
  user: { profile },
  articles: { deleteHighlight: { loading, message, errors } }
}) => ({
  profile,
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { deleteArticleHighlight, clearDeleteArticleHighlightStore, clearCreateRateStore }
)(ArticleHighlightsDetails);
