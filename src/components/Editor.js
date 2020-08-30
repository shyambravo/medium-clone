import React, { Component } from 'react';
import ReactQuill from 'react-quill';;

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = { text: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.setState({ text: value })
    }
    render() {
        return (
            <div className = "editor">
                 <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
            </div>
           
        )
    }
}
