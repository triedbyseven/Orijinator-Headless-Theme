import React from 'react';

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return (
    <div className="uk-flex uk-flex-center uk-flex-middle container">
      <div className="reserved">
        <span>ORIJINATOR</span> ©<span>2020</span> All Rights Reserved.
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            padding: 2rem 0;
            background-color: #111111;
            border-top: 1px solid #ccc;
          }
          .reserved {
            font-size: 14px;
            font-family: 'Montserrat', sans-serif;
            color: #868686;
          }
          span {
            color: #03c3da;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
