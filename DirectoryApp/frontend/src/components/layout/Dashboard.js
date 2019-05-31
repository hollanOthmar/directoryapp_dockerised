import React, { Fragment } from 'react';
import Feed from './Feed';
import Header from './Header';
import Particles from 'react-particles-js';

const pjs = {
  background: '#ff502f',
    position:'static',
    zIndex: -1,
    height: '400px'
};

export default function Dashboard() {
 
  return (
    <Fragment>
      <Header />
      {/* <div id="particles-js"></div> */}
      <Particles style={pjs} params={
        {
          "particles":{
              "number":{
                  "value":200
              },
              "color":{
                  "value":"#fff"
              },
              "shape":{
                  "type":"circle",
                  "stroke":{
                      "width":1,
                      "color":"#ccc"
                  }
              },
              "opacity":{
                  "value":0.5,
                  "random":true,
                  "anim":{
                      "enable":false,
                      "speed":1
                  }
              },
              "size":{
                  "value":5,
                  "random":true,
                  "anim":{
                      "enable":true,
                      "speed":30
                  }
              },
              "line_linked":{
                  "enable":true,
                  "distance":120,
                  "color":"#fff",
                  "width":1
              },
              "move":{
                  "enable":true,
                  "speed":2,
                  "direction":"none"
              }
          },
          "interactivity":{
              "events":{
                  "onhover":{
                      "enable":true,
                      "mode":"repulse"
                  },
                  "onclick":{
                      "enable":true,
                      "mode":"push"
                  }
              },
              "modes":{
                  "repulse":{
                      "distance":50,
                      "duration":0.4
                  }
              }
          }
      }
      } />
      <Feed />
    </Fragment>
  )
}

// import React, { Component, Fragment } from 'react'

// export class Dashboard extends Component {
//   componentDidMount() {
//     particlesJS.load('particles-js', "./particles.json", function() {
//       // 
//       });
//   }
  
//   render() {
//     return (
//       <Fragment>
//         <Header />
//         <div id="particles-js"></div>
//         <Feed />
//       </Fragment>
//     )
//   }
// }

// export default Dashboard


