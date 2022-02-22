import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className=" row text-light">
          <div className="col-lg-4 col-md-6 bg-dark mt-5 mb-5 info text-center">
            <h4 className="mt-1">FOREFRONT</h4>
            <br />
            <p>Century Tower Kha-225(7th Floor)</p>
            <p>Merul Badda, Pragati Sarani </p>
            <p>Gulshan, Dhaka-1212</p>
            <br />
            <p>Merul Badda, Pragati Sarani </p>
            <p>Gulshan, Dhaka-1212</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mb-5 footer-link text-center">
            <h4> Useful Links</h4>
            <p>link</p>
            <p>link</p>
            <p>link</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mb-5 footer-newsletter">
            <h6>Our Newsletter</h6>
            <p>
              Subscribes for latest newsletter, achievements, news and events.
            </p>
            <br />
            <Form className="d-flex newsletter">
              <FormControl
                type="search"
                placeholder="Search"
                className="input"
                aria-label="Search"
              />
              <div>
                <Button className="newsletter-btn" variant="outline-success">
                  Search
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
