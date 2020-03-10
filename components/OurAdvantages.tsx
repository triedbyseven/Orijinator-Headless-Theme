import React from 'react';

export interface OurAdvantagesProps {}

const OurAdvantages: React.SFC<OurAdvantagesProps> = () => {
  return (
    <div id="digital" className="uk-flex-middle container" uk-grid="true">
      <div className="uk-width-1-1@s uk-padding-large padding-fix">
        <div className="main-content">
          <h3 data-uk-parallax="y: 150,0; easing: -2; media: @m;">
            What Makes Us
          </h3>
          <h2 data-uk-parallax="y: 200,0; easing: -2; media: @m;">
            Creating Digital Experiences
          </h2>
          <p data-uk-parallax="y: 250,0; easing: -2; media: @m;">
            The means to create a successful business has evolved. With channel
            after channel that continues to become a part of what will determine
            your success online, it can seem difficult if not impossible to know
            where to start. <br />
            <br />
            We understand the journey ahead to building your business and we can
            help you in the process. Through our unique plans and consulting we
            aim to drive your business to success. Larger established companies
            should not benefit from technology only, it’s 2020 and we are
            changing this now.
          </p>
          <img
            src="ouradvantages_01.jpg"
            title="digital success"
            data-uk-parallax="y: 300,0; easing: -2; media: @m;"
          />
        </div>
      </div>
      <style jsx>
        {`
          .uk-grid {
            margin-left: 0;
          }
          .container {
            text-align: center;
            background-color: #fff;
            margin-top: 0;
            padding: 6rem 0;
          }
          .main-content {
            font-size: 17px;
            font-family: 'Montserrat', sans-serif;
            display: inline-block;
            max-width: 1170px;
            width: 100%;
          }
          h2 {
            font-size: 45px;
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
          p {
              margin-bottom: 3rem;
          }
          .padding-fix {
            padding-bottom: 0;
          }
          @media only screen and (max-width: 960px) {
            h2 {
              font-size: 40px;
            }
          @media only screen and (max-width: 640px) {
            .container {
              padding 1rem 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OurAdvantages;
