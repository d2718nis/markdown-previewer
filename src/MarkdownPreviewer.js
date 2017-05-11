import React, { Component } from 'react';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  render() {
    return (
      <div className="MarkdownPreviewer">
        <h1>Markdown Previewer</h1>
        <MarkdownInput />
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

export default MarkdownPreviewer;
