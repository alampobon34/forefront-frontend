import React from "react";
import Figure from "react-bootstrap/Figure";
import Accordion from "react-bootstrap/Accordion";
import missionVision from "./missionVision.jpg";
import "./MissionVision.css";
function MissionVision() {
  return (

    <div className="mission-vision mb-4">
      <div data-aos="zoom-in" data-aos-duration="2000">

        <div className="row">
          <div className="col-lg-5 col-md-6" >
            {" "}
            <Figure>
              <Figure.Image
                width={800}
                height={400}
                alt="171x180"
                src={missionVision}
              />
            </Figure>
          </div>

          <div className="col-lg-5 col-md-6 mission">
            <div className="container">
              <h3 className="mt-5 mission-title">
                Our <strong>Mission</strong> & <strong>Vision</strong>
              </h3>
              <p>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit.
              </p>

              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <strong className="accordion-header"># Mission</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <strong className="accordion-header"># Vision</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div> </div>

    </div>



  );
}

export default MissionVision;
