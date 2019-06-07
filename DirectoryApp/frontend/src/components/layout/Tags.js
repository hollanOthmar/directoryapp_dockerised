import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTags,getFilter } from '../../actions/feeds'

export class Tags extends Component {
    state = {
        filter:""
      }
    componentDidMount(){
        this.props.getTags()
    }

    onClick = e => {
        // e.preventDefault();
        e.persist();
        // console.log(e.target.id);
        this.props.getFilter(e.target.id)

    }

    handleChange = event => {
        this.setState({ filter: event.target.value });
      };

    render() {
        const {filter} = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = this.props.tags.filter(item => {
            return Object.keys(item).some(key =>
              item[key].toLowerCase().includes(lowercasedFilter)
            );
          });

        return (
            <div>
                <div className="bo lead d-flex align-items-center">All Tags #</div>
                <nav className="nav-float-middle navbar sticky-top navbar-expand-lg navbar-light bg-light rounded-pill w-50">
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <form onSubmit={this.onSubmit} type="submit" className="form-inline my-2 my-lg-0 w-100 mx-2">
                    <input className="form-control w-100 noglow" type="text" placeholder="Filter Tags..." name="name" onChange={this.handleChange} value={filter} />
                    {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>
                </nav>
                
            <div className="d-flex align-content-center justify-content-center flex-wrap">
            {filteredData.map(tag => (
                <div key={`${tag.pk}${tag.pk}`} className="col-md-2 col-lg-2 p-2 d-flex justify-content-center rounded-pill shadow">
                    <a href="#" id={tag.pk} onClick={this.onClick}>
                        <span id={tag.pk} className="badge badge-secondary badge-pill" style={{backgroundColor:tag.tag_color}}>{tag.pk}</span>
                    </a>
                </div>
            ))}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tags: state.tags.tags
});

export default connect(mapStateToProps, {getTags,getFilter})(Tags);Tags
