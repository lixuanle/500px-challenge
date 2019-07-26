import React, { Component } from 'react';
import { connect } from "react-redux";
import PictureBox from '../components/PictureBox';
import Header from '../components/Header';
import FocusPicture from '../components/FocusPicture';
import Pagination from '../components/Pagination';
import { getPictures } from '../redux/actions/picturesActions';
import './PopularPictures.css';

class PopularPictures extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightbox: false,
      index: 0,
      page: 1,
    }
  }

  componentDidMount() {
    this.props.fetchPictures(1);
  }

  fetchNewPage = (page, change=null) => {
    this.props.fetchPictures(page);
    if(change === 'increase') {
      this.setState({
        page: this.state.page+5
      })
    } if (change === 'decrease') {
        if(this.state.page === 1) { 
          return;
        } else {
          this.setState({
            page: this.state.page-5
          })
        }
    } else {
        return;
    }
  }

  lightBoxToggle = (index) => {
    this.setState({
      lightbox: !this.state.lightbox,
      index: index
    })
  }

  lightBoxOff = () => {
    if(this.state.lightbox) {
      this.setState({
        lightbox: false
      })
    }
  }

  render() {
    const { pictures } = this.props;
    const { lightbox, index, page } = this.state;
    const containerClass = !lightbox ? "pictures-container" : "pictures-container lightbox";
    const pictures_list = pictures.map((picture, index) => 
      <PictureBox key={picture.id} imageURL={picture.image_url} picID={picture.id} lightBoxToggle={this.lightBoxToggle} lightbox={lightbox} index={index}/>
    ) 
    const renderFocus = lightbox ? <FocusPicture className="focus" pictureData={pictures[index]}/> : null;
    return (
      <div className="app-container" onClick={this.lightBoxOff}>
        {renderFocus}
        <div className={containerClass}>
          <Header/>
          {pictures_list}
          <Pagination page={page} fetchPage={this.fetchNewPage}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPictures: (page) => dispatch(getPictures(page))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularPictures);
