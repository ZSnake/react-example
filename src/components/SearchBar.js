import React, { Component } from 'react';
import { fetchSongs } from '../redux/actions'
import store from '../store';

import '../App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: '',
      searchType: this.props.getSearchType(),
      searchResults: [],
      loading: false,
      emptySearchBox: false
    }
    store.subscribe(() => {
      this.setState({
        searchTerms: store.getState().searchTerms,
        loading: store.getState().loading,
        searchResults: store.getState().searchResults
      });
    });
    this.search = this.search.bind(this);
    this.searchBoxChange = this.searchBoxChange.bind(this);
  }

  search(event){
    event.preventDefault()
    if(this.state.searchInputValue !== ''){
      this.setState({emptySearchBox: false})
      store.dispatch(fetchSongs({q: this.state.searchInputValue, type: this.props.getSearchType()}));
    }else{
      this.setState({emptySearchBox: true})
    }
  }

  searchBoxChange(event){
    this.setState({searchInputValue: event.target.value});
  }

  searchButtonClasses(){
    return `search-icon ${this.state.loading ? 'disableClick' : ''}`
  }

  render() {
    return(
    <div className="container text-left">
      <form className="form-horizontal">
        <div className="form-group form-group-lg">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <input className="form-control" type="text" id="formGroupInputLarge" disabled={this.state.loading} onSubmit={this.search} placeholder="Search..." value={this.state.searchInputValue} onChange={this.searchBoxChange}></input>
            <a className="search-icon" disabled={this.state.loading} onClick={this.search}><i className="fa fa-search" aria-hidden="true"></i></a>
            {this.state.emptySearchBox && <p className="error">Please fill out the form.</p>}
          </div>
        </div>
      </form>
    </div>)
  }
}

export default SearchBar;