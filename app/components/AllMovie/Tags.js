import React from 'react';

export default class Tags extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <ul className="tags-list clearfix">
        {
          this.props.tags.map((p,i) => {
            return (
              <li className={p == this.props.tag?'active':''} onClick={this.props.changeTag.bind(this,p)} key = {i}>
                {p}
              </li>
            )
          })
        }
      </ul>
    )
  }
}
