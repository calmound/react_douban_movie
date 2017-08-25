import React from 'react';
import fetchJsonp from 'fetch-jsonp';

export default class Detail extends React.Component{
  constructor(){
    super();
    this.state = {
      data:{
          title:'',
          rating:{
            average:''
          },
          year:'',
          casts:[],
          directors:[{
            name:''
          }],
          summary:''
      },
      casts:[]
    }
  }
  componentDidMount(){
    fetchJsonp('https://api.douban.com/v2/movie/subject/' + this.props.match.params.id)
    .then(response => response.json())
    .then(json => {
      this.setState({data:json});
      let casts = [];
      json.casts.map(function(p){
        casts.push(p.name)
      });
      this.setState({casts:casts});
    });
  }
  render(){
    return (
      <section className="section-detail">
        <h1 className="title">{this.state.data.title}</h1>
        <div className="row"><span>评分: </span>{this.state.data.rating.average}</div>
        <div className="row"><span>导演: </span>{this.state.data.directors[0].name}</div>
        <div className="row"><span>年份: </span>{this.state.data.year}</div>
        <div className="row director clearfix"><span>演员: </span>
          <div className="box">{this.state.casts.join(',')}</div>
        </div>
        <div className="row summary"><span>简介:</span>
          <div className="box">{this.state.data.summary}</div>
        </div>
      </section>
    )
  }
}
