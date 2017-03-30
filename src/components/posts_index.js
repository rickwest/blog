import React, { Component } from 'react';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount(){
        this.props.fetchPosts()
    }

    render (){
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className='btn btn-success'>
                        Add new post
                    </Link>
                </div>
                List of Blog Posts
            </div>
        )
    }
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)
// can shorten {fetchPosts: fetchPosts} to just {fetchPosts} in es6 but leave as is for clarity as this point

