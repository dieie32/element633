import React, {Component} from "react";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
    "https://via.placeholder.com/600X750/444444.jpg",
    "https://via.placeholder.com/600X750/444444.jpg",
    "https://via.placeholder.com/600X750/444444.jpg",
    "https://via.placeholder.com/600X750/444444.jpg",
    "https://via.placeholder.com/600X750/444444.jpg",
];

export class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;
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
            <div>
<section className="ttm-row bottomzero-padding-section  ttm-bg ttm-bgimage-yes bg-img5 ttm-bgcolor-skincolor clearfix" id="projectsSection">
    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
    <div className="container-xl pb-5 res-991-pb-0">
        <div className="row align-items-center ttm-textcolor-white">
            <div className="col-lg-5 res-991-text-center">
                <div className="section-title style3 mb-0 clearfix">
                    <div className="title-header mb-0">
                        <h5>We Make Connections</h5>
                        <h2 className="title">
                            Explore recent{" "}
                            <span className="ttm-textcolor-white">Products</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 res-991-text-center">
                <div className="title-desc">
                    A products is a temporary endeavor with a defined beginning and
                    end, scope, and assigned resources.
                </div>
            </div>
            <div className="col-lg-2 text-right res-991-text-center res-991-mt-20">
                <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">
                    {" "}
                    Read More{" "}
                </a>
            </div>
        </div>
    </div>
</section>
<section className="ttm-row mt-10 zero-padding-section clearfix">
    <div className="container-fluid p-0">
        {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                    images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                    this.setState({
                        photoIndex:
                            (photoIndex + images.length - 1) % images.length,
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })
                }
            />
        )}
        <Slider
            className="row slick_slider ttm-boxes-spacing-10px"
            {...slick_slider}
            slidesToShow={5}
        >
            <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                        <img
                            className="img-fluid"
                            alt=""
                            src="https://via.placeholder.com/600X750/444444.jpg"
                        />
                    </div>
                    {/* featured-thumbnail end*/}
                    {/* ttm-box-view-overlay */}
                    <div className="ttm-box-view-overlay">
                        <div className="featured-iconbox ttm-media-link">
                            {/* ttm-media-link */}
                            <a
                                onClick={() => this.setState({ isOpen: true })}
                                className="ttm_image"
                            >
                                <i className="ti ti-search" />
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + "/Single_style1"}
                                className="ttm_link"
                            >
                                <i className="ti ti-link" />
                            </a>
                        </div>
                    </div>
                    {/* ttm-box-view-overlay end*/}
                    <div className="featured-content">
                        <div className="featured-title">
                            {/* featured-title */}
                            <h5>
                                <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                                    Business Seminarsetwst
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                        <img
                            className="img-fluid"
                            alt=""
                            src="https://via.placeholder.com/600X750/444444.jpg"
                        />
                    </div>
                    {/* featured-thumbnail end*/}
                    {/* ttm-box-view-overlay */}
                    <div className="ttm-box-view-overlay">
                        <div className="featured-iconbox ttm-media-link">
                            {/* ttm-media-link */}
                            <a onClick={() => this.setState({ isOpen: true })}>
                                <i className="ti ti-search" />
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + "/Single_style1"}
                                className="ttm_link"
                            >
                                <i className="ti ti-link" />
                            </a>
                        </div>
                    </div>
                    {/* ttm-box-view-overlay end*/}
                    <div className="featured-content">
                        <div className="featured-title">
                            {/* featured-title */}
                            <h5>
                                <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                                    IT Management
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
                {/* featured-thumbnail */}
            </div>
            <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                        <img
                            className="img-fluid"
                            alt=""
                            src="https://via.placeholder.com/600X750/444444.jpg"
                        />
                    </div>
                    {/* featured-thumbnail end*/}
                    {/* ttm-box-view-overlay */}
                    <div className="ttm-box-view-overlay">
                        <div className="featured-iconbox ttm-media-link">
                            {/* ttm-media-link */}
                            <a onClick={() => this.setState({ isOpen: true })}>
                                <i className="ti ti-search" />
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + "/Single_style1"}
                                className="ttm_link"
                            >
                                <i className="ti ti-link" />
                            </a>
                        </div>
                    </div>
                    {/* ttm-box-view-overlay end*/}
                    <div className="featured-content">
                        <div className="featured-title">
                            {/* featured-title */}
                            <h5>
                                <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                                    Cyber Security Analysis
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
                {/* featured-thumbnail */}
            </div>
            <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                        <img
                            className="img-fluid"
                            alt=""
                            src="https://via.placeholder.com/600X750/444444.jpg"
                        />
                    </div>
                    {/* featured-thumbnail end*/}
                    {/* ttm-box-view-overlay */}
                    <div className="ttm-box-view-overlay">
                        <div className="featured-iconbox ttm-media-link">
                            {/* ttm-media-link */}
                            <a onClick={() => this.setState({ isOpen: true })}>
                                <i className="ti ti-search" />
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + "/Single_style1"}
                                className="ttm_link"
                            >
                                <i className="ti ti-link" />
                            </a>
                        </div>
                    </div>
                    {/* ttm-box-view-overlay end*/}
                    <div className="featured-content">
                        <div className="featured-title">
                            {/* featured-title */}
                            <h5>
                                <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                                    Neural Networking
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
                {/* featured-thumbnail */}
            </div>
            <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                        <img
                            className="img-fluid"
                            alt=""
                            src="https://via.placeholder.com/600X750/444444.jpg"
                        />
                    </div>
                    {/* featured-thumbnail end*/}
                    {/* ttm-box-view-overlay */}
                    <div className="ttm-box-view-overlay">
                        <div className="featured-iconbox ttm-media-link">
                            {/* ttm-media-link */}
                            <a onClick={() => this.setState({ isOpen: true })}>
                                <i className="ti ti-search" />
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + "/Single_style1"}
                                className="ttm_link"
                            >
                                <i className="ti ti-link" />
                            </a>
                        </div>
                    </div>
                    {/* ttm-box-view-overlay end*/}
                    <div className="featured-content">
                        <div className="featured-title">
                            {/* featured-title */}
                            <h5>
                                <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                                    Data Management
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
                {/* featured-thumbnail */}
            </div>
            <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                        <img
                            className="img-fluid"
                            alt=""
                            src="https://via.placeholder.com/600X750/444444.jpg"
                        />
                    </div>
                    {/* featured-thumbnail end*/}
                    {/* ttm-box-view-overlay */}
                    <div className="ttm-box-view-overlay">
                        <div className="featured-iconbox ttm-media-link">
                            {/* ttm-media-link */}
                            <a onClick={() => this.setState({ isOpen: true })}>
                                <i className="ti ti-search" />
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + "/Single_style1"}
                                className="ttm_link"
                            >
                                <i className="ti ti-link" />
                            </a>
                        </div>
                    </div>
                    {/* ttm-box-view-overlay end*/}
                    <div className="featured-content">
                        <div className="featured-title">
                            {/* featured-title */}
                            <h5>
                                <a href={process.env.PUBLIC_URL + "/Single_style1"}>
                                    Web Devlopment
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
                {/* featured-thumbnail */}
            </div>
        </Slider>
    </div>
</section>
            </div>
    )
    }
}

export default Portfolio;
