import React, {Component} from "react";

export class AboutUS extends Component {
    render() {
        return (
            <section className="ttm-row aboutus-section clearfix" id="aboutUsSection">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                                <div className="title-header">
                                    <h5>About us</h5>
                                    <h2 className="title">
                                        We are here to IT Solution with 20 years of{" "}
                                        <span>experience</span>
                                    </h2>
                                </div>
                                <div className="title-desc">
                                    <p>
                                        123Web designing in a powerful way of just not an only
                                        professions, however, in a passion for our Company. We
                                        have to a tendency to believe the idea that smart looking
                                        of any website is the first impression on visitors. And
                                        the smart design of any website is the starting point.
                                    </p>
                                    <p>
                                        We have a special team for website style who has been
                                        involved in designing professional websites of all
                                        categories.
                                    </p>
                                </div>
                            </div>
                            {/* section title end */}
                            {/* row */}
                            <div className="row no-gutters mt-4">
                                <div className="col-md-6 col-lg-6 col-sm-6">
                                    <ul className="ttm-list ttm-list-style-icon">
                                        <li>
                                            <i className="far fa-circle ttm-textcolor-skincolor" />
                                            <span className="ttm-list-li-content">
                          Web And Mobile Application{" "}
                        </span>
                                        </li>
                                        <li>
                                            <i className="far fa-circle ttm-textcolor-skincolor" />
                                            <span className="ttm-list-li-content">
                          New Domain Registration
                        </span>
                                        </li>
                                        <li>
                                            <i className="far fa-circle ttm-textcolor-skincolor" />
                                            <span className="ttm-list-li-content">
                          Data Text Synchronization
                        </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6">
                                    <ul className="ttm-list ttm-list-style-icon">
                                        <li>
                                            <i className="far fa-circle ttm-textcolor-skincolor" />
                                            <span className="ttm-list-li-content">
                          Improving Our Website Design
                        </span>
                                        </li>
                                        <li>
                                            <i className="far fa-circle ttm-textcolor-skincolor" />
                                            <span className="ttm-list-li-content">
                          Web &amp; Email Hosting Services{" "}
                        </span>
                                        </li>
                                        <li>
                                            <i className="far fa-circle ttm-textcolor-skincolor" />
                                            <span className="ttm-list-li-content">
                          Artificial Intelligence Web App
                        </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* row END*/}
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4" />
                            </div>
                            {/* separator */}
                            <div className="fs-16 ttm-textcolor-darkgrey">
                  <span>
                    Call to ask{" "}
                      <a className="fw-500 ttm-textcolor-darkgrey">
                      <u>any question</u>
                    </a>
                  </span>
                                <strong className="fs-18">: 123-456-7890</strong> or{" "}
                                <strong className="fs-18">456-789-1430</strong>
                            </div>
                        </div>
                        <div className="col-lg-6 res-991-mt-40 res-991-text-center">
                            <div className="position-relative res-991-mt-30">
                                {/* ttm_single_image-wrapper */}
                                <div className="ttm_single_image-wrapper">
                                    <img
                                        className="img-fluid"
                                        src="https://via.placeholder.com/649X614/444444.png"
                                        title="single-img-one"
                                        alt="single-img-one"
                                    />
                                </div>
                                {/* ttm_single_image-wrapper end */}
                                {/*featured-icon-box*/}
                                <div className="about-overlay-01">
                                    <p className="mb-0">
                                        American IT Solutions Association AIA.
                                    </p>
                                </div>
                                {/* featured-icon-box end*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUS;
