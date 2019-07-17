import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentThread from './CommentThread';
import CommentForm from './CommentForm';
import './Comments.scss';

export default class Comments extends Component {
  state = { title: 'Comments' };

  render() {
    return (
      <div id="wrap-comments" className="radius-2">
        <h1 className="nobold medium-h-padding medium-v-padding center-align">
          {this.state.title}
        </h1>
        <CommentForm slug={this.props.slug} />
        <div className="clear" />
        <CommentThread slug={this.props.slug} />
        <div className="clear" />
      </div>
    );
  }
}

Comments.propTypes = { slug: PropTypes.string };
