import React, { Component } from "react";
import { Header } from "../../layout/Header";
import { CarouselPage } from "../../HomeBanner";

export class HomeSection extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* home HomeBanner */}
                <CarouselPage />
                {/* home HomeBanner end*/}
            </div>
        )
    }
}

export default HomeSection;
