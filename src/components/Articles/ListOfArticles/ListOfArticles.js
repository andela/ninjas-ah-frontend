import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'dotenv/config';
// import Pagination from 'rc-pagination';
// import Select from 'rc-select';
// import localeInfo from 'rc-pagination/lib/locale/en_US';
// import 'rc-pagination/assets/index.css';
// import 'rc-select/assets/index.css';
import PropTypes from 'prop-types';
import { getAllArticles } from '../../../actions';
import placeholder from '../../../assets/images/placeholder.png';
import timeStamp from '../../../helpers/timeStamp';
import { Img } from '../../common';
import './listOfArticles.scss';
import Pagination from '../Pagination';

const { REACT_APP_IMAGE_BASE_URL } = process.env;
export class ListsOfArticles extends Component {
  state = { imageRectangle: 'w_400,ar_16:9,c_fill,g_auto,e_sharpen' };

  fetAllArticles() {
    this.props.getAllArticles();
  }

  componentWillMount() {
    this.fetAllArticles();
  }

  onChange = (offset, limit) => {
    const pagination = {
      limit,
      offset: offset + limit
    };
    this.setState({ current: offset });
    console.log('query', `limit=${limit}&?offset=${offset + limit}`);
    this.props.getAllArticles(pagination);
  };

  render() {
    const { articles, articlesCount } = this.props;
    const { imageRectangle, current } = this.state;
    console.log(articlesCount);
    return (
      <div className="row" id="articleCard">
        {(articles || []).map((article, key) => (
          <div key={key}>
            <div className="card">
              <div className="small-screen-4 medium-screen-1 large-screen-1">
                <div className="image">
                  <Link to={`/articles/${article.slug}`}>
                    <Img
                      imgSrc={
                        article.coverUrl
                          ? `${REACT_APP_IMAGE_BASE_URL}/${imageRectangle}/${article.coverUrl}`
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
                  <Link to={`/articles/${article.slug}`}>
                    {article.id} - {article.title}
                  </Link>
                </h2>
                <div className="small-v-padding hide-on-small">{article.description}</div>
                <div className="text-grey small-text medium-v-padding card-info">
                  <span>{article.author ? article.author.username : ''}</span>{' '}
                  <span>{timeStamp(article.createdAt)}</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
            <div className="divider light" />
          </div>
        ))}
        <div className="clear" />
        <div className="row pagination">
          <Pagination />
          {/* <Pagination
            showQuickJumper={true}
            defaultPageSize={2}
            pageSize={2}
            defaultCurrent={0}
            current={current}
            onShowSizeChange={this.onShowSizeChange}
            onChange={this.onChange}
            total={11}
            locale={localeInfo}
          /> */}
        </div>
        <div className="clear" />
      </div>
    );
  }
}

ListsOfArticles.propTypes = {
  articles: PropTypes.array,
  getAllArticles: PropTypes.func.isRequired,
  articlesCount: PropTypes.number
};
const mapStateToProps = ({ articles: { articles, articlesCount } }) => ({
  articles,
  articlesCount
});

export default connect(
  mapStateToProps,
  { getAllArticles }
)(ListsOfArticles);
