import Earth from "./Earth";
import "./Offset.css";

const Offset = () => {
  return (
    <div className="Offset">
      <div className="Earth">
        <Earth />
      </div>
      <div className="OffsetContent">
        <div className="OffsetHeading">
          <h1>CARBON OFFSETTING</h1>
          <h6>
            Tackle Climate Change And Care For Developing Communities And
            Biodiversity By Becoming Carbon Neutral
          </h6>
        </div>
        <div className="WhatisOffsetting">
          <h1>What is Carbon Offsetting ?</h1>
          <p>
            Carbon offsetting is the process of funding projects that reduce or
            remove greenhouse gas emissions to compensate for one’s own
            emissions, in order to achieve a net zero carbon footprint.
          </p>
        </div>
        <div className="WhyOffsetting">
          <h2>Why Carbon Offset ?</h2>
          <p>
            Carbon offsetting funds solutions to reducing carbon emissions now.
            Frequently carbon offsetting reduces emissions much faster than you
            can as an individual/single company. Carbon offsetting projects help
            to combat global climate change as well as caring for local
            communities. In many instances providing much needed employment,
            health improvement, biodiversity, reforestation and broad social
            benefits to impoverished communities.
          </p>
        </div>
        <div className="OffsettingQuestions">
          <h3> Answers to Frequently Asked Questions on Carbon Offsetting</h3>
          <iframe
            width="500"
            height="280"
            src="https://www.youtube.com/embed/guNZIqxKmVM"
            title="Carbon Offsetting - Funding Solutions to Climate Change"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Offset;
