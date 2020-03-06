import React from 'react';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="container">
      <div className="hamburgerContainer uk-hidden@s">
        <button
          className="uk-flex uk-flex-column uk-flex-middle"
          uk-toggle="target: #offcanvas-push"
        >
          <div className="topBar" />
          <div className="midBar" />
          <div className="bottomBar" />
        </button>
      </div>
      <nav>
        <div className="desktop-menu">
          <ul className="uk-navbar-nav uk-flex-right uk-visible@m">
            <li className="uk-active">
              <a href="#welcome" data-uk-scroll>
                Welcome
              </a>
            </li>
            <li>
              <a href="#whoweare" data-uk-scroll>
                Who We Are
              </a>
            </li>
            <li>
              <a href="#digital" data-uk-scroll>
                Digital
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
        <div className="uk-offcanvas-bar mobile-menu">
          <span className="uk-offcanvas-close">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="close"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1.06"
                d="M16,16 L4,4"
              ></path>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="1.06"
                d="M16,4 L4,16"
              ></path>
            </svg>
          </span>

          <ul className="uk-nav">
            <li className="uk-active">
              <a href="#welcome" data-uk-scroll>
                Welcome
              </a>
            </li>
            <li>
              <a href="#whoweare" data-uk-scroll>
                Who We Are
              </a>
            </li>
            <li>
              <a href="#digital" data-uk-scroll>
                Digital
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .close-tray {
            font-size: 20px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 00;
          }
          .container {
            z-index: 9999;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 0;
          }
          .hamburgerContainer {
            position: relative;
            z-index: 9999;
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
            outline-color: #03c3da;
          }
          .mobile-menu {
            border-radius: 0 20px 20px 0;
          }
          .mobile-menu li a {
            font-family: 'Montserrat', sans-serif;
          }
          .mobile-menu .uk-nav {
            margin-top: 2rem;
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
