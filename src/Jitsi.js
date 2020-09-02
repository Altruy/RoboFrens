// import React from 'react';
// import JitsiMeetComponent from './JitsiMeetComponent'

// class Jitsi extends React.Component{
//     render(){
//         return(
//         <body>
//             <div id="root"></div>
//             <JitsiMeetComponent/>
//             Hello there

//             <script src='https://meet.jit.si/external_api.js'></script>
//         </body>);
//     }
// };

// export default Jitsi

import React, { useState, Component } from 'react'
import Jitsi from 'react-jitsi'
 
const roomName = 'my-super'
const userFullName = 'Joseph Strawberry'
 
class Jitsim extends Component{

render(){
return(
  <>
    <h2>My First Meetinokay ayay</h2>
    {/* {window.alert("ok click to start")} */}
    {/* <Jitsi roomName={roomName} displayName={userFullName} password={'1234'} /> */}
  </>
)}}

export default Jitsim