import React, {Component} from 'react';
import DATA from '../data';
import '../style.css';

class BucketListIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    render() {
        return (
            <div>
                <h2>List:</h2>
                <BucketListIndex data={DATA}/>
                <BucketListForm/>
            </div>
        )
    }
}

export default BucketListIndex;
