import React, { Component } from 'react';
import store from '../store';
import '../App.css';

class SongList extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
    store.subscribe(() => {
      this.setState({
        searchResults: store.getState().searchResults
      });
    });
  }
  render() {
    return(
    <div className="container text-left">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        <ul className="results">
          {
            this.state.searchResults && this.state.searchResults.map((element, index) => {
                return (element.images && element.images[2]) ? <li key={index}><img className="thumb" src={element.images[2].url}></img>{` ${element.name}`}</li> :
               <li key={index}><img className="thumb" src={'http://placekitten.com/64/64'}></img>{` ${element.name}`}</li>
            })
          }
          {
            (!this.state.searchResults || this.state.searchResults.length === 0) && <div><h3>No results found...</h3></div>
          }
        </ul>
      </div>
    </div>)
  }
};

export default SongList;