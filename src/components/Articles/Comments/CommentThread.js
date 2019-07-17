import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faClock,
  faPenAlt,
  faTrash,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';
import './Comments.scss';
import { css } from '@emotion/core';
import { fetchComments } from '../../../actions';
import { Img } from '../../common';
import timeStamp from '../../../helpers/timeStamp';
import avatar from '../../../assets/images/profile_plaholder.png';

export class CommentThread extends Component {
  state = { comments: '', slug: '' };

  componentWillMount() {
    const { comments, fetchComments } = this.props;
    fetchComments(this.props.slug);
    this.setState({ comments });
  }

  render() {
    const { loading, comments, isAuth, profile } = this.props;

    return (
      <div id="wrap-comment-thread">
        {loading ? (
          <BeatLoader
            css={css`
              display: block;
              margin: 0 auto;
              text-align: center;
              border-color: red;
              padding-bottom: 15px;
              margin-bottom: 30px;
            `}
            size={15}
            color="#f9d342"
            loading={loading}
          />
        ) : (
          ''
        )}
        <ul className="list-block comments-wrapper">
          {(comments || []).map((comment, key) => (
            <li key={key}>
              {/* avatar */}
              <div className="comment-icon hide-on-small">
                <div className="image">
                  <Img imgSrc={comment.commentAuthor.image || avatar} alt="Profile" />
                </div>
              </div>
              {/* comment body */}
              <div className="comment-message-wrapper">
                <div>
                  <Link to="/" className="text-success">
                    {`${comment.commentAuthor.firstName} ${comment.commentAuthor.lastName}`}{' '}
                    {comment.commentAuthor.username || ''}
                  </Link>
                  <br />
                  <div className="text-grey small-v-margin timestamp">
                    {timeStamp(comment.createdAt)}
                  </div>
                </div>
                <div className="large-v-padding">{comment.body}</div>
                {/* comment actions */}
                <div className="row">
                  <span className="small-screen-4 medium-screen-4 large-screen-2">
                    <button className="light text-black">
                      <FontAwesomeIcon icon={faThumbsUp} className="text-grey" />
                      &nbsp; likes
                    </button>
                  </span>
                  {isAuth && profile.id === comment.userId ? (
                    <span className="small-screen-4 medium-screen-4 large-screen-2 right-align">
                      <button className="light text-black">
                        <FontAwesomeIcon icon={faClock} className="text-grey" />
                        &nbsp; Edit History
                      </button>
                      <button className="success text-white">
                        <FontAwesomeIcon icon={faPenAlt} />
                        &nbsp; Edit
                      </button>
                      <button className="danger text-white">
                        <FontAwesomeIcon icon={faTrash} />
                        &nbsp; Delete
                      </button>
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="divider white" />
            </li>
          ))}
          <div>
            {(!loading && !comments) || !comments.length > 0 ? (
              <div class="center-align">
                <FontAwesomeIcon
                  icon={faCommentAlt}
                  className="text-light-grey fa-4x center-align"
                />
                <h2 className="center-align large-v-padding">No comment yet</h2>
              </div>
            ) : (
              ''
            )}
          </div>
        </ul>
        <div className="clear" />
      </div>
    );
  }
}

CommentThread.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
  profile: PropTypes.object,
  comments: PropTypes.array,
  slug: PropTypes.string,
  rating: PropTypes.number,
  params: PropTypes.object,
  match: PropTypes.object,
  loading: PropTypes.bool
};
const mapStateToProps = ({
  user: { isAuth, profile },
  comments: { fetchComments: { comments, message, errors } }
}) => ({ isAuth, profile, comments, message, errors });

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentThread);
