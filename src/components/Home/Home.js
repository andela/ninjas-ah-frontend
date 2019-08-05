import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Layout from '../Layout';
import Tags from '../Articles/Tags/Tags';
import ListOfArticles from '../Articles/ListOfArticles/ListOfArticles';
import './Home.scss';
import SignupBanner from './SignupBanner/SignupBanner';

class Home extends Component {
  state = { welcome: 'Welcome to Authors Haven' };

  render() {
    return (
      <Layout>
        <div id="Home">
          <MetaTags>
            <title> {this.welcome}</title>
            <meta
              name="description"
              content="Create a community of like minded authors to foster inspiration and innovation by leveraging the modern web"
            />
            <meta property="og:title" content="Authors Haven" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <Tags />
          <SignupBanner />
          <div className="container">
            <div className="contentColumn">
              <ListOfArticles />
            </div>
            <div className="sidebarColumn">
              <br />
              <div className="light small-padding">
                <h2>Sidebar content...</h2>
              </div>
            </div>
          </div>
          <div className="divider light" />
        </div>
      </Layout>
    );
  }
}

export default Home;
