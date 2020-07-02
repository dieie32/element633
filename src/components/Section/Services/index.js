import Slider from "react-slick";
import React, {Component} from "react";

export class Services extends Component {
    render() {
        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
<section className="ttm-row history-section bg-img3 ttm-bgcolor-grey ttm-bg ttm-bgimage-yes clearfix" id="servicesSection">
    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
    <div className="container-xl">
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                {/* section title */}
                <div className="section-title with-desc text-center clearfix">
                    <div className="title-header">
                        <h5>Our Services</h5>
                        <h2 className="title">
                            We run all kinds of services in form of{" "}
                            <span>Information &amp; Technologies</span>
                        </h2>
                    </div>
                </div>
                {/* section title end */}
            </div>
        </div>
        <Slider
            className="row slick_slider ttm-boxes-spacing-30px"
            {...slick_slider}
        >
            <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                    {/* ttm-history-box-wrapper  */}
                    <div className="ttm-history-box-icon-wrapper">
                        {/* ttm-history-box-icon-wrapper  */}
                        {/*  featured-icon-box */}
                        <div className="featured-icon-box">
                            <div className="featured-icon">
                                {/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-business-and-finance" />
                                    {/*  ttm-icon */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-history-box-border" />
                    {/* ttm-history-box-border  */}
                    <div className="ttm-history-box-details ttm-bgcolor-white">
                        <div className="ttm-historybox-title">
                            <h5>IT Consultancy</h5>
                        </div>
                        {/* historybox-title  */}
                        <div className="ttm-historybox-description">
                            {/* description  */}
                            Expertise in IT consultancy for the IT companies, for
                            their different working areas Web-app related.
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                            Read More <i className="ti ti-angle-double-right" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                    {/* ttm-history-box-wrapper  */}
                    <div className="ttm-history-box-icon-wrapper">
                        {/* ttm-history-box-icon-wrapper  */}
                        {/*  featured-icon-box */}
                        <div className="featured-icon-box">
                            <div className="featured-icon">
                                {/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-computer" />
                                    {/*  ttm-icon */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-history-box-border" />
                    {/* ttm-history-box-border  */}
                    <div className="ttm-history-box-details ttm-bgcolor-white">
                        <div className="ttm-historybox-title">
                            <h5>IT Management</h5>
                        </div>
                        {/* historybox-title  */}
                        <div className="ttm-historybox-description">
                            {/* description  */}
                            We provide all kind of IT management services of in the
                            according to on their organization prioritie.
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                            Read More <i className="ti ti-angle-double-right" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                    {/* ttm-history-box-wrapper  */}
                    <div className="ttm-history-box-icon-wrapper">
                        {/* ttm-history-box-icon-wrapper  */}
                        {/*  featured-icon-box */}
                        <div className="featured-icon-box">
                            <div className="featured-icon">
                                {/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-data" />
                                    {/*  ttm-icon */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-history-box-border" />
                    {/* ttm-history-box-border  */}
                    <div className="ttm-history-box-details ttm-bgcolor-white">
                        <div className="ttm-historybox-title">
                            <h5>Product Design</h5>
                        </div>
                        {/* historybox-title  */}
                        <div className="ttm-historybox-description">
                            {/* description  */}
                            Our firm is expert to create an efficient for user
                            interface that makes design user interaction lively.
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                            Read More <i className="ti ti-angle-double-right" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                    {/* ttm-history-box-wrapper  */}
                    <div className="ttm-history-box-icon-wrapper">
                        {/* ttm-history-box-icon-wrapper  */}
                        {/*  featured-icon-box */}
                        <div className="featured-icon-box">
                            <div className="featured-icon">
                                {/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-global-1" />
                                    {/*  ttm-icon */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-history-box-border" />
                    {/* ttm-history-box-border  */}
                    <div className="ttm-history-box-details ttm-bgcolor-white">
                        <div className="ttm-historybox-title">
                            <h5>Cloud Services</h5>
                        </div>
                        {/* historybox-title  */}
                        <div className="ttm-historybox-description">
                            {/* description  */}
                            We develop, migrate and work on web applications to ensure
                            that they run on capably on clouds.
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                            Read More <i className="ti ti-angle-double-right" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">
                    {/* ttm-history-box-wrapper  */}
                    <div className="ttm-history-box-icon-wrapper">
                        {/* ttm-history-box-icon-wrapper  */}
                        {/*  featured-icon-box */}
                        <div className="featured-icon-box">
                            <div className="featured-icon">
                                {/*  featured-icon */}
                                <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-business-and-finance" />
                                    {/*  ttm-icon */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-history-box-border" />
                    {/* ttm-history-box-border  */}
                    <div className="ttm-history-box-details ttm-bgcolor-white">
                        <div className="ttm-historybox-title">
                            <h5>IT Consultancy</h5>
                        </div>
                        {/* historybox-title  */}
                        <div className="ttm-historybox-description">
                            {/* description  */}
                            Expertise in IT consultancy for the IT companies, for
                            their different working areas Web-app related.
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                            Read More <i className="ti ti-angle-double-right" />
                        </a>
                    </div>
                </div>
            </div>
        </Slider>

        <div className="row">
            <div className="col-md-12 text-center mt-5 res-991-mt-30">
                <p className="mb-0">
                    Don’t hesitate, contact us for better help and services.{" "}
                    <strong>
                        <u>
                            <a className="ttm-textcolor-darkgrey">
                                {" "}
                                View more Services
                            </a>
                        </u>
                    </strong>
                </p>
            </div>
        </div>
    </div>
</section>
        )
    }
}

export default Services;
