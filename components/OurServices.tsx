import React from 'react';

export interface OurServicesProps {}

const OurServices: React.SFC<OurServicesProps> = () => {
  return (
    <div className="uk-flex-middle container" uk-grid="true">
      <div className="uk-flex uk-flex-right uk-width-1-1@s uk-width-1-2@m uk-padding-large">
        <div className="image-container">
          <img
            data-uk-parallax="y: 100,0; easing: -2; media: @m;"
            src="/ourservices_01.jpg"
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
          <div
            data-uk-parallax="y: 150,0; easing: -2; media: @m;"
            className="uk-card uk-card-default uk-card-body card-detail uk-padding-small"
          >
            <img
              src="collab_think.png"
              title="branding_icon"
              style={{ width: 30 }}
            />
            <h4>Systematic</h4>
            <p>
              Each product comes together to reflect your brand and stand out
              among your competitors.
            </p>
          </div>
        </div>
      </div>
      <div className="uk-width-1-1@s uk-padding-large uk-width-1-2@m uk-padding-large padding-fix">
        <div
          className="main-content"
          data-uk-parallax="y: 175,0; easing: -1; media: @m;"
        >
          <h3>Our Services</h3>
          <h2>Branding, Websites, Apps, Oh My!</h2>
          <div
            className="inner-content"
            data-uk-parallax="y: 185,0; easing: -1; media: @m;"
          >
            <div className="left-border"></div>
            <div className="sub-headline">Plans • Monthly & Yearly</div>
            <p>
              All of our products start with getting to know your company,
              industry, goals and expectations. Working together will help us
              create and launch the right products for your customers and users.
            </p>
          </div>
        </div>
        <div
          data-uk-parallax="y: 325,0; easing: -1; media: @m;"
          className="uk-grid-small uk-child-width-1-2@s services"
          uk-grid="true"
        >
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <img
                src="branding_icon.jpg"
                title="branding_icon"
                style={{ width: 25 }}
              />
              <h4>Brand Design</h4>
              <p>
                Branding should be infused into every part of your business.
              </p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <img
                src="video_icon.jpg"
                title="branding_icon"
                style={{ width: 25 }}
              />
              <h4>Photography</h4>
              <p>
                4k images and video will give your digital presense the edge.
              </p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <img
                src="webdesign_icon.jpg"
                title="branding_icon"
                style={{ width: 25 }}
              />
              <h4>App • Web Design</h4>
              <p>
                Design goes hand in hand with branding let your UI/UX speak for
                itself.
              </p>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <img
                src="suitcase_icon.jpg"
                title="branding_icon"
                style={{ width: 25 }}
              />
              <h4>Marketing</h4>
              <p>
                How are your customers finding you? Be seen when it matters.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .services .uk-card {
            border: 1px solid #fff;
            transition: 0.3s ease-in-out;
            border-radius: 22px;
          }
          .services .uk-card:hover {
            border: 1px solid #03c3da;
          }
          .uk-grid {
            margin-left: 0;
            margin-top: 0;
          }
          .container {
            background-color: #fff;
            margin-top: 0;
            padding: 6rem 0;
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
          h4 {
            font-size: 18px;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            font-weight: 500;
            margin-top: 0.75rem;
            margin-bottom: 0rem;
          }
          .image-container {
            position: relative;
            max-width: 582px;
            width: 100%;
            height: 475px;
            border-radius: 22px;
          }
          .image-container h4 {
            margin: 12px 0 0 0;
          }
          .image-container p {
            margin-top: 10px;
          }
          .image-container img.background-image {
            border-radius: 22px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          }
          .image-container .card-detail {
            position: absolute;
            max-width: 240px;
            left: -30px;
            bottom: -30px;
            border-radius: 22px;
          }
          .main-content {
            max-width: 450px;
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
          .services {
            margin-top: 3rem;
          }
          .services p {
            color: #616161;
            margin-top: 0.5rem;
          }
          .padding-fix {
            padding-top: 0;
            padding-bottom: 2rem;
          }
          @media only screen and (max-width: 960px) {
            .image-container {
              height: 300px;
            }
          }
          @media only screen and (max-width: 640px) {
            .container {
              padding 1rem 0;
            }
            .image-container .card-detail {
              left: -30px;
              bottom: -30px;
              margin-left: 0.5rem;
              border-radius: 22px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OurServices;
