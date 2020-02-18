import React, { useEffect, useState } from 'react';

export interface HeroProps {}

const Hero: React.SFC<HeroProps> = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  });

  return (
    <div className="uk-flex uk-flex-center uk-flex-middle container">
      <div className="content">
        <div className="tagline">
          Empowering entrepreneurship through technology.
        </div>
        <h1>Orijinator</h1>
        <a className="uk-button uk-button-default btn-radius">LEARN MORE</a>
      </div>
      <style jsx>
        {`
          .container {
            position: relative;
            width: 100%;
            height: ${height}px;
          }
          .content {
            zindex: 2;
            position: relative;
            max-width: 980px;
            width: 100%;
            font-size: 18px;
            text-align: center;
            text-transform: uppercase;
          }
          h1 {
            font-size: 60px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            text-align: center;
            text-transform: uppercase;
            margin-top: 1.5rem;
            margin-bottom: 2rem;
            padding: 1rem 2rem;
            border: 4px solid #000;
          }
          .tagline {
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
            color: #000;
          }
          .btn-radius {
            font-size: 18px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            color: #fff;
            background-color: #03c3da;
            border: 1px solid #03c3da;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
