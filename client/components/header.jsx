import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header() {
  return (

    <nav className="navbar navbar-expand-sm navbar-light bg-header fixed-top">
      <div className="container">
        <AnchorLink className="navbar-brand" href="#home">Michael Chang</AnchorLink>
        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <AnchorLink className="nav-item nav-link" href="#home">Home <span className="sr-only">(current)</span></AnchorLink>
            <AnchorLink className="nav-item nav-link" href="#about">About</AnchorLink>
            <AnchorLink className="nav-item nav-link" href="#projects">Projects</AnchorLink>
            <AnchorLink className="nav-item nav-link" href="#skills">Skills</AnchorLink>
            <AnchorLink className="nav-item nav-link" href="#contact">Contact</AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
