import React from 'react';


export default class LoadMore extends React.Component{
  constructor(){
    super();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentDidMount(){
    let wrapper = this.refs.wrapper;
    const winHeight = window.screen.height;
    let timeoutId;
    const isLoadingMore = this.props.isLoadingMore;
    const LoadMoreFn = this.props.LoadMoreFn;

    function callback(){
      let top =  wrapper.getBoundingClientRect().top;
      if(top && top< winHeight){
        LoadMoreFn();
      }
    }


    document.querySelector('.weui-tab__panel').addEventListener('scroll',function(){
      if(isLoadingMore){
        return;
      }
      if(timeoutId){
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(callback,200);
    });
  }

  render(){
    return(
      <div className="load-more" ref='wrapper'>
      {
        this.props.isLoadingMore ?
        <span>正在加载</span> : <span onClick={this.props.LoadMoreFn.bind(this)}>加载更多</span>
      }
      </div>
    )
  }
}
