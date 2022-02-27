import React from "react";
import concern1 from "./client-10.png";
import concern2 from "./client-11.png";
import concern3 from "./client-12.png";
import Figure from "react-bootstrap/Figure";
import "./Concern.css";
function Concern() {
  return (


    <div className="container section mb-4">
      {/* <h4 className="tag-header">About</h4> */}

      <div data-aos="fade-up" data-aos-duration="2000">
        <h3>OUR CONCERN</h3>
        <hr className="hr" />

        <div className="row container mt-4 text-center border d-flex">
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/">
              <Figure>
                <Figure.Image
                  width={100}
                  height={90}
                  alt="171x180"
                  src={concern1}
                />
              </Figure>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/">
              <Figure>
                <Figure.Image
                  width={100}
                  height={90}
                  alt="171x180"
                  src={concern2}
                />
              </Figure>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <a href="/">
              <Figure>
                <Figure.Image
                  width={100}
                  height={90}
                  alt="171x180"
                  src={concern3}
                />
              </Figure>
            </a>
          </div>
        </div>
      </div>

    </div>



  );
}

export default Concern;
