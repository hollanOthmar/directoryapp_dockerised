import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSearch } from '../../actions/feeds';

export class Header extends Component {

  state = {
    name:""
  }

    static propTypes = {
      getSearch:PropTypes.func.isRequired,
  }

  onSubmit = e => {
    e.preventDefault();
    e.persist();
    this.props.getSearch(this.state.name)
    // console.log(this.state.name)
  }

  onChange = e => this.setState({[e.target.name]:e.target.value});

  render() {
    const {name} = this.state;
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
    
      <div className="collapse navbar-collapse" id="navbarColor03">
        <form onSubmit={this.onSubmit} type="submit" className="form-inline my-2 my-lg-0 w-100 mx-2">
          <input className="form-control w-100 noglow" type="text" placeholder="Search" name="name" onChange={this.onChange} value={name} />
          {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </div>
    </nav>
    )
  }
}

export default connect(null, {getSearch})(Header);
