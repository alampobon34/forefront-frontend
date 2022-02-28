import React, { useState } from "react";
import { createContact } from "../../api/api.js";
import axios from "axios";
import "./Contact.css";
function Contact() {
  const url = "http://127.0.0.1:8000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  // const history = useNavigate();

  const addContact = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);

    const contact = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    createContact(contact).then((res) => {
      if (res.data.status === 200) {
        alert(res.data.success);
        window.location.href = "/";
      } else {
        // alert(res.data.status);
        console.log(res.data.error);
        setError(res.data.error);
      }
    });
  };

  return (
    <>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact section-bg">
        <div className="container" data-aos="fade-up">
          <h3>CONTACT</h3>
          <hr className="hr" />
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>Our Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i class="fa-regular fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i class="fa-solid fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +1 5589 55488 55
                      <br />
                      +1 6678 254445 41
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                    />
                    <small id="emailHelp" class="form-text text-danger">
                      {error.name}
                    </small>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                    />
                    <small id="emailHelp" class="form-text text-danger">
                      {error.email}
                    </small>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                  />
                  <small id="emailHelp" class="form-text text-danger">
                    {error.subject}
                  </small>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <small id="emailHelp" class="form-text text-danger">
                    {error.message}
                  </small>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">asasdsad</div>
                </div>
                <div className="text-center">
                  <button type="submit" onClick={addContact}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}

export default Contact;
