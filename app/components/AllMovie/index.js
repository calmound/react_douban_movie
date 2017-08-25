import React from 'react';
import fetchJsonp from 'fetch-jsonp';

import LoadMore from '../LoadMore/index';
import List from './List';
import Tags from './Tags';

export default class AllMovie extends React.Component{
  constructor(){
    super();
    this.state = {
      data : [],
      tags:["经典","华语","欧美","韩国","日本","动作","喜剧","爱情","科幻","悬疑","恐怖","治愈"],
      tag:"经典",
      start : 0 ,
      limit : 20,
      hasMore:true,
      isLoadingMore : false
    }
  }

  componentDidMount(){
    fetchJsonp('https://api.douban.com/v2/movie/search?tag='+ this.state.tag + '&start='+ this.state.start)
    .then(response => response.json())
    .then(json => {
      this.setState({data:json.subjects,start:this.state.start+20});
    });
  }

  onLoadMoreFn(){
    this.setState({isLoadingMore : true});
    fetchJsonp('https://api.douban.com/v2/movie/search?tag='+ this.state.tag + '&start='+ this.state.start)
    .then(response => response.json())
    .then(json => {
      this.setState({data:this.state.data.concat(json.subjects)});
      if(json.count < 20){
        this.setState({hasMore:false});
      }else{
        this.setState({start:this.state.start + 20});
      }
    });
  }

  onChangeTag(name){
    if(name != this.state.tag){
      this.setState(
        {
          tag:name,
          data:[],
          start:0,
          hasMore:true,
        },function(){
          this.onLoadMoreFn();
        });
    }
  }

  render(){
    return (
      <div>
         <Tags changeTag={this.onChangeTag.bind(this)} tags = {this.state.tags} tag={this.state.tag} />
         <List data = {this.state.data} />
         {
           this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn = {this.onLoadMoreFn.bind(this)} /> : '没有更多数据了'
         }
      </div>
    )
  }
}
