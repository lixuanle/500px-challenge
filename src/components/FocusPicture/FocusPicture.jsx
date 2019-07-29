import React, { Component } from 'react';
import './FocusPicture.css';

class FocusPicture extends Component {
    render() {
        const { pictureData } = this.props;
        const {
            camera,
            created_at,
            height,
            highest_rating,
            image_url,
            name,
            user,
            width
        } = pictureData;
        var utcDate = new Date(created_at).toUTCString();
        var aspect_ratio = width > height ? "focus-container landscape" : "focus-container portrait";
        const cameraAvailable = camera ? <p>{`Camera: ${camera}`}</p> : null
        return(
            <div className={aspect_ratio}>
                <img src={image_url[0]} alt={`${name}`}/>
                <div className="focus-details">
                    <p>{`Title: ${name}`}</p>
                    <p>{`Author: ${user['fullname']} (${user['username']})`}</p>
                    {cameraAvailable}
                    <p>{`Highest Rating: ${highest_rating}`}</p>
                    <p>{`Dimensions: ${width}x${height}`}</p>
                    <p>Full Picture Available: <a target="_blank" rel="noopener noreferrer" href={image_url[0]}>Here</a></p>
                    <p>{`Date Created: ${utcDate}`}</p>
                </div>
            </div>
        )
    }
}

export default FocusPicture;