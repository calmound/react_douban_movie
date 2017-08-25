import React from 'react';
import { BrowserRouter as Router,  Route,Link} from 'react-router-dom';

export default class List extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <ul className="movie-list clearfix">
       {
         this.props.data.map(function(p,i){
           return <Item {...p} key = {i} />
         })
       }
     </ul>
    )
  }
}

class Item extends React.Component{
  //{`detail/${this.props.id}`}
  render(){
    return (
      <li className="clearfix" id={this.props.id}>
        <Link to={`/detail/${this.props.id}`} >
          <img className="item-img" src={this.props.images.small} />
        <h3 className="title">{this.props.title}<span>{this.props.rating.average}</span></h3>
        </Link>
      </li>
    )
  }
}
