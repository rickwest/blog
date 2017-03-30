import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
    render(){
        const { fields: {title, categories, content}, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help text-danger">
                        {title.touched ? title.error : null}
                    </div>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help text-danger">
                        {categories.touched ? categories.error : null}
                    </div>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help text-danger">
                        {content.touched ? content.error : null}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate(values) {
    const error = {};

    if (!values.title) {
        error.title = 'Enter a title';
    }
    if (!values.categories) {
        error.categories = 'Enter a category';
    }
    if (!values.content) {
        error.content = 'Enter some content';
    }



    return error;
}

// connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content'], validate
}, null, { createPost })(PostsNew);

