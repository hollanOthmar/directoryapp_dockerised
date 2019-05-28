import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTags, getFilter, getFeeds, getBlogs,getPodcasts } from '../../actions/feeds';

export class Sidenav extends Component {

    static propTypes = {
        tags: PropTypes.array.isRequired,
        getBlogs:PropTypes.func.isRequired,
        getPodcasts:PropTypes.func.isRequired,
        getFilter:PropTypes.func.isRequired,
        getFeeds:PropTypes.func.isRequired,
    }

    componentDidMount() {
        //this.props.getBlogs()
        // this.props.getFilter()
        this.props.getTags()
    }

    onClick = e => {
        // e.preventDefault();
        // this.
        e.persist();
        // console.log(e.target.id);
        this.props.getFilter(e.target.id)
    }

  render() {
    return (
        
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>ITblogs.es</h3>
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
                <p>Popular Tags</p>
                {/* <li className="justify-content-between align-items-center">
                    <a href="#">
                        <span className="badge badge-secondary badge-pill">technology</span>
                    </a>
                </li>
                <li className="justify-content-between align-items-center">
                    <a href="#">
                        <span className="badge badge-secondary badge-pill">film</span>
                    </a>
                </li> */}
                <li className="justify-content-between align-items-center">
                    <a href="#" onClick={this.props.getFeeds}>
                        <span className="badge badge-secondary badge-pill">all</span>
                    </a>
                </li>
                {this.props.tags.map(tag => (
                    <li key={tag.pk} className="justify-content-between align-items-center">
                        <a href="#" id={tag.pk} onClick={this.onClick}>
                            <span id={tag.pk} className="badge badge-secondary badge-pill" style={{backgroundColor:tag.tag_color}}>{tag.pk}</span>
                        </a>
                    </li>
                ))}
            </ul>
    
        </nav>
    )
  }
}

const mapStateToProps = state => ({
    tags: state.tags.tags
});

export default connect(mapStateToProps, {getTags,getFilter,getFeeds,getBlogs,getPodcasts})(Sidenav);
