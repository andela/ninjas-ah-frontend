import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Alert, Button, ConfirmModal } from '../../../common';
import { deleteArticle, clearDeleteArticleStore } from '../../../../actions/articles';

export class ArticleDelete extends Component {
  state = {
    message: '',
    errors: {},
    deleteArticleConfirmModal: 'none'
  };

  componentWillReceiveProps = (nextProps) => {
    const { message, loading, history, clearDeleteArticleStore } = nextProps;
    return !loading && message && clearDeleteArticleStore() && history.goBack();
  };

  confirmDeleteArticle = () => {
    this.setState(prevState => ({
      ...prevState,
      deleteArticleConfirmModal: 'block'
    }));
  };

  closeModal = modal => this.setState(prevState => ({ ...prevState, [modal]: 'none' }));

  deleteArticle = (article) => {
    const { deleteArticle } = this.props;
    this.setState(prevState => ({
      ...prevState,
      deleteArticleConfirmModal: 'none'
    }));
    return deleteArticle(article);
  };

  render() {
    const { article, loading, message, errors } = this.props;
    const { deleteArticleConfirmModal } = this.state;
    return (
      <div className="ArticleDelete inline-block">
        {(message || errors.message) && (
          <Alert
            alertType={(message && 'success') || (errors.message && 'danger')}
            message={message || errors.message}
          />
        )}
        <ConfirmModal
          showModal={deleteArticleConfirmModal}
          message="Do you want to delete this article?"
          onClickYes={() => this.deleteArticle(article)}
          onClickNo={() => this.closeModal('deleteArticleConfirmModal')}
        />
        <Button
          loading={loading}
          onClick={() => this.confirmDeleteArticle()}
          buttonClass="delete-article-button button radius-1 medium-padding small-margin medium-text text-white danger"
        >
          Delete <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    );
  }
}

ArticleDelete.defaultProps = { history: {} };

ArticleDelete.propTypes = {
  history: PropTypes.object,
  article: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  deleteArticle: PropTypes.func,
  clearDeleteArticleStore: PropTypes.func
};

const mapStateToProps = ({ articles: { deleteArticle: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { deleteArticle, clearDeleteArticleStore }
)(ArticleDelete);
