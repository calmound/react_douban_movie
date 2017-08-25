import React from 'react';
import Swiper from 'react-swipe';
import fetchJsonp from 'fetch-jsonp';

export default class HomeHot extends React.Component {
  constructor(){
    super();
    this.state = {data:null};
  }
  componentDidMount(){
    fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
    .then(response => response.json())
    .then(json => {
      this.setState({data:json});
    });
  }
  render(){
    if(this.state.data){
      let subjects = this.state.data.subjects;
      return (
        <Swiper className="carousel" swipeOptions={{continuous: true,auto:2000}}>
              <ul>
                <li className="item">
                  <img src={subjects[0].images.small} />
                  <h3 className="item-title">{subjects[0].title}</h3>
                </li>
                <li className="item">
                  <img src={subjects[1].images.small} />
                  <h3 className="item-title">{subjects[1].title}</h3>
                </li>
                <li className="item">
                  <img src={subjects[2].images.small} />
                  <h3 className="item-title">{subjects[2].title}</h3>
                </li>
              </ul>
              <ul>
                <li className="item">
                  <img src={subjects[3].images.small} />
                  <h3 className="item-title">{subjects[3].title}</h3>
                </li>
                <li className="item">
                  <img src={subjects[4].images.small} />
                  <h3 className="item-title">{subjects[4].title}</h3>
                </li>
                <li className="item">
                  <img src={subjects[5].images.small} />
                  <h3 className="item-title">{subjects[5].title}</h3>
                </li>
              </ul>
        </Swiper>
      )
    }else{
      return(
        <div></div>
      )
    }
  }
}
