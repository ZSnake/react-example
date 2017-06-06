import React, { Component } from 'react';
import '../App.css';

class SongList extends Component {
  render() {
    return(
    <div className="container">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <ul className="results">
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 02</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 01</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 03</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 04</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 05</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 06</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 07</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 08</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 09</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 10</li>
          <li><img className="thumb" src="http://placekitten.com/64/64"></img> Result 11</li>
        </ul>
      </div>
    </div>)
  }
};

export default SongList;