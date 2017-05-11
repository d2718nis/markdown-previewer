import React, { Component } from 'react';
import marked from 'marked';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      rawText: ''
    };
  }

  handleOnChange(value) {
    this.setState({
      rawText: value
    });
  }

  render() {
    return (
      <div className="MarkdownPreviewer">
        <h1>Markdown Previewer</h1>
        <MarkdownInput rawText={this.state.rawText} onChange={(value) => this.handleOnChange(value)} />
        <MarkdownOutput rawText={marked(this.state.rawText)} />
      </div>
    );
  }
}

class MarkdownInput extends Component {
  render() {
    return (
      <div className="MarkdownInput">
        <h2>Input</h2>
        <textarea value={this.props.rawText} onChange={(event) => this.props.onChange(event.currentTarget.value)}></textarea>
      </div>
    );
  }
}

class MarkdownOutput extends Component {
  render() {
    return (
      <div className="MarkdownOutput">
        <h2>Output</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.rawText}}></div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
