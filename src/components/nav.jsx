import React, { Component } from "react";

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tc2021-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tc2021-nav d-lg-flex d-md-flex flex-row align-items-center">
                <a className="tc2021-underline d-block" href="/">
                  <img
                    className="tc2021-logo"
                    src="https://arctravelconnect.com/globalassets/Home2/2021/TCVS-LOGO.svg"
                    alt="Travel Connect Virtual Series"
                  />
                </a>
                <a href="/episodes">Episodes</a>
                <a href="/tc2019/recap">2019 Recap</a>
                <a href="/2020-recap">2020 Recap</a>
                <div className="arc-logo ml-lg-auto ml-md-auto d-sm-block">
                  <div className="d-flex justify-content-center">
                    <a
                      target="_blank"
                      className="tc2021-underline con-social icon-facebook"
                      href="https://www.facebook.com/ARCtalk"
                    ></a>
                    <a
                      target="_blank"
                      className="tc2021-underline icon-social icon-twitter"
                      href="https://twitter.com/ARCtalk"
                    ></a>
                    <a
                      target="_blank"
                      className="tc2021-underline icon-social icon-linkedin"
                      href="https://www.linkedin.com/company/6509/"
                    ></a>
                    <a
                      target="_blank"
                      className="tc2021-underline icon-social icon-youtube"
                      href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw/"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
