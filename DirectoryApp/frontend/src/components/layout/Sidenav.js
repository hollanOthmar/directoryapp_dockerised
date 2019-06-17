import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTags, getFilter, getFeeds, getBlogs,getPodcasts,getPopular } from '../../actions/feeds';
import { Link } from 'react-router-dom';


const primaryColor = {
    backgroundColor : "#004d61"
  };

  const secondaryColor = {
    backgroundColor : "#348498"
  };

  const navColor = {
      backgroundColor: "#5bd1d7"
  }


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
            {/* <h3><Link to="/"><i className="fas fa-home"></i> ITblogs.es</Link></h3> */}
            {/* <h3><Link to="/"><i className="fas fa-home"></i> ITblogs.es</Link></h3> */}
            <h3><a href="/"><i className="fas fa-home"></i> ITblogs.es</a></h3>
            </div>
            
    
            <ul className="list-unstyled components">
                <li className="justify-content-between align-items-center">
                        <a href="#" onClick={this.props.getBlogs}>
                            <span className="badge badge-secondary badge-pill py-1 text-dark" style={navColor}><i className="fas fa-blog"></i> Blogs</span>
                        </a>
                </li>
                <li className="justify-content-between align-items-center">
                        <a href="#" onClick={this.props.getPodcasts}>
                            <span className="badge badge-secondary badge-pill py-1 text-dark" style={navColor}><i className="fas fa-podcast"></i> Podcasts</span>
                        </a>
                </li>
                <li className="justify-content-between align-items-center">
                    <Link to="/tags"><span className="badge badge-secondary badge-pill py-1 text-dark" style={navColor}><i className="fas fa-hashtag"></i>   All Tags</span></Link>
                </li>
                <li className="justify-content-between align-items-center">
                    <Link to="/submit"><span className="badge badge-secondary badge-pill py-1 text-dark" style={navColor}><i className="fas fa-plus"></i> Submit</span></Link>
                </li>
                <p>Popular Tags</p>
                {this.props.popular_tags.map(tag => (
                    <li key={tag.tag_name} className="justify-content-between align-items-center">
                        <a href="#" id={tag.tag_name} onClick={this.onClick}>
                            {/* <span id={tag.tag_name} className="badge badge-secondary " style={{backgroundColor:tag.tag_color}}>{tag.tag_name}
                                <span id={tag.tag_name} className="badge badge-secondary badge-pill">{tag.count}</span>
                            </span> */}
                            
                            <span id={tag.tag_name} className="d-flex justify-content-between badge badge-secondary badge-pill py-1 w-75" style={{backgroundColor:tag.tag_color}}>
                            <span className="d-inline"><img className="tagIcon" src={tag.icon}/></span>
                            <div id={tag.tag_name} className="d-inline p-1 border-info badge-pill px-2" style={primaryColor} ><div className="d-inline pr-2">{tag.tag_name}</div>
                            <span id={tag.tag_name} className="d-inline badge py-0 px-2" style={secondaryColor}>{tag.count}</span>
                            </div> 
                            {/* <span id={tag.tag_name} className="d-inline badge" style={primaryColor}>{tag.count}</span> */}
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
