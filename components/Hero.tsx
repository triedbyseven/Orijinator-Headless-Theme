import React, { useEffect, useState } from 'react';

export interface HeroProps {}

const Hero: React.SFC<HeroProps> = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  });

  return (
    <div
      id="welcome"
      className="uk-flex uk-flex-left uk-flex-middle container"
      uk-grid="true"
    >
      <img
        uk-parallax="y: 0,150; easing: -2; media: @m"
        src="hero_06.png"
        title="hero"
        className="hero-image"
      />
      <div className="inner-container">
        <div className="uk-width-1@s uk-width-1-1@m uk-width-1-2@l uk-padding-small">
          <div className="content">
            <div className="company-title">
              <h1>Orijinator</h1>
            </div>
            <div className="tagline">
              Empowering entrepreneurship through technology
            </div>
            <p>
              From websites to progressive apps to consistent brand execution
              Orijinator is a new type of agency that aims to help you compete
              and drive your brand using the hottest technology at affordable
              cost.
            </p>
            <p className="subtagline">
              UI • UX • Progressive &amp; Mobile Applications • Websites
            </p>
            <a
              data-uk-scroll
              href="#target"
              className="uk-button uk-button-default btn-radius"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
      <div className="icon-scroll uk-visible@m"></div>
      <style jsx>
        {`
          .container {
            position: relative;
            width: 100%;
            height: ${height}px;
          }
          .inner-container {
            max-width: 1470px;
            width: 100%;
            margin: 0 auto;
          }
          .hero-image {
            z-index: -2;
            position: absolute;
            bottom: -10%;
            right: 0;
            width: 825px;
          }
          .content {
            zindex: 2;
            position: relative;
            max-width: 535px;
            width: 100%;
            font-size: 18px;
            text-align: left;
            text-transform: uppercase;
          }
          .company-title {
            width: 100%;
          }
          h1 {
            font-size: 60px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            text-align: left;
            text-transform: uppercase;
            margin-left: -0.3rem;
            margin-bottom: 0;
          }
          p {
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.75;
            text-transform: none;
            color: #666;
          }
          .tagline {
            font-size: 14px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            color: #000;
          }
          .btn-radius {
            font-size: 18px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #000;
            padding: .25rem 2rem;
            border-radius: 3px;
            background-color: rgba(0, 0, 0, 0);
            border: 2px solid #000;
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
          @media only screen and (max-width: 1400px) { 
            .hero-image {
              width: 740px;
            }
          }
           @media only screen and (max-width: 1275px) {
            .hero-image {
              bottom: 0%;
              max-width: 640px;
              width: 100%;
            }
          }
          @media only screen and (max-width: 1200px) {
            .hero-image {
              bottom: 0;
              right: 0;
              max-width: 640px;
              width: 100%;
            }
          }
          @media only screen and (max-width: 1190px) {
            .hero-image {
              bottom: 5%;
              right: 0;
              max-width: 540px;
              width: 100%;
            }
          }
          @media only screen and (max-width: 1180px) {
            .container {
              overflow: hidden;
              align-items: flex-end;
              max-width: 100%;
             align-items: center;
              background: rgb(255,255,255);
background: linear-gradient(230deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 69%, rgba(255,255,255,0) 100%);
            }
            .content {
              margin: 0 auto;
            }
            .hero-image {
              max-width: 800px;
              top: -30%;
              right: 0;
              bottom: 0;
              transform: rotate(58deg);
            }
          }
          @media only screen and (max-width: 960px) {
            h1 {
              display: inline-block;
          }
          @media only screen and (max-width: 640px) {
            .container {
              overflow: hidden;
              align-items: flex-end;
              background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 50%, rgba(0,22,250,0) 100%);
            }
            h1 {
              font-size: 40px;
            }
            .hero-image {
                  top: -18%;
                  right: -8%;
            }
            .tagline {
              font-size: 10px;
            }
            .subtagline {
              font-weight: 200;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
