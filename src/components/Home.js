import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
import '../css/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      titles: []
    }
  }
  componentDidMount = () => {
    axios.request('http://www.omdbapi.com/?s=Harry_potter&apikey=5b365c1a').
      then(response => response.data.Search)
      .then((result) => {
        result.map((each) => {
          let image = {
            url: each.Poster
          }
          this.setState({ images: [...this.state.images, image], titles: [...this.state.titles, each.Title] });
        })
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    const selectedEvent = (id) => {
      const name = this.state.titles[id];
      const url = this.state.images[id].url;
      this.props.history.push({
        pathname: `/movies/:${name}`,
        state: { name, url }
      })
    };
    return (
      <div>
        <div className="mainContainer">
        <div><img src='./catchUp2.jpg' style={{ width:'400px' , height: '450px' , maxHeight:'100%'}} alt='catchUp' /></div>
        <div>
        {this.state.images.length > 9 ? (
           <SimpleImageSlider className="slider" width={600} height={450} style={{ maxHeight: '100%'}} images={this.state.images} showBullets={true} showNavs={true} onClick={(idx) => selectedEvent(idx)} />)
            : <div>Loading</div>
          }
        </div>
        <div><img src='./catchUp.jpg' alt='catchUp' style={{ width:'400px' , height: '450px' , maxHeight:'100%'}} /></div>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);
