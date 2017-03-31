import React, { Component } from 'react';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount(){
        this.props.fetchPosts()
    }

    renderPosts(){
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        })
    }

    render (){
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className='btn btn-success'>
                        Add new post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts.all
    }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex)
// can shorten {fetchPosts: fetchPosts} to just {fetchPosts} in es6 but leave as is for clarity as this point

