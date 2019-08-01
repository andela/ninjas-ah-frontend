import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faUsers, faFlag } from '@fortawesome/free-solid-svg-icons';
import './AdminMenu.scss';

const AdminMenu = () => (
  <section className="AdminMenu">
    <div className="container">
      <ul className="list-inline">
        <li>
          <Link className="inline-block" to="/users/new">
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faUser} /> New user
          </Link>
        </li>
        <li>
          <Link className="inline-block" to="/articles/reports">
            <FontAwesomeIcon icon={faFlag} /> Reported Articles
          </Link>
        </li>
        <li>
          <Link className="inline-block" to="/users">
            <FontAwesomeIcon icon={faUsers} />
            Users
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default AdminMenu;
