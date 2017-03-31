import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchSinglePost(this.props.params.id)
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            })
        }

    render() {
        if (!this.props.singlePost) {
            return <div className="">Loading...</div>
        }

        return (
            <div className="">
                <h3>{this.props.singlePost.title}</h3>
                <p className="lead">Categories: {this.props.singlePost.categories}</p>
                <p>{this.props.singlePost.content}</p>
                <Link to="/" className="btn btn-info">Back</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        singlePost: state.posts.singlePost
    }
}


export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostsShow);