import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Img, Form, Button } from '../common';
import { searchArticles } from '../../actions';
import './SearchArticles.scss';
import Layout from '../Layout';
import placeholder from '../../assets/images/placeholder.png';
import timeStamp from '../../helpers/timeStamp';

const { REACT_APP_IMAGE_BASE_URL } = process.env;
let style = { display: 'none' };
class SearchArticles extends Component {
  state = {
    display: false,
    open: false,
    filter: 'keyword',
    loading: false,
    errors: '',
    imageRectangle: 'w_400,ar_16:9,c_fill,g_auto,e_sharpen'
  };

  onOpenModal = () => {
    style = !this.state.display ? { display: 'block' } : {};
    this.setState({ open: true, searchArticle: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { author, keyword, tag } = this.state;
    const { searchArticles } = this.props;
    let url = '/articles';
    if (keyword) {
      url = `${url}?keyword=${keyword}`;
    }
    if (author) {
      url = `${url}${keyword ? '&' : '?'}author=${author}`;
    }
    if (tag) {
      url = `${url}${keyword || author ? '&' : '?'}tag=${tag}`;
    }
    searchArticles(url);
    style = !this.state.display ? { display: 'none' } : {};
    this.setState({ open: false, keyword: '', author: '', tag: '' });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { filter, searchArticle } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    const { searchArticles } = this.props;
    if (searchArticle !== '') {
      const payload = this.state.value;
      const url = `/articles?${filter}=${e.target.value}`;
      searchArticles(url, payload);
    }
  };

  render() {
    const { imageRectangle, searchArticle, keyword, author, tag, open } = this.state;
    const { articles } = this.props;
    return (
      <Layout>
        <div>
          <div className="container">
            <div className="row">
              <div className="grab-search center">
                <form>
                  <div
                    className="small-screen-4 medium-screen-4 large-screen-4"
                    style={open ? { display: 'none' } : {}}
                  >
                    <br />
                    <div className="input-field">
                      <Input
                        name="searchArticle"
                        type="text"
                        inputClass="radius-5 medium-text"
                        placeholder="Search"
                        onChange={this.handleChange}
                        value={searchArticle}
                      />
                    </div>
                  </div>
                </form>
                <div className="clear" />
              </div>
            </div>
            <div className="row center-align">
              <Link testID="link-test" className="advancedSearch" onClick={this.onOpenModal}>
                <Button style={open ? { display: 'none' } : {}}>Advanced Search</Button>
              </Link>
            </div>
          </div>
          <div classNames="row " style={style}>
            <br />
            <h2 className="center-align medium-v-padding">Search articles</h2>
            <Form testID="seacrchForm" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="small-screen-4 medium-screen-1 large-screen-1">
                  <div className="search-modal-input-name">Keyword</div>
                </div>
                <div className="small-screen-4 medium-screen-3 large-screen-3">
                  <Input
                    name="keyword"
                    type="text"
                    inputClass="medium-text radius-5"
                    placeholder="Keyword"
                    onChange={this.handleChange}
                    value={keyword}
                    errorWidth={180}
                  />
                </div>
              </div>
              <div className="row">
                <div className="small-screen-4 medium-screen-1 large-screen-1">
                  <div className="search-modal-input-name">Author</div>
                </div>
                <div className="small-screen-4 medium-screen-3 large-screen-3">
                  <Input
                    name="author"
                    type="text"
                    inputClass="medium-text radius-5"
                    placeholder="Author"
                    onChange={this.handleChange}
                    value={author}
                    errorWidth={180}
                  />
                </div>
                <div className="row">
                  <div className="small-screen-4 medium-screen-1 large-screen-1">
                    <div className="search-modal-input-name">Tag</div>
                  </div>
                  <div className="small-screen-4 medium-screen-3 large-screen-3">
                    <Input
                      name="tag"
                      type="text"
                      inputClass="medium-text radius-5"
                      placeholder="Tag"
                      onChange={this.handleChange}
                      value={tag}
                      errorWidth={180}
                    />
                  </div>
                </div>
              </div>
              <div className="small-screen-4">
                <Button type="submit" loading={''}>
                  Search
                </Button>
              </div>
            </Form>
          </div>
          <div className="divider" />
          <div className="row" id="articleCard">
            <div className="container">
              {(articles || []).map((article, key) => (
                <div key={key}>
                  <div className="card">
                    <div className="small-screen-4 medium-screen-1 large-screen-1">
                      <div className="image">
                        <Link to={`/articles/${article.slug}`}>
                          <Img
                            imgSrc={
                              article.coverUrl
                                ? `${REACT_APP_IMAGE_BASE_URL}/${imageRectangle}/${
                                  article.coverUrl
                                }`
                                : placeholder
                            }
                            imgClass="center radius-1"
                            alt={article.title.substring(20, 0)}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="small-screen-4 medium-screen-3 large-screen-3">
                      <h2 className="nobold">
                        <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                      </h2>
                      <div className="small-v-padding">{article.description}</div>
                      <div className="text-grey small-text medium-v-padding card-info">
                        <span>{article.author.username}</span>{' '}
                        <span>{timeStamp(article.createdAt)}</span>{' '}
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="divider light" />
                </div>
              ))}
              <div className="clear" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export const mapStateToProps = (store) => {
  const { searchArticles } = store;
  return searchArticles;
};
SearchArticles.propTypes = {
  searchArticles: PropTypes.func,
  articles: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
  location: PropTypes.object,
  pathname: PropTypes.string
};

export default connect(
  mapStateToProps,
  { searchArticles }
)(SearchArticles);
