import React from 'react';
import join1 from './join1.jpg';
import join2 from './join2.jpg';
import join3 from './join3.jpg';
import join4 from './join4.jpg';
import join5 from './join5.jpg';
import join6 from './join6.jpg';
import join7 from './join7.jpg';
import join8 from './join8.jpg';
import join9 from './join9.jpg';
import join10 from './join10.jpg';
import './HallOfFame.css';

function HallOfFame() {
    return (
        <div className="mt-4 section container">
            <div data-aos="fade-up" data-aos-duration="2000">
                <h3>HALL OF FAME</h3>
                <hr className="hr" />
                <div class="row hall-of-fame-row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 column">
                        <img
                            src={join1}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />


                        <img
                            src={join9}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />

                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0 column">
                        <img
                            src={join4}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />


                        <img
                            src={join9}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0 column">
                        <img
                            src={join6}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />

                        <img
                            src={join7}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                        <img
                            src={join8}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                        <img
                            src={join8}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HallOfFame;


{/* <h3>FALL OF FAME</h3>
            <hr className="hr" />
            <div className="row hall-of-fame-row">
                <div className="column">
                    <img src={join1} alt=""></img>
                    <img src={join2} alt=""></img>
                    <img src={join3} alt=""></img>
                    <img src={join4} alt=""></img>
                    <img src={join9} alt=""></img>
                    <img src={join5} alt=""></img>

                </div>

                <div className="column">
                    <img src={join6} alt=""></img>
                    <img src={join7} alt=""></img>
                    <img src={join8} alt=""></img>
                    <img src={join9} alt=""></img>
                    <img src={join10} alt=""></img>
                    <img src={join3} alt=""></img>


                </div>

                <div className="column">
                    <img src={join4} alt=""></img>
                    <img src={join2} alt=""></img>
                    <img src={join7} alt=""></img>
                    <img src={join1} alt=""></img>
                    <img src={join9} alt=""></img>
                    <img src={join8} alt=""></img>


                </div>

            </div> */}