import React from 'react';
import { Grids,Page } from 'react-weui';

import fetchJsonp from 'fetch-jsonp';

export default class ComeSoonList extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    fetchJsonp('https://api.douban.com/v2/movie/coming_soon')
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
              <ComeSoon key = {p.id} {...p} />
            )
          })
        }
      </ul>
    )
  }
};

class ComeSoon extends React.Component{
  render(){
    return (
      <li>
        <img src={this.props.images.small} />
        <h3 className="item-title">{this.props.title}</h3>
      </li>
    )
  }
}
