import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Card from '../Card/Card';
import Slider from "react-slick";


export default class News extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,


            responsive: [{
                breakpoint: 768,
                settings: {
                    className: "center",
                    centerMode: true,
                    dots: true,
                    arrow: true,
                    slidesToShow: 1,

                }
            }]
        };


        return (
            <div className="container section">

                <div data-aos="fade-up" data-aos-duration="2000">

                    <h3>NEWS & EVENTS</h3>
                    <hr className="hr" />
                    <Slider {...settings}>
                        <div className="col-lg-4 col-md-6">
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                    </Slider>

                </div>
            </div>
        );
    }
}