import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav";

class Episodes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="tc2021-main tc2021-main-v">
          <Nav />
          <div class="tc2020-article-top">
            <div class="tc2020-article-container">
              <div class="tc2020-article-episode2 d-flex align-items-center justify-content-center">
                <img src="https://arctravelconnect.com/globalassets/Home2/2020/virtual/episode.svg" />
                15
              </div>
              <div class="tc2020-article-title">
                Growth and Innovation at the <br />
                Denver International Airport
              </div>
            </div>
          </div>

          <div className="tc-22-white">
            <div class="tc2020-article-conent">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div class="usa-embed-container">
                      <iframe
                        width="700px"
                        src="https://www.youtube.com/embed/ylBV3q8-5IM"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <img
                      src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-about-episode.png"
                      style={{ marginBottom: "60px" }}
                      alt=""
                    />
                    <p>
                      ARC’s Sara Hetland welcomes Laura L. Jackson, vice
                      president of air services development at Denver
                      International Airport (DEN), to discuss the latest
                      developments and initiatives shaping the airport.
                    </p>

                    <p>
                      In this episode, Jackson details the growth and changes
                      DEN has experienced since 2019, including being ranked as
                      the third-busiest airport in the world in 2021. She shares
                      what data her team tracks and the external stakeholders
                      they engage with to promote Colorado travel as part of
                      their Vision 100 goal for 100 million annual passengers.
                    </p>

                    <div className="text-left">
                      <a
                        class="ctaBtn"
                        target="_blank"
                        href="https://youtu.be/ylBV3q8-5IM"
                      >
                        View Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industrytopics.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">
                      Data and Trends{" "}
                      <i
                        className="fa fa-caret-right ml-2"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industryspeakers.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">
                      Logo and Content here
                    </div>
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-releasedate.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">June 23, 2022</div>
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

export default Episodes;

var mountNode = document.getElementById("app");

ReactDOM.render(<Episodes />, mountNode);
