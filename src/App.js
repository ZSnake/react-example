import React, { Component } from 'react';
import SongList from './components/SongList.js';
import SearchBar from './components/SearchBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'album'
    };
    this.setCurrentSearchType = this.setCurrentSearchType.bind(this);
    this.getSearchBy =this.getSearchBy.bind(this);
  };
  setCurrentSearchType(newSearchBy){
    this.setState({searchBy: newSearchBy})
  }
  getSearchBy(){
    return this.state.searchBy;
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="navbar-brand" ><i className="fa fa-rebel" aria-hidden="true"></i></div>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="dropdown active">
                    <a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{`Filter (${this.state.searchBy})`}<span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a onClick={() => this.setCurrentSearchType('album')}>Album</a></li>
                      <li><a  onClick={() => this.setCurrentSearchType('artist')}>Artist</a></li>
                      <li><a  onClick={() => this.setCurrentSearchType('playlist')}>Playlist</a></li>
                      <li><a onClick={() => this.setCurrentSearchType('track')}>Track</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="counter">Counter</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <SearchBar getSearchType={this.getSearchBy}></SearchBar>
        <SongList ></SongList>
      </div>
    );
  }
}

export default App;
