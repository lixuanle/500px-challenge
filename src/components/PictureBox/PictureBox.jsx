import React, { Component } from 'react';
import './PictureBox.css';

class PictureBox extends Component {
    
    render() {
        const { imageURL, picID, lightBoxToggle, index } = this.props;
        return(
            <div className="picture-box" onClick={() => lightBoxToggle(index)}>
                <img src={imageURL[0]} alt={`popular-${picID}`}/>
            </div>
        )
    }
}

export default PictureBox;