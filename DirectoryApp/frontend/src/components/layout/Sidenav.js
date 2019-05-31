import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTags, getFilter, getFeeds, getBlogs,getPodcasts,getPopular } from '../../actions/feeds';
import { Link } from 'react-router-dom';

export class Sidenav extends Component {

    static propTypes = {
        tags: PropTypes.array.isRequired,
        getBlogs:PropTypes.func.isRequired,
        getPodcasts:PropTypes.func.isRequired,
        getFilter:PropTypes.func.isRequired,
        getFeeds:PropTypes.func.isRequired,
        getPopular:PropTypes.func.isRequired,
    }

    componentDidMount() {
        //this.props.getBlogs()
        // this.props.getFilter()
        this.props.getPopular()
    }

    onClick = e => {
        // e.preventDefault();
        // this.
        e.persist();
        // console.log(e.target.id);
        this.props.getFilter(e.target.id)
    }
    goToHome = () => {window.location.href = "/";}

  render() {
    return (
        
        <nav id="sidebar">
            <div className="sidebar-header">
            <h3><Link to="/">ITblogs.es</Link></h3>
                {/* <a href="#" onClick={this.goToHome}>ITblogs.es</a> */}
            </div>
            
    
            <ul className="list-unstyled components">
                <li className="justify-content-between align-items-center">
                        <a href="#" onClick={this.props.getBlogs}>
                            <span className="badge badge-secondary badge-pill">Blogs</span>
                        </a>
                </li>
                <li className="justify-content-between align-items-center">
                        <a href="#" onClick={this.props.getPodcasts}>
                            <span className="badge badge-secondary badge-pill">Podcasts</span>
                        </a>
                </li>
                <li className="justify-content-between align-items-center">
                    <Link to="/tags"><span className="badge badge-secondary badge-pill">All Tags</span></Link>
                </li>
                <li className="justify-content-between align-items-center">
                    <Link to="/submit"><span className="badge badge-secondary badge-pill">Submit</span></Link>
                </li>
                <p>Popular Tags</p>
                {this.props.popular_tags.map(tag => (
                    <li key={tag.tag_name} className="justify-content-between align-items-center">
                        <a href="#" id={tag.tag_name} onClick={this.onClick}>
                            {/* <span id={tag.tag_name} className="badge badge-secondary " style={{backgroundColor:tag.tag_color}}>{tag.tag_name}
                                <span id={tag.tag_name} className="badge badge-secondary badge-pill">{tag.count}</span>
                            </span> */}
                            <span id={tag.tag_name} className="badge badge-secondary badge-pill" style={{backgroundColor:tag.tag_color}}>
                            <div id={tag.tag_name} className="d-inline p-1 border-info">{tag.tag_name}</div> 
                            <div id={tag.tag_name} className="d-inline p-1 rounded-pill">{tag.count}</div>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
    
        </nav>
    )
  }
}

const mapStateToProps = state => ({
    tags: state.tags.tags,
    popular_tags: state.tags.popular_tags
});

export default connect(mapStateToProps, {getTags,getFilter,getFeeds,getBlogs,getPodcasts,getPopular})(Sidenav);
