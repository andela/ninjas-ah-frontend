import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './UsersPagination.scss';
import { Button } from '../../common';
import { getUsers } from '../../../actions/user';

export class UsersPagination extends Component {
  state = {
    message: '',
    errors: {},
    listOfUsers: [],
    offset: 0,
    limit: 10,
    loadingPrev: false,
    loadingNext: false
  };

  componentWillReceiveProps = (nextProps) => {
    const { loading } = nextProps;
    this.setState(prevState => ({
      ...prevState,
      loadingPrev: loading && prevState.loadingPrev,
      loadingNext: loading && prevState.loadingNext
    }));
  };

  paginateUsers = (offset, limit) => {
    const { getUsers } = this.props;
    this.setState(prevState => ({
      ...prevState,
      offset: offset >= 0 ? offset : 0,
      limit: limit >= 0 ? limit : 5
    }));

    return getUsers(offset, limit);
  };

  nextPagination = (offset, limit) => {
    const { listOfUsers, maxUsersPerPage } = this.props;
    return (
      (listOfUsers.length > maxUsersPerPage
        && this.paginateUsers(offset + limit, limit)
        && this.setState(prevState => ({
          ...prevState,
          loadingNext: true
        })))
      || null
    );
  };

  prevPagination = (offset, limit) => (offset > 0
      && this.paginateUsers(offset - limit, limit)
      && this.setState(prevState => ({
        ...prevState,
        loadingPrev: true
      })))
    || null;

  render() {
    const { listOfUsers, maxUsersPerPage } = this.props;
    const { offset, limit, loadingNext, loadingPrev } = this.state;

    return (
      <div className="UsersPagination">
        {listOfUsers && (listOfUsers.length > maxUsersPerPage || offset) ? (
          <div className="center-align">
            <Button
              loading={loadingPrev}
              onClick={() => this.prevPagination(offset, limit)}
              buttonClass={`${
                offset ? 'light' : 'light-grey'
              } previous-button button radius-2 medium-padding medium-margin shadow-1 border b-light-grey`}
            >
              <FontAwesomeIcon icon={faChevronLeft} /> Prev
            </Button>
            <Button
              loading={loadingNext}
              onClick={() => this.nextPagination(offset, limit)}
              buttonClass={`${
                listOfUsers.length >= maxUsersPerPage ? 'light' : 'light-grey'
              } next-button button radius-2 medium-padding medium-margin shadow-1 border b-light-grey`}
            >
              Next <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

UsersPagination.propTypes = {
  listOfUsers: PropTypes.array,
  maxUsersPerPage: PropTypes.number,
  loading: PropTypes.bool,
  message: PropTypes.string,
  errors: PropTypes.object,
  getUsers: PropTypes.func
};

const mapStateToProps = ({ user: { getUsers: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UsersPagination);
