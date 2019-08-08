import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

const ShareArticle = () => {
  const shareArticle = window.location.href;
  return (
    <div>
      <div>
        <FacebookShareButton className="small-h-margin left cursor-pointer" url={shareArticle}>
          <FacebookIcon size={32} round black />
        </FacebookShareButton>
        <TwitterShareButton className="small-h-margin left cursor-pointer" url={shareArticle}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          className="small-h-margin left cursor-pointer"
          url={shareArticle}
          windowWidth={750}
          windowHeight={600}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton
          className="small-h-margin left cursor-pointer"
          url={shareArticle}
          body="body"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
      <div className="divider" />
    </div>
  );
};

export default ShareArticle;
