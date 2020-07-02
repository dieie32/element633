import React, { Component } from "react";
import { AboutUS } from "../Section/AboutUS";
import { Portfolio } from "../Section/Portfolio";
import { Services } from "../Section/Services";
import { ContactUS } from "../Section/ContactUS";
import { HomeSection } from "../Section/HomeSection";


export class Home extends Component {
  render() {
    return (
      <div className="site-main">
        {/* Home-section */}
        <HomeSection />
        {/* Home-section end */}

        {/* aboutus-section */}
        <AboutUS />
        {/* aboutus-section end */}

        {/* portfolio-section */}
        <Portfolio />
        {/* portfolio-section end */}

        {/* services-section */}
        <Services />
        {/* services-section end*/}

        {/* contactUS-section */}
        <ContactUS />
        {/* contactUS-section end */}
      </div>
    );
  }
}

export default Home;
