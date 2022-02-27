import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import "./Aboutus.css";

function Aboutus() {
  return (


    <div className="container section mb-4">
      {/* <h4 className="tag-header">About</h4> */}
      <div data-aos="fade-up" data-aos-duration="2000">   <h3>ABOUT US</h3>
        <hr className="hr" />

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <p>
              We “Forefront Electronics Limited” could be a group, are constructed
              with the dream of being one of the pioneer specialized arrangement
              widget provider of the nation. Beginning our travel from 2020, we
              have accumulated best-valued assessment for our sincere work and
              sake from our client
            </p>
            <p>
              In a world ruled by worldwide economies, outsourced coordination,
              and Internet-based exchanges, it’s very clear that competition is
              now not constrained to personal companies competing against each
              other. The best-run organizations are those who have created
              world-class supply chains, amplifying from their customers’ clients
              to their suppliers’ providers, and all focus in between.
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <p>
              In a world ruled by worldwide economies, outsourced coordination,
              and Internet-based exchanges, it’s very clear that competition is
              now not constrained to personal companies competing against each
              other. The best-run organizations are those who have created
              world-class supply chains, amplifying from their customers’ clients
              to their suppliers’ providers, and all focus in between.
            </p>

            <Link to="/about">
              <CustomButton value="Learn More" />
            </Link>
          </div>
        </div> </div>

    </div>



  );
}

export default Aboutus;
