import React from 'react';
import { Grids,Page } from 'react-weui';

import fetchJsonp from 'fetch-jsonp';

export default class UsTop extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    fetchJsonp('https://api.douban.com/v2/movie/top250')
    .then(response=> response.json())
    .then(json => {
      this.setState({data:json.subjects});
    })
  }
  render(){
    return(
      <ul>
        {
          this.state.data.map(function(p,i){
            if(i >= 6) return true;
            return (
              <Li key = {p.id} {...p} />
            )
          })
        }
      </ul>
    )
  }
};

class Li extends React.Component{
  render(){
    return (
      <li className="clearfix">
        <img src={this.props.images.medium} />
        <h3 className="item-title">{this.props.title}</h3>
      </li>
    )
  }
}
