import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./App.scss";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";

import mainImage from "./assets/img/bitmap (2).png";
import rightImage from "./assets/img/group-4.png";
import bottomImage from "./assets/img/group-3.png";
import arrowImage from "./assets/img/oval-icon.png";
import decorationImage from "./assets/img/oval.png";

import { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function App() {
  const [data, setData] = useState([]);
  const [dataHelp, setDataHelp] = useState([]);

  useEffect(() => {
    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((res) => {
        setData(res.data);
      });
    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((res) => {
        setDataHelp(res.data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Container fluid className="main-Container">
        <Container>
          <h1 className="main-text">WEEKEND FROM HOME </h1>
          <p className="sub-main-text">Stay active with a little workout.</p>
          <img alt="astronout" src={mainImage} className="main-image" />
          <Button className="btn-lets-go">Let’s Go</Button>
          <img alt="astronout" src={rightImage} className="right-image" />

          <p className="text-note">
            <span className="deffinition">Deffinition;</span> a practice or
            exercise to test or improve one's fitness for athletic competition,
            ability, or performance to exhaust (something, such as a mine) by
            working to devise, arrange, or achieve by resolving difficulties.
            Merriam- Webster.com Dictionary.
          </p>
          <p className="weekend-team">-weekend team</p>
          <h1 className="testimony">Testimonial</h1>
          <Splide
            options={{
              rewind: true,
              perPage: 2,
              perMove: 1,
              gap: "2em",
              padding: 20,
              pagination: false,
              autoWidth: true,
            }}
            className="slider"
          >
            {data.map((item, index) => {
              return (
                <SplideSlide key={index}>
                  <Card className="card-slide">
                    <h1 className="name-slide">{item.by}</h1>
                    <p className="testimony-slide">{item.testimony}</p>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
          <img alt="oval" src={decorationImage} className="decoration-image" />
        </Container>
      </Container>
      <Container fluid className="second-Container">
        <Container>
          <p className="pov">POV</p>
          <p className="sub-text-pov">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.{" "}
          </p>
          <p className="resource">Resource</p>
          <p className="sub-text-resource">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>
          <p className="help">Help & Tips</p>
          <Row className="row-help">
            {dataHelp.map((item, index) => {
              return (
                <Col sm={4} key={index} className="col-help">
                  <img alt="" src={item.image} className="img-help" />
                  <div className="card-text-help">
                    <Row>
                      <Col xs={8}>
                        <p className="text-help">{item.title}</p>
                      </Col>
                      <Col xs={4}>
                        <img
                          alt="arrow"
                          src={arrowImage}
                          className="arrow-image"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              );
            })}
          </Row>
          <p className="all-set">You’re all set.</p>
          <p className="sub-text-all-set">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </Container>
        <div className="for-image">
          <img alt="astronout" src={bottomImage} className="bottom-image" />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
