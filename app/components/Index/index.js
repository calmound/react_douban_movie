import React from 'react';
import { Tab, TabBarItem, Article } from 'react-weui';
import {Link} from 'react-router';
import stlye from './style.less';

import IconAll from '../../../img/icon_all.png';
import IconIndex from '../../../img/icon_index.png';
import IconRank from '../../../img/icon_rank.png';

import HomeHot from '../HomeHot/index';
import ComeSoon from '../ComeSoon/index';
import UsTop from '../UsTop/index';
import Top250 from '../Top250/index';
import AllMovie from '../AllMovie/index';

export default class Index extends React.Component {
  handleLeftSwipe(){

  }
  componenetDidMount (){
    React.initializeTouchEvents(true);
  }
  render() {
      return (
          <Tab type="tabbar">
              <TabBarItem icon={<img src={IconIndex}/>} label="首页">
                <h1 className="page-title">首页</h1>
                <section className="section-hot clearfix">
                    <h2 className="section-title">正在热映</h2>
                    <HomeHot />
                </section>
                <section className="section-comesoon clearfix">
                  <h2 className="section-title">即将上映</h2>
                  <ComeSoon />
                </section>
                <section className="section-ustop">
                  <h2 className="section-title">北美票房榜</h2>
                <UsTop />
                </section>
              </TabBarItem>
              <TabBarItem icon={<img src={IconAll}/>} label="全部电影">
                <h1>全部电影</h1>
                <section>
                    <section className="section-allmovie">
                        <AllMovie />
                    </section>
                </section>
              </TabBarItem>
              <TabBarItem icon={<img src={IconRank}/>} label="Top250">
                  <Article>
                      <h1>Top250</h1>
                      <section className="top-250">
                        <Top250 />
                      </section>
                  </Article>
              </TabBarItem>
          </Tab>
      );
    }
};
