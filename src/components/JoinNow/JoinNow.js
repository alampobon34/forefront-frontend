import React from 'react';
// import joinImage from './joinNow.jpg';
import CustomButton from '../CustomButton/CustomButton';
import './JoinNow.css';
function JoinNow() {
    return (
        <div class="jumbotron text-white jumbotron-image shadow mt-4" >

            <div data-aos="zoom-in" data-aos-duration="2000">
                <div class="text-center">
                    <h1 className="joinNow-title">Join With Us</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <CustomButton value="Join Now" className="joinNow" />
                </div>

            </div>

        </div >
    )
}


export default JoinNow;
