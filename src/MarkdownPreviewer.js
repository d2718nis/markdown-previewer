import React, { Component } from 'react';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  render() {
    return (
      <div className="MarkdownPreviewer">
        <h1>Markdown Previewer</h1>
        <MarkdownInput />
        <MarkdownOutput />
      </div>
    );
  }
}

class MarkdownInput extends Component {
  render() {
    return (
      <div className="MarkdownInput">
        <h2>Input</h2>
        <textarea></textarea>
      </div>
    );
  }
}

class MarkdownOutput extends Component {
  render() {
    return (
      <div className="MarkdownOutput">
        <h2>Output</h2>
        <textarea disabled></textarea>
      </div>
    );
  }
}

export default MarkdownPreviewer;
