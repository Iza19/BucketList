import React, { Component } from 'react';
import '../style.css';

class BucketListForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', bucket: '' };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleBucketChange = this.handleBucketChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    handleBucketChange(e) {
        this.setState({ bucket: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.email} added "${this.state.bucket}" to its bucket list`)
        //we will be tying this into the POST method in a bit
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                    type='email'
                    placeholder='Your email...'
                    value={ this.state.email }
                    onChange={ this.handleEmailChange } />
                <input
                    type='text'
                    placeholder='Say something...'
                    value={ this.state.bucket }
                    onChange={ this.handleBucketChange } />
                <input
                    type='submit'
                    value='Post' />
            </form>
        )
    }
}

export default BucketListForm;
