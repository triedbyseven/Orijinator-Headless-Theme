import React from 'react';

export interface HeaderProps { }

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="container">
      <div className="hamburgerContainer">
        <button className="uk-flex uk-flex-column uk-flex-middle" uk-toggle="target: #offcanvas-push">
          <div className="topBar" />
          <div className="midBar" />
          <div className="bottomBar" />
        </button>
      </div>
      <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
        <div className="uk-offcanvas-bar">

          <button className="uk-offcanvas-close" type="button" uk-close></button>

          <h3>Title</h3>

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
            padding: 1rem 0;
          }
          .hamburgerContainer {
            width: 22px;
            padding: 1rem;
            transform: rotate(-45deg);
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
          button {
            border: none;
            background-color: transparent;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
