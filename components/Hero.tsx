import React, { useEffect, useState } from 'react';

export interface HeroProps {}

const Hero: React.SFC<HeroProps> = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  });

  return (
    <div className="uk-flex uk-flex-center uk-flex-middle container">
      <img
        src="hero_01.jpg"
        title="hero"
        style={{
          zIndex: -2,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <div className="content">
        <div className="tagline">
          Empowering entrepreneurship through technology.
        </div>
        <div className="company-title">
          <h1>Orijinator</h1>
        </div>
        <p>UI • UX • Progressive &amp; Mobile Applications • Websites</p>
        <a className="uk-button uk-button-default btn-radius">LEARN MORE</a>
      </div>
      <div className="icon-scroll"></div>
      <style jsx>
        {`
          .container {
            position: relative;
            width: 100%;
            height: ${height}px;
            border-bottom: 1px solid #eee;
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
          .company-title {
            width: 100%;
          }
          h1 {
            font-size: 60px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            text-align: center;
            text-transform: uppercase;
            margin-top: 1.5rem;
            margin-bottom: 2rem;
            margin-left: 1rem;
            margin-right: 1rem;
            padding: 1rem 2rem;
            border: 4px solid #000;
          }
          p {
            font-size: 15px;
            font-family: 'Montserrat', sans-serif;
            text-transform: none;
          }
          .tagline {
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
            color: #000;
          }
          .btn-radius {
            font-size: 18px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #fff;
            padding: .25rem 2rem;
            border-radius: 3px;
            background-color: #03c3da;
            border: 1px solid #03c3da;
          }
          .icon-scroll,
          .icon-scroll:before {
            position: absolute;
            left: 50%;
          }
          .icon-scroll {
            width: 40px;
            height: 70px;
            margin-left: -20px;
            bottom: 1.5rem;
            margin-top: -35px;
            box-shadow: inset 0 0 0 1px #000;
            border-radius: 25px;
          }
          .icon-scroll:before {
            content: '';
            width: 8px;
            height: 8px;
            background: #000;
            margin-left: -4px;
            top: 8px;
            border-radius: 4px;
            -webkit-animation-duration: 1.5s;
                    animation-duration: 1.5s;
            -webkit-animation-iteration-count: infinite;
                    animation-iteration-count: infinite;
            -webkit-animation-name: scroll;
                    animation-name: scroll;
          }
          @-webkit-keyframes scroll {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              -webkit-transform: translateY(46px);
                      transform: translateY(46px);
            }
          }
          @keyframes scroll {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              -webkit-transform: translateY(46px);
                      transform: translateY(46px);
            }
          }
          @media only screen and (max-width: 960px) {
            h1 {
              display: inline-block;
            font-size: 40px;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
