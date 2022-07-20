import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav";

var episodes = [
  {
    episode: "15",
    name: "Growth and Innovation at the Denver Airport",
    description: "asdf",
    link: "/episodes/growth-and-innovation-at-the-denver-airport/",
    time: "Available Now",
    date: "June 23, 2022",
    cta: "View Details",
    tags: "Data and Trends"
  },
  {
    episode: "14",
    name: "Using Consumer Spending to Track Travel Trends",
    description: "asdf",
    link: "/episodes/using-consumer-spending-to-track-travel-trends/",
    time: "Available Now",
    date: "February 24, 2022",
    cta: "View Details",
    tags: "Data and Trends"
  },
  {
    episode: "13",
    name: "The Realities of Omnichannel Retailing",
    description: "asdf",
    link: "/episodes/the-realities-of-omnichannel-retailing/",
    time: "Available Now",
    date: "October 20, 2021",
    cta: "View Details",
    tags: "Retailing"
  },
  {
    episode: "12",
    name: "Hopper on the Value of Fintech in Travel",
    description: "asdf",
    link: "/episodes/hopper-on-value-of-fintech-in-travel/",
    time: "Available Now",
    date: "July 22, 2021",
    cta: "View Details",
    tags: "Data and Trends"
  },
  {
    episode: "11",
    name: "Distribution, Recovery and Collaboration with American Airlines",
    description: "asdf",
    link: "/episodes/distribution-recovery-collaboration-american-airlines/",
    time: "Available Now",
    date: "June 29, 2021",
    cta: "View Details",
    tags: "Retailing, Innovation"
  },
  {
    episode: "10",
    name: "Southwest Business Talks Distribution, Industry Recovery",
    description: "asdf",
    link: "/episodes/southwest-business-talks-distribution-industry-recovery/",
    time: "Available Now",
    date: "May 13, 2021",
    cta: "View Details",
    tags: "Retailing"
  },
  {
    episode: "9",
    name: "Assessing the Travel Industry with A4A",
    description: "asdf",
    link: "/episodes/Assessing-the-Travel-Industry-with-A4A/",
    time: "Available Now",
    date: "Apr 28, 2021",
    cta: "View Details",
    tags: "Retailing, Innovation"
  },
  {
    episode: "8",
    name: "Exploring the Future of Travel with G Adventures",
    description: "asdf",
    link: "/episodes/exploring-the-future-of-travel-with-g-adventures/",
    time: "Available Now",
    date: "Feb 18, 2021",
    cta: "View Details",
    tags: "Data and Trends, Innovation"
  },
  {
    episode: "7",
    name: "A Fireside Chat with Mike Premo and Dave Hilfman",
    description: "asdf",
    link: "/episodes/A-Fireside-Chat-with-Mike-Premo-and-Dave-Hilfman/",
    time: "3:00 p.m. EST",
    date: "Dec 15, 2020",
    cta: "View Details",
    tags: "Innovation"
  },
  {
    episode: "6",
    name: "Enhancing the Traveler Experience in Every Channel",
    description: "asdf",
    link: "/episodes/Enhancing-the-Traveler-Experience-in-Every-Channel/",
    time: "Available Now",
    date: "Nov 18, 2020",
    cta: "View Details",
    tags: "Retailing, Innovation"
  },
  {
    episode: "5",
    name: "Travel Recovery Trends to Watch in Fall 2020",
    description: "asdf",
    link: "/episodes/Travel-Recovery-Trends-to-Watch-in-Fall-2020/",
    time: "Available Now",
    date: "October 14, 2020",
    cta: "View Details",
    tags: "Data and Trends"
  },
  {
    episode: "4",
    name: "What’s Really on the Dark Web?",
    description: "asdf",
    link: "/episodes/Whats-Really-on-the-Dark-Web/",
    time: "Available Now",
    date: "September 17, 2020",
    cta: "View Details",
    tags: "Data and Trends"
  },
  {
    episode: "3",
    name: "What’s Next for Business Travel?",
    description: "asdf",
    link: "/episodes/Whats-Next-for-Business-Travel/",
    time: "Available Now",
    date: "August 19, 2020",
    cta: "View Details",
    tags: "Retailing, Innovation"
  },
  {
    episode: "2",
    name: "How Travel Systems are Adapting to COVID-19",
    description: "asdf",
    link: "/episodes/How-Travel-System-are-Adapting-to-COVID-19/",
    time: "Available Now",
    date: "July 27, 2020",
    cta: "View Details",
    tags: "Innovation"
  },
  {
    episode: "1",
    name: "2020 Outlook: Travel Recovery Trends to Watch",
    description: "asdf",
    link: "/episodes/2020-outlook-travel-recovery-trends-to-watch/",
    time: "Available Now",
    date: "June 4, 2020",
    cta: "View Details",
    tags: "Data and Trends"

  },
];

class Episodes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tc-22-white" style={{ width: "100%" }}>
        <div className="tc2021-main tc2021-main-v tc-22-white">
          <Nav />
          <div className="tc2020-episode-container">
            <div className="tc2020-episode-title">
              <img
                src="https://arctravelconnect.com/globalassets/Home2/2020/virtual/episodes.svg"
                alt="Episodes"
              />
            </div>

            <div className="tc2020-episode-list">
              <div className="row">
                {episodes.map((episode, i) => {
                  console.log(episode)
                  return (
                    <div
                      key={i}
                      className=" col-lg-4"
                      id={"episode-" + episode.episode}
                    >
                      <div className="tc2020-episode">
                        <div className="episode-num">{episode.episode}</div>
                        <div className="episode-inner">
                          <div className="episode-date">{episode.date}</div>
                          <div className="episode-name">{episode.name}</div>
                          <div className="episode-tags">
                            {episode.tags}
                          </div>
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
