import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { getTags, addBlog, addPodcast } from '../../actions/feeds';
import { join } from 'path';

const contentTypes = [
    { label: "BLOG", value: "TYPE_BLOG" },
    { label: "PODCAST", value: "TYPE_PODCAST" },
  ];

export class Submit extends Component {
    state = {
        title : "",
        description : "",
        url : "",
        author:"",
        author_contact:"",
        type:"",
        tags:null
    }

    userSelect = opt => {
        // console.log(opt.label, opt.value);
    }

    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    onSubmit = e => {
        e.preventDefault();

        // console.log(this.state);

        const {title,description,url,type,tags, author,author_contact} = this.state;
        const item = {
                        "title":title,
                        "url":url,
                        "description":description,
                        "author":author,
                        "author_contact":author_contact,
                        "tags":(!tags)? []:tags.map(opt => {return {pk:opt.value,tag_color:"#4da6ff"};})
                    }
                    // {return {pk:opt.value,tag_color:"#4da6ff"};}
        // console.log(item);

        if(type.value == "TYPE_BLOG"){
            this.props.addBlog(item);
        }
        if(type.value == "TYPE_PODCAST"){
            this.props.addPodcast(item);
        }
        this.setState({
            title : "",
            description : "",
            url : "",
            author:"",
            author_contact:"",
            type:"",
            tags:null
        })
        // window.location.href = "/";
    }

    handleChange = (e) => this.setState({ tags:e});
    handleType = (e) => this.setState({ type:e});


    componentDidMount(){
        this.props.getTags()
        // scaryAnimals = this.props.tags.map(opt => ({ label: opt.pk, value: opt.pk }))
    }
    render() {
        const {title, description, url,tags,type,author,author_contact} = this.state;
        return (
            <Fragment>
            <div className="bo lead d-flex align-items-center text-dark">Send us your Podcast or Blog</div>
            <div className="d-flex justify-content-center pt-3">
                <div className="card border-light rounded-lg shadow w-50">
                <div className="card-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input onChange={this.onChange} type="text" name="title" value={title} className="form-control form-control-sm" id="exampleFormControlInput1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea onChange={this.onChange} name="description" value={description} className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Link</label>
                        <input onChange={this.onChange} type="text" name="url" value={url} className="form-control form-control-sm" id="exampleFormControlInput1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Author</label>
                        <input onChange={this.onChange} type="text" name="author" value={author} className="form-control form-control-sm" id="exampleFormControlInput1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Author Page</label>
                        <input onChange={this.onChange} type="text" name="author_contact" value={author_contact} className="form-control form-control-sm" id="exampleFormControlInput1" />
                    </div>
                    <div className="form-group">
                        <label >Type</label>
                        <Select value={type} name="type" options={contentTypes} onChange={this.handleType} />
                    </div>
                    <div className="form-group">
                        <label >Tags</label>
                        <Select isMulti value={tags} name="tags" options={this.props.tags.map(opt => ({ label: opt.pk, value: opt.pk }))} onChange={this.handleChange} />
                    </div>
                    {/* <Select value={type} name="type" options={contentTypes} onChange={this.handleType} /> */}
                    {/* <Select isMulti value={tags} name="tags" options={this.props.tags.map(opt => ({ label: opt.pk, value: opt.pk }))} onChange={this.handleChange} /> */}
                    <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
                    
                </form>
                </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tags: state.tags.tags
});

export default connect(mapStateToProps, {getTags,addBlog,addPodcast})(Submit);
