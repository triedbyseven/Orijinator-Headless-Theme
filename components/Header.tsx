import React from 'react';

export interface HeaderProps { }

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="container">
      <nav uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">

        <div className="hamburgerContainer uk-hidden@m">
          <button className="uk-flex uk-flex-column uk-flex-middle" uk-toggle="target: #offcanvas-push" >
            <div className="topBar" />
            <div className="midBar" />
            <div className="bottomBar" />
          </button>
        </div>
        <div className="desktop-menu">
          <ul className="uk-navbar-nav uk-visible@m">
            <li className="uk-active"><a href="#">Welcome</a></li>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Digital</a></li>
          </ul>
        </div>
      </nav>
      {/* <nav className="desktop-menu uk-visible@m" uk-navbar="true">
        

      </nav> */}
      <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
        <div className="uk-offcanvas-bar">

          <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

          <h3>Orijinator</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
      </div>
      <style jsx>
        {`
          .container {
            z-index: 9999;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 0;
          }
          .hamburgerContainer {
            width: 22px;
            padding: 1rem;
            transform: rotate(-45deg);
          }
          .desktop-menu  {
            padding: 0 1rem;
            background-color: #fff;
          }
          .desktop-menu li a {
            font-size: 15px;
            font-family: 'Montserrat', sans-serif;
          }
          .topBar {
            width: 12px;
            height: 2px;
            background-color: #000;
            margin-bottom: 5px;
          }
          .midBar {
            width: 22px;
            height: 2px;
            background-color: #000;
            margin-bottom: 5px;
          }
          .bottomBar {
            width: 12px;
            height: 2px;
            background-color: #000;
          }
          .uk-navbar-nav>li>a {
            text-transform: capitalize;
          }
          button {
            border: none;
            background-color: transparent;
            padding: 0;
          }
          @media only screen and (max-width: 640px) {
            .desktopMenu {
              display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
