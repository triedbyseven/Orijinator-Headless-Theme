import React from 'react';

export interface WhoWeAreProps { }

const WhoWeAre: React.SFC<WhoWeAreProps> = () => {
  return (
    <div className="uk-flex uk-flex-middle container" uk-grid="true">
      <div className="uk-flex uk-flex-right uk-width-1-1@s uk-width-1-2@m uk-padding-large">
        <div className="image-container">
          <img
            uk-parallax="y: 100,0; easing: -2; media: @m;"
            src="/whoweare__01.jpg"
            alt="my image"
            className="background-image"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div uk-parallax="y: 150,0; easing: -2; media: @m;" className="uk-card uk-card-default uk-card-body card-detail uk-padding-small">
            <img
              src="collab_think.png"
              title="branding_icon"
              style={{ width: 30 }}
            />
            <h4>Collaborative</h4>
            <p>
              Small or big ideas we're here for the long run.
              </p>
          </div>
        </div>
      </div>
      <div uk-parallax="y: 175,0; easing: -1; media: @m;" className="uk-width-1-1@s  uk-width-1-2@m uk-padding-large">
        <div className="main-content">
          <h3>Who We Are</h3>
          <h2>We Are Orijinators</h2>
          <div className="inner-content">
            <div className="left-border"></div>
            <div className="sub-headline">Pushing the entrepreneur forward</div>
            <p>
              Here at Orijinators we acknowledge the hard working, trend
              setting, taking names while pushing their vision foward
              entrepreneur. We build products and more importantly relationships
              with you, the entrepreneur, that not only help scale business
              month to month but year after year.
            </p>
            <a href="" className="orijin-button">
              Work With Us?
              <div className="border"></div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 0;
            padding: 6rem  0;
          }
          .uk-grid {
            margin-left: 0 !important;
            border-bottom: 1px solid #eee;
          }
          h2 {
            font-size: 40px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            margin-top: 1rem;
            margin-bottom: 3rem;
          }
          h3 {
            font-size: 14px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #03c3da;
            text-transform: uppercase;
          }
          .image-container {
            position: relative;
            width: 430px;
            height: 475px;
            border-radius: 22px;
          }
          .image-container h4 {
            margin: 12px 0 0 0;
          }
          .image-container p {
            margin-top: 10px
          }
          .image-container img.background-image {
            border-radius: 22px;
            box-shadow: 0 5px 15px rgba(0,0,0,.08);
          }
          .image-container .card-detail {
            position: absolute;
            max-width: 240px;
            left: -30px;
            bottom: -30px;
            border-radius: 22px;
          }
          .main-content {
            max-width: 460px;
            width: 100%;
          }
          .main-content .sub-headline {
            font-size: 14px;
            color: #cccccc;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .main-content p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
          }
          .main-content a {
            font-family: 'Montserrat', sans-serif;
          }
          .inner-content {
            position: relative;
            padding: 10px 0 0 40px;
          }
          .inner-content .left-border {
            position: absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 60px;
            background-color: #03c3da;
          }
          .orijin-button {
            position: relative;
            font-size: 15px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #000;
            text-transform: uppercase;
            text-decoration: none;
            transition: 0.5s;
          }
          a.orijin-button:hover {
            color: #03c3da;
          }
          .orijin-button .border {
            position: absolute;
            top: 10px;
            right: -75px;
            width: 60px;
            height: 1px;
            background: #dddddd;
          }
          @media only screen and (max-width: 960px) {
            .image-container {
              height: 300px;
            }
          }
        `}
      </style>
    </div >
  );
};

export default WhoWeAre;
