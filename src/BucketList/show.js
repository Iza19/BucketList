import React, {Component} from 'react';
import '../style.css';
import marked from 'marked';

class BucketList extends Component {
    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return {__html: rawMarkup};
    }

    render() {
        return (
            <div>
                <h3>{this.props.email}</h3>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        )
    }
}

export default BucketList;
