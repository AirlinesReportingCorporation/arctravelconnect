import React, { Component } from "react";
import Nav from "./components/nav";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="tc2021-main tc2021-main-v">
          <Nav />
          <div className="tc2021-header-container">
            <div className="container" style={{ maxWidth: "1170px" }}>
              <div className="row">
                <div className="col-md-12">
                  <div className="tc2021-header-image">
                    <img
                      src="https://arctravelconnect.com/globalassets/Home2/2021/JOIN-INDUSTRY-DISCUSSIONS.svg"
                      alt=""
                    />
                    <a href="/episodes" className="ctaBtn">
                      Join Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tc2021-episode-watch">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div style={{ postion: "relative" }}>
                    <img
                      src="https://arctravelconnect.com/globalassets/Home2/2021/CURRENT-EPISODE.svg"
                      alt=""
                    />
                    <div className="tc2021-episode-num">15</div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <h2>
                    ARC TravelConnect Virtual Series: Growth and Innovation at
                    the Denver Airport
                  </h2>
                  <p>
                    ARC’s Sara Hetland welcomes Laura L. Jackson, vice president
                    of air services development at Denver International Airport
                    (DEN), to discuss the latest developments and initiatives
                    shaping the airport.
                  </p>

                  <a
                    href="/episodes/growth-and-innovation-at-the-denver-airport/"
                    className="ctaBtn"
                  >
                    View Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="tc2021-virtual text-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="tc2021-virtual-title">About the Series</div>
                <img
                  style={{ maxWidth: "1000px", margin: "2rem auto 4rem" }}
                  src="https://arctravelconnect.com/globalassets/Home2/2021/STATS.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="row align-content-start">
              <div className="col-lg-4">
                <div className="tc2021-virtual-inner">
                  <img
                    className="pb-0"
                    src="https://arctravelconnect.com/globalassets/Home2/2020/virtual/tcvirtual-the-core.svg"
                    alt="The Core of this Event is Connection "
                  />
                  <img
                    className="pt-0"
                    src="https://arctravelconnect.com/globalassets/Home2/2021/DOTS-UNDER-THE-CORE.svg"
                    alt=""
                  />
                  <p>
                    Seven years ago, ARC created the TravelConnect conference to
                    bring together travel industry leaders to discuss the trends
                    shaping the future of travel. At the core of this event is
                    connection: TravelConnect is designed to spark meaningful
                    conversations across the travel ecosystem.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tc2021-virtual-inner">
                  <img
                    className="pb-0"
                    src="https://arctravelconnect.com/globalassets/Home2/2020/virtual/tcvirtual-valuable.svg"
                    alt="Valuable, Timely Content & Connections "
                  />
                  <img
                    className="pt-0"
                    src="https://arctravelconnect.com/globalassets/Home2/2021/DOTS-UNDER-VALUABLE.svg"
                    alt=""
                  />
                  <p>
                    These conversations remain just as important — maybe more so
                    — in the wake of COVID-19. However, the needs of our
                    industry have changed. ARC seeks to deliver the valuable,
                    timely content and connections of TravelConnect while
                    adapting to the needs of our customers during this
                    challenging time.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tc2021-virtual-inner">
                  <img
                    className="pb-0"
                    src="https://arctravelconnect.com/globalassets/Home2/2020/virtual/tcvirtual-free.svg"
                    alt="Free Virtual Series "
                  />
                  <img
                    className="pt-0"
                    src="https://arctravelconnect.com/globalassets/Home2/2021/DOTS-UNDER-FREE.svg"
                    alt=""
                  />
                  <p>
                    ARC will host a free TravelConnect virtual series of events
                    throughout 2020 and beyond, bringing together industry
                    leaders for valuable conversations, and providing
                    opportunities for attendees to connect with each other.
                    These virtual events will replace the 2020 in-person
                    conference originally scheduled for October, which is now
                    cancelled, propelling ARC and the industry into 2021.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tc2021-virtual-info">
            <div className="tc2021-questions">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1 text-center">
                    <img
                      src="https://arctravelconnect.com/globalassets/Home2/2021/HAVE-ANY-QUESTIONS.png"
                      alt=""
                      style={{ maxwidth: "650px" }}
                    />
                    <div className="mt-3">
                      <span className="tc22-reachout">
                        Please Reach Out To:
                      </span>
                      <a
                        className="tc22-email-link"
                        href="mailto:TravelConnectTeam@arccorp.com"
                      >
                        TravelConnectTeam@arccorp.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tc2021-omni">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12 text-left"
                  style={{ position: "relative", zIndex: "8" }}
                >
                  <img
                    style={{ paddingTop: "0", maxWidth: "960px" }}
                    src="https://arctravelconnect.com/globalassets/Home2/2021/OMNICHANNEL.svg"
                    alt=""
                  />
                  <p
                    style={{
                      maxWidth: "768px",
                      marginLeft: "auto",
                      fontSize: "1.25rem !important",
                    }}
                  >
                    Travelers use a variety of platforms to shop, buy and
                    service their trips. Today, travelers’ options are limited
                    to the purchase channel they use. Our industry is working to
                    create an omnichannel environment where travelers can buy
                    anywhere and receive service anywhere, with access to all
                    the products and perks they love.
                    <br />
                    <a
                      href="https://www2.arccorp.com/about-us/arc-omnichannel-retailing/"
                      target="_blank"
                      className="ctaBtn"
                    >
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="social" className="tc2021-social tcContainer">
            <div className="tcSocial">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="hashtag">#TravelConnect</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="social-subtitle"
                      style={{ marginTop: "30px" }}
                    >
                      <img
                        src="https://www2.arccorp.com/globalassets/home2/2020/homepage/find-us-on.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <a
                      href="https://www.facebook.com/ARCtalk"
                      title="facebook"
                      target="_blank"
                      className="icon-social icon-facebook"
                    ></a>
                  </div>
                  <div className="col-md-3">
                    <a
                      href="https://twitter.com/ARCtalk"
                      title="twitter"
                      target="_blank"
                      className="icon-social icon-twitter"
                    ></a>
                  </div>
                  <div className="col-md-3">
                    <a
                      href="https://www.linkedin.com/company/6509/"
                      target="_blank"
                      className="icon-social icon-linkedin"
                    ></a>
                  </div>
                  <div className="col-md-3">
                    <a
                      href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw/"
                      target="_blank"
                      className="icon-social icon-youtube"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tc2021-assistance">
            <div className="tc2021-assistance-inner">
              <div className="container">
                <div className="row ">
                  <div className="col-md-4">
                    <div className="tc2021-assistance-1">
                      Need <br />
                      Further <br />
                      Assistance?
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tc2021-assistance-2">
                      <div className="tc2021-h2">General Inquiries</div>
                      GENERAL INQUIRIES
                      <strong>TravelConnect Team</strong>
                      <br />
                      <a href="mailto:TravelConnectTeam@arccorp.com">
                        TravelConnectTeam@arccorp.com
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tc2021-assistance-2">
                      <div className="tc2021-h2">Press</div>
                      <strong>Randy Spoon</strong>
                      <br />
                      (703) 816-5119
                      <br />
                      <a href="mailto:rspoon@arccorp.com">rspoon@arccorp.com</a>
                    </div>
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

export default App;
