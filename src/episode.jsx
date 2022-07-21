import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav";

var episodeData = [
  {
    id: 1,
    title: <>2020 Outlook: Travel Recovery Trends to Watch</>,
    description: "About Here",
    url: "/episodes/2020-outlook-travel-recovery-trends-to-watch/",
    embedUrl: "https://www.youtube.com/embed/93hQquGY4fs",
    tags: "Data and Trends",
    speakers: "",
    date: "June 4, 2020",
  },
  {
    id: 2,
    title: (
      <>
        Growth and Innovation at the <br />
        Denver International Airport
      </>
    ),
    description: "",
    embedUrl: "",
    tag: "",
    date: "",
  },
  {
    id: 15,
    title: (
      <>
        Growth and Innovation at the <br />
        Denver International Airport
      </>
    ),
    description: "",
    embedUrl: "",
    tags: "",
    date: "",
  },
];

class Episode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                {episodeData[this.props.number - 1].id}
              </div>
              <div class="tc2020-article-title">
                {episodeData[this.props.number - 1].title}
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
                        src={episodeData[this.props.number - 1].embedUrl}
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
                    {episodeData[this.props.number -1].description}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industrytopics.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">
                      {episodeData[this.props.number -1].tags}
                      <i
                        className="fa fa-caret-right ml-2"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="tc22-speaker-titles" style={{display: episodeData[this.props.number -1].speakers ? "block" : "none"}}>
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industryspeakers.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">
                    {episodeData[this.props.number -1].speakers}
                    </div>
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-releasedate.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">{episodeData[this.props.number -1].date}</div>
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

export default Episode;

var mountNode = document.getElementById("app");
var value = document.getElementById("app").getAttribute("episode");

ReactDOM.render(<Episode number={value} />, mountNode);
