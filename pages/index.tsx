import React from "react";
import Head from "next/head";
import { Container, Col, Row } from "react-bootstrap";
import Notebook from "../components/notebook";

export default function Home(): JSX.Element {
  const description =
    "Glassy is a framework for crystal that includes a HTTP bundle (web framework) " +
    "built on top of kemal, and uses dependency injection based on YAML file";

  return (
    <div>
      <Head>
        <title>Glassy Framework</title>
        <meta name="description" content={description} />
      </Head>
      <header className="page-header">
        <div className="navbar-container">
          <div className="navbar-wrapper content-wrapper">
            <img
              src="images/icon.svg"
              width="40"
              height="40"
              alt="Glassy Framework"
            />{" "}
            <h1 className="page-title">Glassy Framework</h1>
            <div className="navbar-options">
              <a href="https://github.com/glassy-framework/glassy">
                <img src="images/github.png" width="40" alt="Github" />
              </a>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <Notebook />
        </div>
      </header>
      <Container>
        <div className="quote">
          <span className="begin-quote">&quot;</span>
          {description}
          <span className="end-quote">&quot;</span>
        </div>
        <h3 className="features-title">Features</h3>
        <Row className="features-row">
          <Col className="feature">
            <img src="images/box.png" alt="Box" />
            <div className="description">Architeture based on bundles</div>
          </Col>
          <Col className="feature">
            <img src="images/yaml.png" height="100" alt="YAML" />
            <div className="description">
              Dependency injection specified by YAML file
            </div>
          </Col>
          <Col className="feature">
            <img src="images/kemal.png" height="100" alt="Kemal" />
            <div className="description">HTTP Bundle built on top of Kemal</div>
          </Col>
        </Row>

        <div className="btn-get-started-wrapper">
          <a
            className="btn btn-primary btn-get-started"
            href="https://github.com/glassy-framework/glassy"
          >
            Get started
          </a>
        </div>
      </Container>
    </div>
  );
}
