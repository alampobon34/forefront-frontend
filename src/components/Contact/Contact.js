import React from 'react';

import './Contact.css';
function Contact() {
    return (
        <>      {/* ======= Contact Section ======= */}
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
                                        <p>info@example.com<br />contact@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i class="fa-solid fa-phone"></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="/" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>{/* End Contact Section */}</>
    )
}

export default Contact