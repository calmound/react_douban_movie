import React from 'react';
import { Grids,Page } from 'react-weui';

import fetchJsonp from 'fetch-jsonp';
import LoadMore from '../LoadMore/index';

export default class Top250 extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[],
      isLoadingMore:false,
      hasMore:true,
      start:20
    }
  }
  componentDidMount(){
    fetchJsonp('https://api.douban.com/v2/movie/top250')
    .then(response=> response.json())
    .then(json => {
      this.setState({data:json.subjects});
    });
  }
  LoadMoreFn(){
    if(this.state.hasMore){
      this.setState({isLoadingMore:true});
      fetchJsonp('https://api.douban.com/v2/movie/top250?start='+this.state.start)
      .then(response=> response.json())
      .then(json => {
        if(json.count < 20){
          this.setState({hasMore:false});
        }else{
          this.setState({start:this.state.start+20});
        }
        this.setState({data:this.state.data.concat(json.subjects),isLoadingMore:false})
      });
    }
  }
  render(){
    return(
      <div className="top250-list-box">
        <ul className="list">
          {
            this.state.data.map(function(p,i){
              return (
                <Li key = {p.id} {...p} />
              )
            })
          }
        </ul>
        {
          this.state.hasMore ?
          <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.LoadMoreFn.bind(this)} /> : '没有更多数据了'
        }
      </div>
    )
  }
};

class Li extends React.Component{
  render(){
    return (
      <li className="clearfix">
        <img className="item-img" src={this.props.images.medium} />
        <div className="item-content">
          <h3 className="title">{this.props.title}</h3>
          <div className="rating"><span>评分:</span>{this.props.rating.average}</div>
          <div className="directors"><span>导演:</span>{this.props.directors[0].name}</div>
          <div className="genres"><span>类别:</span>{this.props.genres.join(',')}</div>
        </div>
      </li>
    )
  }
}
