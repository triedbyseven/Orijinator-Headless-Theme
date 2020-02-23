import React from 'react';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <div className="container">
      <div className="hamburgerContainer" onClick={() => alert('Clicked!')}>
        <button className="uk-flex uk-flex-column uk-flex-middle">
          <div className="topBar" />
          <div className="midBar" />
          <div className="bottomBar" />
        </button>
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
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
