import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTags,getFilter } from '../../actions/feeds'

export class Tags extends Component {

    componentDidMount(){
        this.props.getTags()
    }

    onClick = e => {
        e.persist();
        // console.log(e.target.id);
        this.props.getFilter(e.target.id)
    }

    render() {
        return (
            <div className="d-flex align-content-center justify-content-center flex-wrap">
            {this.props.tags.map(tag => (
                <div key={`${tag.pk}${tag.pk}`} className="col-md-2 col-lg-2 p-2 d-flex justify-content-center rounded-lg shadow">
                    <a href="#" id={tag.pk} onClick={this.onClick}>
                        <span id={tag.pk} className="badge badge-secondary badge-pill" style={{backgroundColor:tag.tag_color}}>{tag.pk}</span>
                    </a>
                </div>
            ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tags: state.tags.tags
});

export default connect(mapStateToProps, {getTags,getFilter})(Tags);Tags
