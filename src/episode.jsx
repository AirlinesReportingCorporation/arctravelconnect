import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav";

import { episodes } from "./content";

function tagLink(tag) {
  var link = "https://arctravelconnect.com/";

  tag.tag.toLowerCase();

  if (tag.indexOf("data") > -1) {
    return "/episodes.html?filter=data-and-trends";
  } else if (tag.indexOf("retailing") > -1) {
    return "/episodes.html?filter=retailing";
  } else if (tag == "innovation" && tags.indexOf("innovation") > -1) {
    return "/episodes.html?innovation";
  }

  return link;
}

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
                {episodes[this.props.number - 1].episode}
              </div>
              <div class="tc2020-article-title">
                {episodes[this.props.number - 1].title}
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
                        src={
                          "https://www.youtube.com/embed/" +
                          episodes[this.props.number - 1].embedUrl
                        }
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
                    <p>{episodes[this.props.number - 1].description}</p>
                  </div>
                  <div className="col-lg-4">
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industrytopics.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">
                      {episodes[this.props.number - 1].tags
                        .split(",")
                        .map((tag, i) => {
                          return (
                            <>
                              <a href="">
                                {tag}
                                <i
                                  className="fa fa-caret-right ml-2"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <br />
                              <br/>
                            </>
                          );
                        })}
                    </div>
                    <div
                      className="tc22-speaker-titles"
                      style={{
                        display: episodes[this.props.number - 1].speakers
                          ? "block"
                          : "none",
                      }}
                    >
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-industryspeakers.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="tc22-episode-detail"
                      style={{
                        display: episodes[this.props.number - 1].speakers
                          ? "block"
                          : "none",
                      }}
                    >
                      {episodes[this.props.number - 1].speakers}
                    </div>
                    <div className="tc22-speaker-titles">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-releasedate.png"
                        alt=""
                      />
                    </div>
                    <div className="tc22-episode-detail">
                      {episodes[this.props.number - 1].date}
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

export default Episode;

var mountNode = document.getElementById("app");
var value = document.getElementById("app").getAttribute("episode");

ReactDOM.render(<Episode number={value} />, mountNode);
