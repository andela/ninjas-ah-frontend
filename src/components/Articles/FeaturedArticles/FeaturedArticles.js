import React, { Component } from 'react';
import 'dotenv/config';
import placeholder from '../../../assets/images/placeholder.png';

export default class FeaturedArticles extends Component {
  state = { featured: 'featured' };

  render() {
    const { featured } = this.state;
    return (
      <section className="light" alt={featured}>
        <div className="container">
          <div className="row">
            <div className="small-screen-4 medium-screen-2 large-screen-2">
              <div className="card">
                <div className="image">
                  <img src={placeholder} className="radius-1" alt="Authors" />
                </div>
                <h1>
                  <a href="#">Does Our Success Depend On Our Genes?</a>
                </h1>
                <div>
                  Genes define almost everything about a living being. Do they also control our
                  success?
                </div>
                <div className="text-grey small-text medium-v-padding card-info">
                  <span>April 18</span> &bull; <span>4 Likes</span> &bull;
                  <span>Rates: 4</span>
                </div>
              </div>
            </div>
            <div className="small-screen-4 medium-screen-2 large-screen-2">
              <div className="card">
                <div className="small-screen-4 medium-screen-4 large-screen-2">
                  <div className="image hide-on-small hide-on-medium">
                    <img src={placeholder} className="radius-1" alt="Authors" />
                  </div>
                  <h2 className="medium-text nobold">
                    <a href="#">
                      Tech Platforms Love Moving Fast — Except When Their Users Are in Trouble
                    </a>
                  </h2>
                  <div className="text-grey small-text medium-v-padding card-info">
                    <span>April 18</span> &bull; <span>4 Likes</span> &bull;
                  </div>
                </div>
                <div className="small-screen-4 medium-screen-4 large-screen-2">
                  <div className="image hide-on-small hide-on-medium">
                    <img src={placeholder} className="radius-1" alt="Authors" />
                  </div>
                  <h2 className="medium-text nobold">
                    <a href="#">
                      Tech Platforms Love Moving Fast — Except When Their Users Are in Trouble
                    </a>
                  </h2>
                  <div className="text-grey small-text medium-v-padding card-info">
                    <span>April 18</span> &bull; <span>4 Likes</span> &bull;
                    <span>Rates: 4</span>
                  </div>
                </div>
                <div className="small-screen-4 medium-screen-4 large-screen-2">
                  <div className="image hide-on-small hide-on-medium">
                    <img src={placeholder} className="radius-1" alt="Authors" />
                  </div>
                  <h2 className="medium-text nobold">
                    <a href="#">
                      Tech Platforms Love Moving Fast — Except When Their Users Are in Trouble
                    </a>
                  </h2>
                  <div className="text-grey small-text medium-v-padding card-info">
                    <span>April 18</span> &bull; <span>4 Likes</span> &bull;
                    <span>Rates: 4</span>
                  </div>
                </div>
                <div className="small-screen-4 medium-screen-4 large-screen-2">
                  <div className="image hide-on-small hide-on-medium">
                    <img src={placeholder} className="radius-1" alt="Authors" />
                  </div>
                  <h2 className="medium-text nobold">
                    <a href="#">It’s Time for Tech Companies to Adopt a ‘Do No Harm’ Approach</a>
                  </h2>
                  <div className="text-grey small-text medium-v-padding card-info">
                    <span>April 18</span> &bull; <span>4 Likes</span> &bull;
                    <span>Rates: 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
      </section>
    );
  }
}
