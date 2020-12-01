import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Particles from "react-tsparticles";
import sal from "sal.js";
import Layout from "../layout";
import config from "../../data/SiteConfig";

import overview from "../images/overview-diagram.png";
import futurewei from "../images/futurewei-logo.png";
import gridgain from "../images/gridgain-logo.svg";
import tuwien from "../images/tu-wien-logo.png";
import soda from "../images/soda-logo.png";
import c2c from "../images/c2c-logo.jpg";
import reinvent from "../images/reinvent-logo.png";

import "sal.js/dist/sal.css";

const particleOptions = {
  fpsLimit: 30,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
      },
      value: 80,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

const Index = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="home">
      <Layout>
        <Helmet title={`${config.siteTitle}`}>
          <script async defer src="https://buttons.github.io/buttons.js" />
        </Helmet>

        <section className="hero">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-text__heading">
                An infrastructure platform for distributed cloud
              </h1>
              <p className="hero-text__detail">
                Centaurus is an open-source platform for building a unified and
                scalable distributed cloud infrastructure
              </p>
            </div>
          </div>
          <Particles
            id="tsparticles"
            className="particles"
            options={particleOptions}
          />
        </section>
        <section className="highlight background--grey">
          <div className="highlight-container">
            <p className="highlight-title">High Scalability</p>
            <p className="highlight-detail">
              Centaurus offers high scalability for large cloud infrastructure
            </p>
          </div>
          <div className="highlight-container">
            <p className="highlight-title">Unified Management</p>
            <p className="highlight-detail">
              Provides the same API and platform to orchestrate various cloud
              resources
            </p>
          </div>
          <div className="highlight-container">
            <p className="highlight-title">Edge Computing</p>
            <p className="highlight-detail">
              Seamlessly extend from cloud to edge, and natively manage edge
              workloads from cloud
            </p>
          </div>
        </section>
        <section className="branding">
          <div className="branding-container container pure-g">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3sX_ZCadIas"
              frameBorder="0"
              title="Centaurus Overview"
              className="pure-u-1 pure-u-md-12-24"
            />
            <div
              className="branding-text-container pure-u-1 pure-u-md-12-24"
              data-sal="slide-up"
            >
              <h1 className="branding-text">
                Shaping the future of cloud native infrastructure in the age of
                AI, 5G and Edge
              </h1>
            </div>
          </div>
        </section>
        <section id="projects" className="feature background--grey">
          <div className="container">
            <div className="section-header">
              <h1 className="title" data-sal="slide-up">
                Build your next infrastructure with Centaurus
              </h1>
              <p className="subtitle" data-sal="slide-up">
                Next generation cloud platform with better resource utilization
                and reduced management overheads
              </p>
            </div>

            <div className="overview-container container pure-g">
              <div className="overview-image-wrapper pure-u-1 pure-u-md-1-2">
                <img
                  className="overview-image"
                  src={overview}
                  alt="Centaurus Overview"
                />
              </div>

              <div className="overview-text-wrapper pure-u-1 pure-u-md-1-2">
                <p className="overview-text">
                  Centaurus open source project is a cloud infrastructure
                  platform that can be used to build your public or private
                  cloud. It unifies the orchestration, network provisioning and
                  management of cloud compute and network resources at regional
                  scale. It offers the same API experience to provision and
                  manage virtual machines, containers, serverless and other
                  types of cloud resources. Centaurus combines traditional IaaS
                  and PaaS layer into one infrastructure platform that can
                  simplify your cloud management and reduce your management
                  cost.
                </p>
              </div>
            </div>

            <div className="pure-g feature-container">
              <div className="pure-u-1 pure-u-md-10-24 projects">
                <div className="projects-container">
                  <div className="projects-header">
                    <h2 className="title">Centaurus Components</h2>
                  </div>

                  <div className="project">
                    <div className="project-header">
                      <h2 className="heading">Arktos</h2>
                      <span className="link-wrapper">
                        <a
                          className="github-button"
                          href="https://github.com/centaurus-cloud/arktos"
                          data-size="large"
                          aria-label="Star futurewei-cloud/arktos on GitHub"
                        >
                          Star
                        </a>
                      </span>
                    </div>

                    <p className="project__detail">
                      Arktos is a compute cluster management system designed for
                      large scale clouds. It is evolved from Kubernetes to
                      address key challenges of large scale clouds.
                    </p>
                  </div>

                  <div className="project">
                    <div className="project-header">
                      <h2 className="heading">Mizar</h2>
                      <span className="link-wrapper">
                        <a
                          className="github-button"
                          href="https://github.com/centaurus-cloud/mizar"
                          data-size="large"
                          aria-label="Star futurewei-cloud/mizar on GitHub"
                        >
                          Star
                        </a>
                      </span>
                    </div>

                    <p className="project__detail">
                      Mizar is the high-performance cloud-network powered by
                      eXpress Data Path (XDP) and Geneve protocol for high scale
                      cloud.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pure-u-1 pure-u-md-14-24 feature-slide">
                <h1 className="feature-title" data-sal="slide-up">
                  Centaurus Features
                </h1>
                <p className="feature-subtitle" data-sal="slide-up">
                  Powered by Arktos and Mizar, Centaurus provides next
                  generation cloud solutions and enhanced cloud networking.
                </p>
                <div className="slide">
                  <ul className="slide-list">
                    <li className="slide-item" data-sal="slide-up">
                      <h3 className="title">Unified Orchestration</h3>
                      <p className="detail">
                        Natively manages VM, containers, and other types of
                        workloads on demand in a unified manner.
                      </p>
                    </li>

                    <li className="slide-item" data-sal="slide-up">
                      <h3 className="title">Multi-tenant Cloud Platform</h3>
                      <p className="detail">
                        Provides built-in hard multi-tenancy support for strong
                        tenancy isolation and transparent virtual cluster.
                      </p>
                    </li>

                    <li className="slide-item" data-sal="slide-up">
                      <h3 className="title">
                        Large Scale and High Performance
                      </h3>
                      <p className="detail">
                        Addresses key scalability and performance challenges
                        facing super large cloud infrastructure.
                      </p>
                    </li>

                    <li className="slide-item" data-sal="slide-up">
                      <h3 className="title">
                        Hyper-Scale Unified Cloud Network
                      </h3>
                      <p className="detail">
                        Fast provisioning and management of virtual network
                        resources for VMs, containers and other types of
                        workloads. Leverages natural partitioning of cloud
                        networks such as VPC and subnet for large-scale endpoint
                        provisioning and routing capabilities.
                      </p>
                    </li>

                    <li className="slide-item" data-sal="slide-up">
                      <h3 className="title">High Performance Data Plane</h3>
                      <p className="detail">
                        Leverages eXpress Data Path(XDP) and Geneve protocol to
                        forward and route traffic between workloads in a highly
                        performant manner.
                      </p>
                    </li>

                    <li className="slide-item" data-sal="slide-up">
                      <h3 className="title">
                        {" "}
                        Cloud Native Networking Management Plane
                      </h3>
                      <p className="detail">
                        Mizar&#39;s management plane is built around
                        cloud-native architecture approach using Kubernetes
                        Architecture Framework. It provides support for key
                        characteristics such as scalability, elasticity etc.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partners">
          <div className="section-header">
            <h2 className="section__heading">Partners and Supporters</h2>
          </div>
          <div className="pure-g container">
            <div className="partners-container pure-u-1 pure-u-md-1-3">
              <img
                className="partners__image "
                src={gridgain}
                alt="Gridgain logo"
              />
            </div>
            <div className="partners-container pure-u-1 pure-u-md-1-3">
              <img
                className="partners__image"
                src={c2c}
                alt="Click2Cloud logo"
              />
            </div>
            <div className="partners-container pure-u-1 pure-u-md-1-3">
              <img
                className="partners__image"
                src={reinvent}
                alt="Reinvent logo"
              />
            </div>
            <div className="partners-container pure-u-1 pure-u-md-2-3">
              <img
                style={{ width: "70%" }}
                className="partners__image"
                src={tuwien}
                alt="Tuwien logo"
              />
            </div>
            <div className="partners-container pure-u-1 pure-u-md-1-3">
              <img
                className="partners__image"
                src={soda}
                alt="Soda Foundation logo"
              />
            </div>
            <div className="partners-container pure-u-1 pure-u-md-1-3">
              <img
                className="partners__image "
                src={futurewei}
                alt="Futurewei logo"
              />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Index;
