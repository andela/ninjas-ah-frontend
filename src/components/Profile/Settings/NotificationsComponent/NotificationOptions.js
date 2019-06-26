import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addOption, removeOption } from '../../../../actions/notificationActions';

class NotificationOptions extends Component {
  onChange = ({ value, checked }, key, onAddOption, onRemoveOption) => {
    if (checked) onAddOption(value, key);
    else onRemoveOption(value, key);
  };

  render() {
    const { configuration, onAddOption, onRemoveOption } = this.props;

    return (
      <div>
        {Object.keys(configuration).map((key, index) => (!configuration[key].articles.show ? (
          ''
        ) : (
            <div key={key}>
              <h3>{configuration[key].alias} preferences</h3>
              <p>Which notification would you need to get via {configuration[key].alias}</p>
              <div>
                <input
                  type="checkbox"
                  className="medium-margin"
                  data-test={key}
                  value="publish"
                  checked={configuration[key].articles.on.includes('publish')}
                  onChange={e => this.onChange(e.target, key, onAddOption, onRemoveOption)}
                />
                New articles from my favorite Authors
                <div className="diviser" />
                <input
                  type="checkbox"
                  className="medium-margin"
                  data-test={index}
                  value="comment"
                  checked={configuration[key].articles.on.includes('comment')}
                  onChange={e => this.onChange(e.target, key, onAddOption, onRemoveOption)}
                />
                New comments from my favorite articles
              </div>

              {Object.keys(configuration).length !== index ? (
                <div className="divider b-bottom-light-grey" />
              ) : null}
            </div>
        )))}
      </div>
    );
  }
}
NotificationOptions.propTypes = {
  configuration: PropTypes.object.isRequired,
  onAddOption: PropTypes.func,
  onRemoveOption: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onAddOption: (option, type) => dispatch(addOption(option, type)),
  onRemoveOption: (option, type) => dispatch(removeOption(option, type))
});
const mapStateToProps = ({ notification: { config } }) => ({ configuration: config });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationOptions);
