import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faUsers, faFlag } from '@fortawesome/free-solid-svg-icons';
import './AdminMenu.scss';
import { getArticlesReports } from '../../../actions/articles';

const AdminMenu = ({ currentPage, getArticlesReports, currentArticlesReports }) => {
  useEffect(() => {
    getArticlesReports();
  }, [getArticlesReports]);

  return (
    <section className="AdminMenu">
      <div className="container">
        <ul className="list-inline">
          <li>
            <Link
              className={`inline-block ${currentPage === 'newUser' ? 'active' : ''}`}
              to="/users/new"
            >
              <FontAwesomeIcon icon={faPlus} />
              <FontAwesomeIcon icon={faUser} /> New user
            </Link>
          </li>
          <li>
            <Link
              className={`inline-block ${currentPage === 'reportsList' ? 'active' : ''}`}
              to="/articles/reports"
            >
              <FontAwesomeIcon icon={faFlag} /> Reported Articles{' '}
              <span className="radius-7 danger text-white small-text bold small-padding">
                {currentArticlesReports.length}
              </span>
            </Link>
          </li>
          <li>
            <Link
              className={`inline-block ${currentPage === 'usersList' ? 'active' : ''}`}
              to="/users"
            >
              <FontAwesomeIcon icon={faUsers} />
              Users
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

AdminMenu.defaultProps = {
  currentPage: '',
  currentArticlesReports: []
};

AdminMenu.propTypes = {
  currentPage: PropTypes.string,
  currentArticlesReports: PropTypes.array,
  getArticlesReports: PropTypes.func
};

const mapStateToProps = ({ articles: { currentArticlesReports } }) => ({ currentArticlesReports });

export default connect(
  mapStateToProps,
  { getArticlesReports }
)(AdminMenu);
