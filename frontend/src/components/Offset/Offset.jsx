import Earth from "./Earth";
import "./Offset.css";
import OffsetCard from "./OffsetCard";
import GarbageCollection from "./GarbageCollection.jpeg";
import BeachCleaning from "./BeachCleaning.jpeg";
import TreePlantation from "./TreePlantation.jpeg";
import SolarProject from "./SolarProject.jpeg";

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
          <div className="YTVideo">
            <iframe
              width="480"
              height="250"
              src="https://www.youtube.com/embed/guNZIqxKmVM"
              title="Carbon Offsetting - Funding Solutions to Climate Change"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="EasyWays">
          <h1>EASY WAYS YOU CAN START MAKING A DIFFERENCE</h1>
          <h3>
            {" 1) "}
            Stop buying your water in plastic
          </h3>
          <p>
            Get a reusable water bottle and keep it filled and with you at all
            times. You’ll save money and the environment!
          </p>
          <h3>
            {" 2) "}
            Incorporate walking or biking to some of your regular short-trip
            destinations
          </h3>
          <p>
            {" 3) "}
            In most instances, you can walk a mile in less than 20 minutes. This
            is a great way to add exercise to your busy schedule.
          </p>
          <h3>
            {" 4) "}
            Turn off lights and unplug devices when you’re not using them.
          </h3>
          <p>Every little action adds up!</p>
          <h3>
            {" 5) "}
            Keep the tires on your car properly inflated and get regular
            tune-ups.{" "}
          </h3>
          <p>
            When your car’s tires are low on pressure, it has to work harder to
            move from point A to point B, wasting gas and increasing emissions
            in the process.
          </p>
          <h3>
            {" 6) "}
            Set your thermostat to 78 in summer and 67 in winter.
          </h3>
          <p>
            And turn-off the heat and AC when you’re not home. You’ll be
            surprised at the difference it makes in your energy bill.
          </p>
          <h3>
            {" 7) "}
            Use alternative transportation (bus, train, carpool, or bike) to get
            to work one day per week.
          </h3>
          <p>
            Enjoy the chance to catch up on your reading instead of testing your
            patience in traffic!
          </p>
        </div>
        <div className="WaysToOffset">
          <h1>Other Ways to Offset Carbon Emmision</h1>
          <div className="CardContent">
            <OffsetCard
              title="Tree Plantation"
              price="$20"
              img={TreePlantation}
            />
            <OffsetCard
              title="Street Cleaning"
              price="$30"
              img={GarbageCollection}
            />
            <OffsetCard
              title="Beach Cleaning"
              price="$25"
              img={BeachCleaning}
            />
            <OffsetCard title="Solar Project" price="$50" img={SolarProject} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offset;
