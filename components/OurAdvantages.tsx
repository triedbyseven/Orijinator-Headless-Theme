import React from 'react';

export interface OurAdvantagesProps {}

const OurAdvantages: React.SFC<OurAdvantagesProps> = () => {
  return (
    <div className="uk-flex-middle container" uk-grid="true">
      <div className="uk-width-1-1@s uk-padding-large padding-fix">
        <div className="main-content">
          <h3>What Makes Us</h3>
          <h2>Creating Digital Experiences</h2>
          <p>
            The means to create a successful business has evolved. With channel
            after channel that continues to become a part of what will determine
            your success online, it can seem difficult if not impossible to know
            where to start. <br />
            <br />
            We understand the journey ahead to building your business and we can
            help you every step through that process. Through our unique plans
            and consultation we aim to drive your business to success. Larger
            established companies should not be the only ones who can utilize
            technology, it’s 2020 and we are changing this now.{' '}
          </p>
          <img src="ouradvantages_01.jpg" title="digital success" />
        </div>
      </div>
      <style jsx>
        {`
          .uk-grid {
            margin-left: 0;
          }
          .container {
            text-align: center;
            background-color: #f4faff;
            margin-top: 0;
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
        `}
      </style>
    </div>
  );
};

export default OurAdvantages;
