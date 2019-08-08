import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { Alert, Form, Input, TextArea, Button, Modal } from '../../../common';
import './ArticleReport.scss';
import { reportArticle, clearReportArticleStore } from '../../../../actions/articles';

export class ArticleReport extends Component {
  state = {
    reportArticleModalStyle: 'none',
    reportTypes: ['Plagiarism', 'Defamation'],
    form: {
      title: '',
      type: 'Other',
      body: ''
    },
    errors: {},
    message: ''
  };

  componentWillReceiveProps = (nextProps) => {
    const { errors, message } = nextProps;
    this.setState(prevState => ({ ...prevState, message, errors }));

    return message && this.setState(prevState => ({ ...prevState, form: {} }));
  };

  hideModal = () => {
    const { clearReportArticleStore } = this.props;
    clearReportArticleStore();
    this.setState(prevState => ({ ...prevState, reportArticleModalStyle: 'none' }));
  };

  showModal = () => {
    this.setState(prevState => ({ ...prevState, reportArticleModalStyle: 'block' }));
  };

  handleChange = (e) => {
    const form = { [e.target.name]: e.target.value };
    this.setState(prevState => ({
      ...prevState,
      form: { ...prevState.form, ...form },
      errors: {}
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { form: { title, type, body } } = this.state;
    const { article, reportArticle } = this.props;

    return title && body && reportArticle({ title, type: [type], body }, article.slug);
  };

  render() {
    const { loading, profile, article } = this.props;
    const { reportArticleModalStyle, reportTypes, form, errors, message } = this.state;
    const error = errors.token || errors.authentication || errors.message;

    return (
      <div className="ArticleReport">
        {(message || error) && (
          <Alert alertType={(message && 'success') || 'danger'} message={message || error} />
        )}
        <Button
          onClick={() => this.showModal()}
          buttonClass="show-report-article-modal button medium-padding small-margin light radius-1 border b-light-grey"
        >
          <FontAwesomeIcon icon={faFlag} /> Report
        </Button>

        {(article.reports.length && profile.role === 'admin' && (
          <Link
            to={'/articles/reports'}
            className="button medium-padding small-margin light radius-1 border b-light-grey"
          >
            <FontAwesomeIcon icon={faFlag} /> View reports{' '}
            <span className="radius-7 danger text-white small-text bold small-padding">
              {article.reports.length}
            </span>
          </Link>
        ))
          || ''}
        <Modal modalStyle={reportArticleModalStyle} closeModal={this.hideModal}>
          <div className="">
            <Form
              formClass="Form large-padding radius-4 small-screen-3"
              onSubmit={this.handleSubmit}
            >
              <div className="small-screen-4">
                <Input
                  name="title"
                  type="text"
                  inputClass="medium-text radius-5"
                  placeholder="Title"
                  onChange={this.handleChange}
                  value={form.title}
                  error={errors.title}
                  errorWidth={180}
                />
              </div>
              <div className="small-screen-4 small-padding">
                <select
                  onChange={this.handleChange}
                  className="input-field radius-2 medium-text"
                  name="type"
                >
                  <option value="" hidden>
                    Type
                  </option>
                  {reportTypes.map((type, key) => (
                    <option key={key} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="small-screen-4">
                <TextArea
                  name="body"
                  textAreaClass="radius-5 medium-text textarea"
                  placeholder="Report"
                  rows={6}
                  onChange={this.handleChange}
                  value={form.body}
                  defaultValue={form.body}
                  error={errors.body}
                  errorWidth={250}
                />
              </div>
              <div className="small-screen-4">
                <Button type="submit" loading={loading}>
                  Report
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

ArticleReport.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  article: PropTypes.object,
  reportArticle: PropTypes.func,
  clearReportArticleStore: PropTypes.func
};

const mapStateToProps = ({
  user: { profile },
  articles: { reportArticle: { loading, message, errors } }
}) => ({
  profile,
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { reportArticle, clearReportArticleStore }
)(ArticleReport);
