import React, { useEffect } from "react"
import { greetings } from "../Portfolio"
import code from '../assets/lottie/coding.json'


import { Fade } from 'react-awesome-reveal'

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap"

import GreetingLottie from "../components/DisplayLottie"
import SocialLinks from "../components/SocialLinks"


const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0
  })
  return (
    <Fade direction="down" duration={1000} triggerOnce={true}>
      <main ref="main">
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 bg-gradient-info">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      {greetings.title + " "}
                    </h1>
                    <p className="lead text-white">{greetings.description}</p>
                    <SocialLinks />
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-light text-info btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">
                          See My Resume
                        </span>
                      </Button>
                    </div>
                  </Col>
                  <Col lg="6">
                    <GreetingLottie animationData={code} />
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
      </main>
    </Fade>
  )
}

export default Greetings
