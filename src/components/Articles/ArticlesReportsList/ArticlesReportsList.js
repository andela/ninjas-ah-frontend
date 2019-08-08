import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import Layout from '../../Layout';
import AdminMenu from '../../Admin/AdminMenu';
import { Alert, Img, Button, Modal, ConfirmModal } from '../../common';
import { getArticlesReports, deleteArticleReport } from '../../../actions/articles';

export class ArticlesReportsList extends Component {
  state = {
    message: '',
    errors: {},
    reportToDelete: 0,
    articleSlug: '',
    deleteReportLoading: {},
    deleteReportConfirmModal: 'none',
    reportDetailsModalStyle: 'none',
    report: {},
    deleteReportButton: ''
  };

  componentWillMount = () => {
    const { getArticlesReports } = this.props;

    getArticlesReports();
  };

  componentWillReceiveProps = (nextProps) => {
    const { loading } = nextProps;

    this.setState(prevState => ({
      ...prevState,
      deleteReportLoading: (loading && prevState.deleteReportLoading) || {}
    }));
  };

  confirmDeleteReport = ({ id, articleSlug }, key) => {
    this.setState(prevState => ({
      ...prevState,
      deleteReportConfirmModal: 'block',
      reportToDelete: id,
      articleSlug,
      deleteReportButton: key
    }));
  };

  showReportDetailsModal = (report) => {
    this.setState(prevState => ({
      ...prevState,
      reportDetailsModalStyle: 'block',
      report
    }));
  };

  closeModal = modal => this.setState(prevState => ({ ...prevState, [modal]: 'none' }));

  deleteReport = () => {
    const { deleteArticleReport } = this.props;
    const { articleSlug, reportToDelete, deleteReportButton } = this.state;
    this.setState(prevState => ({
      ...prevState,
      deleteReportConfirmModal: 'none',
      deleteReportLoading: { [deleteReportButton]: { loading: true } }
    }));
    return deleteArticleReport(articleSlug, reportToDelete);
  };

  render() {
    const { currentArticlesReports } = this.props;
    const {
      message,
      errors,
      report,
      deleteReportLoading,
      reportDetailsModalStyle,
      deleteReportConfirmModal
    } = this.state;
    return (
      <Layout>
        <AdminMenu currentPage="reportsList" />
        <div className="ArticlesReportsList container">
          {(message || errors.message) && (
            <Alert
              alertType={(message && 'success') || (errors.message && 'danger')}
              message={message || errors.message}
            />
          )}
          <ConfirmModal
            showModal={deleteReportConfirmModal}
            message="Do you want to delete this report?"
            onClickYes={this.deleteReport}
            onClickNo={() => this.closeModal('deleteReportConfirmModal')}
          />
          <Modal
            modalStyle={reportDetailsModalStyle}
            closeModal={() => this.closeModal('reportDetailsModalStyle')}
          >
            <div className="medium-padding">
              <span className="bold large-text">{report.title}</span>
            </div>
            <div className="medium-padding">
              <span className="bold medium-text">{report.type}</span>
            </div>
            <p className="radius-2 border b-light-grey medium-padding light">{report.body}</p>
            <div className="modal-footer small-padding">
              <br />
              <Link to={`/articles/${report.articleSlug}`} className="text-info">
                View article
              </Link>
            </div>
          </Modal>
          {currentArticlesReports
            && currentArticlesReports.map((report, key) => report.reporter && (
                  <div
                    key={key}
                    className="small-screen-4 border b-light radius-1 small-v-margin small-padding shadow-1"
                  >
                    <div className="small-screen-1">
                      <Img
                        imgSrc={report.reporter.image || profileImagePlaceHolder}
                        imgClass="radius-6"
                        maxWidth="50px"
                        minWidth="45px"
                      />
                    </div>
                    <div className="small-screen-3">
                      <div className="small-padding">
                        Reporter:{' '}
                        <b>
                          {report.reporter.firstName} {report.reporter.lastName}
                        </b>
                      </div>
                      <div className="small-padding">
                        Type:{' '}
                        <b>
                          <i>{report.type}</i>
                        </b>
                      </div>
                      <span className="inline-block small-padding">
                        <Button
                          onClick={() => this.showReportDetailsModal(report)}
                          buttonClass="show-report-details-button button light shadow-1 border b-light-grey small-padding radius-2"
                        >
                          Details <FontAwesomeIcon icon={faInfoCircle} />
                        </Button>
                      </span>
                      <span className="inline-block small-padding">
                        <Button
                          loadingIconSize={18}
                          onClick={() => this.confirmDeleteReport(report, key)}
                          loading={
                            deleteReportLoading[key] ? deleteReportLoading[key].loading : false
                          }
                          buttonClass="delete-report-button button shadow-1 border b-light-grey small-padding danger radius-2 text-white"
                        >
                          Delete <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </span>
                    </div>
                    <div className="text-small right-align small-padding">
                      {new Date(report.createdAt).toDateString()} -{' '}
                      {new Date(report.createdAt).getHours()}:
                      {new Date(report.createdAt).getMinutes()}
                    </div>
                  </div>
            ))}
        </div>
      </Layout>
    );
  }
}

ArticlesReportsList.defaultProps = { match: { params: { slug: '' } } };

ArticlesReportsList.propTypes = {
  match: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  currentArticlesReports: PropTypes.array,
  getArticlesReports: PropTypes.func,
  getOneArticleReports: PropTypes.func,
  deleteArticleReport: PropTypes.func
};

const mapStateToProps = ({
  articles: {
    getOneArticleReports: { loading, message, errors },
    currentArticlesReports
  }
}) => ({
  loading,
  currentArticlesReports,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { getArticlesReports, deleteArticleReport }
)(ArticlesReportsList);
