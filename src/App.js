import React, { Component } from 'react';
import './App.css';
import lap1 from './images/lap.jpg';
import lap2 from './images/2.jpg';
import lap3 from './images/back.jpg';
import Image from './Image';
import Error from './Error';
import TimeStamp from './TimeStamp';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
      <Error><TimeStamp /></Error>
     <Error><Image lap={lap1} /> <br /></Error>
     <Error><Image lap={lap2} /> <br /></Error>
     <Error><Image lap={lap3} /> <br /></Error>
     <Error><Image lap="NoImage" /> <br /></Error>
     </div>
    )
  }
}
