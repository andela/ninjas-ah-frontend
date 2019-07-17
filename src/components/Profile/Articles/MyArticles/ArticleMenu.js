import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './ArticleMenu.scss';

const ArticleMenu = () => (
  <section className="grab-article-menu">
    <div className="container">
      <ul className="list-inline">
        <li>
          <Link className="primary medium-padding radius-5 bold" to="/profile/article/new">
            <FontAwesomeIcon icon={faPlus} /> Create New
          </Link>
        </li>
        <li>
          <Link to="/profile/articles">Published</Link>
        </li>
        <li>
          <Link to="/profile/articles/drafts">Drafts</Link>
        </li>
        <li>
          <Link to="/profile/articles/comments">Comments</Link>
        </li>
        <li>
          <Link to="/profile/articles/highlights">Highlights</Link>
        </li>
        <li>
          <Link to="/profile/articles/bookmarks">Bookmarks</Link>
        </li>
        <li>
          <Link to="/profile/articles/favorites">favorites</Link>
        </li>
      </ul>
    </div>
  </section>
);

export default ArticleMenu;
