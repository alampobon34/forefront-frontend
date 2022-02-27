import React from 'react';
import CustomButton from '../CustomButton/CustomButton.js';
import "./Card.css";
import image1 from './image.png';
function Card() {
    return (
        <div>
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={image1} alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <CustomButton value="Read More" />
                </div>
            </div>
        </div>

    );
}

export default Card;