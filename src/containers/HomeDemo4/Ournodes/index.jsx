import {
  HomeDemo4LiteNode,
  HomeDemo4SmartNode,
  HomeDemo4PowerNode,
  HomeDemo4LiteNode1,
  HomeDemo4SmartNode1,
  HomeDemo4PowerNode1,
} from "../../../utils/allImgs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { react, useState } from "react";
import SectionHeading from "../../../components/SectionHeading";

const Ournodes = () => {
  const [open, setopen] = useState(false);
  const [opens, setopens] = useState(false);

  return (
    <>
      <section className="node section-padding-0-100">
        <div className="container">
          <SectionHeading
            title="Wizz NFT Node"
            // text="Wizz NFT Node"
          />
          <div className="row align-items-center pt-3 pb-5" id="smartNode">
            <div className="service-img-wrapper col-lg-5 col-md-12 col-sm-12 no-padding-right">
              <div className="node-list">
                <div className="who-we-contant">
                  <h4
                    className="w-text"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Smart Node
                  </h4>
                  <ul
                    className="w-text px-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <li>Total Supply: 25.000 (Twenty-five thousand).</li>
                    <li>Price: $500 (Five hundred US dollars).</li>
                    <li>Maximum buy: 100 (One hundred) each account.</li>
                    <li>
                      Specification: No specification or no setup to run as all
                      nodes run as NFT.
                    </li>
                    <li>Contract Period: 5 (Five) Years.</li>
                  </ul>
                  <div className="accordion py-3" id="accordionExample">
                    <div className="accordion-item">
                      <a className="accordion-header" id="headingOne">
                        <h5
                          className="accordion-button d-flex justify-content-center px-3 py-2 bg-white text-dark node-btn text-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          onClick={() => setopen(!open)}
                        >
                          Smart Node Features

                          {open ? (
                            <FiChevronUp className="arrows upperArrow" />
                          ) : (
                            <FiChevronDown className="arrows downArrow" />
                          )}
                        </h5>
                      </a>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse bg-secondary text-light"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body px-4 py-2">
                          <ol className="px-2">
                            <li>
                              WNode (Smart Node) A unique NFT node designed to
                              simplify management.
                            </li>
                            <li>
                              No waiting for the license, immediate active to
                              generate rewards.
                            </li>
                            <li>
                              A method that does not require claiming rewards.
                            </li>
                            <li>
                              Daily rewards are sent directly to your wallet
                              automatically.
                            </li>
                            <li>
                              Appear on the "All Nodes" page as a single row,
                              just like other node types.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 d-flex justify-content-center">
              <div className="image-box image-box1 hover-switch">
                <img src={HomeDemo4LiteNode} alt="" className="w-0 greyscale" />
                <img src={HomeDemo4LiteNode1} className=" w-0" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-3 pb-5" id="powerNode">
            <div className="service-img-wrapper col-lg-5 col-md-12 col-sm-12 no-padding-right order-lg-2">
              <div className="node-list">
                <div className="who-we-contant">
                  <h4
                    className="w-text"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Power Node
                  </h4>
                  <ul
                    className="w-text px-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <li>Total Supply: 5.000 (Five thousand).</li>
                    <li>Price: Airdrop Only.</li>
                    <li>Maximum Node: 10 (10) each account.</li>
                    <li>
                      Specification: No specification or no setup to run as all
                      nodes run as NFT.
                    </li>
                    <li>Contract Period: 7 (Seven) Years.</li>
                  </ul>
                  <div className="accordion py-3" id="accordionExample">
                    <div className="accordion-item">
                      <a className="accordion-header" id="headingTwo">
                        <h5
                          className="accordion-button d-flex justify-content-center px-3 py-2 bg-white text-dark collapsed node-btn text-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          onClick={() => setopens(!opens)}
                        >
                          Smart Node Features
                          {opens ? (
                            <FiChevronUp className="smartarrows upperArrow" />
                          ) : (
                            <FiChevronDown className="smartarrows downArrow" />
                          )}
                        </h5>
                      </a>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse bg-secondary text-light"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body px-4 py-2">
                          <ol className="px-2">
                            <li>
                              Power node is very special in WIZZ Eco system.
                            </li>
                            <li>
                              Power Node only can be owned as various Airdrop.
                            </li>
                            <li>
                              WNode (Power Node) A new type of node designed to
                              simplify management.
                            </li>
                            <li>
                              No waiting for license, immediate active to
                              generate rewards.
                            </li>
                            <li>
                              A method that does not require claiming rewards.
                            </li>
                            <li>
                              Daily rewards sent directly to your wallet
                              automatically.
                            </li>
                            <li>
                              Appear on the "All Nodes" page as a single row,
                              just like other node types.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 d-flex justify-content-center order-lg-1">
              <div className="image-box image-box2 hover-switch">
                <img src={HomeDemo4SmartNode} className="w-0" alt="" />
                <img src={HomeDemo4SmartNode1} className="greyscale" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-3 pb-5" id="masterNode">
            <div className="service-img-wrapper col-lg-5 col-md-12 col-sm-12 no-padding-right">
              <div className="node-list">
                <div className="who-we-contant">
                  <h4
                    className="w-text"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Master Node
                  </h4>
                  <ul
                    className="w-text px-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <li>The most Powerful NFT Node in the WIZZ Eco system.</li>
                    <li>More information will come with Phase 3.</li>
                  </ul>
                  {/* <div className="accordion py-3" id="accordionExample">
                                        <div className="accordion-item">
                                            <a className="accordion-header" id="headingThree">
                                                <h5 className="accordion-button px-3 py-2 bg-white text-dark collapsed node-btn text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Few Small Boxes
                                                </h5>
                                            </a>
                                            <div id="collapseThree" className="accordion-collapse collapse bg-secondary text-light" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body px-4 py-2">
                                                    <ol className="px-2">
                                                        <li>Stable passive income :
                                                            <p className="text-light">Daily REWARD from WNodes depending on the nodes you hold.</p>
                                                        </li>
                                                        <li>Nodes for everyone : 
                                                            <p className="text-light">We offer 3 (Three) different nodes so you invest as much as you want and earn rewards for up to 10 (Ten) years.</p>
                                                        </li>
                                                        <li>Simple to use :
                                                            <p className="text-light">WIZZ NFT Nodes are simple to use, Buy and earn as all nodes are run as an NFT.</p>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 d-flex justify-content-center">
              <div className="image-box image-box-3 hover-switch">
                <img src={HomeDemo4PowerNode} className="w-0" alt="" />
                <img src={HomeDemo4PowerNode1} className="greyscale" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ournodes;
