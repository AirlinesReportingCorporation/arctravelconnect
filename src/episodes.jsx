import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav";
import { episodes } from "./content";

class Episodes extends Component {
  constructor() {
    super();
    this.state = {
      filter: "",
    };
  }

  componentDidMount() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.filter) {
      this.setState({
        filter: params.filter,
      });
    }
  }

  setFilter = (e) => {
    var value = e.target.value;
    var url = window.location.pathname + "?filter=" + value;
    window.location.href = url;
  };

  episodeFilter = (episode) => {
    /*
      if filter equals the episodes tag - > show it
      otherwise hide everything else
    */
    var tags = episode.tags.toLowerCase();

    if (this.state.filter === "") {
      return true;
    } else if (
      this.state.filter == "data-and-trends" &&
      tags.indexOf("data") > -1
    ) {
      return true;
    } else if (
      this.state.filter == "retailing" &&
      tags.indexOf("retailing") > -1
    ) {
      return true;
    } else if (
      this.state.filter == "innovation" &&
      tags.indexOf("innovation") > -1
    ) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <div className="tc-22-white" style={{ width: "100%" }}>
        <div className="tc2021-main tc2021-main-v tc-22-white">
          <Nav />
          <div className="tc2020-episode-container">
            <div className="tc2020-episode-title">
              <img
                src="https://arctravelconnect.com/globalassets/Home2/2022/tc22-episodes.png"
                alt="Episodes"
              />
            </div>
            <div className="episode-sort">
              SORT:
              <select className="episode-filter" onChange={this.setFilter}>
                <option value="">All</option>
                <option
                  selected={
                    this.state.filter == "data-and-trends" ? true : false
                  }
                  value="data-and-trends"
                >
                  Data and Trends
                </option>
                <option
                  selected={this.state.filter == "retailing" ? true : false}
                  value="retailing"
                >
                  Retailing
                </option>
                <option
                  selected={this.state.filter == "innovation" ? true : false}
                  value="innovation"
                >
                  Innovation
                </option>
              </select>
            </div>

            <div className="tc2020-episode-list">
              <div className="row">
                {episodes.reverse().map((episode, i) => {
                  return (
                    <div
                      key={i}
                      className={"col-lg-4 "}
                      style={{
                        display: this.episodeFilter(episode) ? "block" : "none",
                      }}
                      id={"episode-" + episode.episode}
                    >
                      <div className="tc2020-episode">
                        <div className="episode-num">{episode.episode}</div>
                        <div className="episode-inner">
                          <div className="episode-date">{episode.date}</div>
                          <div className="episode-name">{episode.name}</div>
                          <div className="dot"></div>
                          <div className="episode-tags">{episode.tags}</div>
                          <div className="episode-button">
                            <a className="ctaBtn" href={episode.link}>
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
