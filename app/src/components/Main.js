import React from 'react';
import d3 from 'd3';
import Dispatcher from '../events/Dispatcher';

import TalkGrid from './TalkGrid';
import TalkPlayer from './TalkPlayer';
import TalkPane from './TalkPane';

import './Main.scss';
import ovcData from '../data/ovc2016_talks.json';

// for convenience while debugging, put d3 and the data in window
window.d3 = d3;
window.ovcData = ovcData;
console.log('ovcData =', ovcData);

const Main = React.createClass({
  render() {
    return (
      <div>
        <TalkPane data={ovcData[0]} />
        <TalkPlayer data={ovcData[0]} width={640} height={360} />
        <TalkGrid data={ovcData} />
      </div>
    );
  }
});

export default Main;
