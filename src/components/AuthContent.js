import * as React from 'react';

import { request } from '../axios_helper';

export default class AuthContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data : []
        };
    }

    componentDidMount() {
        request(
            "GET",
            "/messages",
            {}
        ).then(response => {
            this.setState({data: response})
        });   
    }

    render() {
        return (
            <div>
                {this.state.data && this.state.data.map((message, index) => {
                    return <div key={index}>{message.text}</div>
                }
                )}
            </div>
        )
    }
}