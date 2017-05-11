import React, { Component } from 'react';
import marked from 'marked';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      rawText: `This is an H1
=======

This is an H2
-----------

### This is an H3

![alt text](https://facebook.github.io/react/img/logo.svg "Logo Title Text 1")

Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

> This is a blockquote

Here goes HR delimiter:

--------

Unordered list:

  * red
  * green
  * blue

*[Google](https://google.com)*`
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
      <div className="MarkdownInput col-xs-12 col-sm-6">
        <h2>Input</h2>
        <textarea value={this.props.rawText} onChange={(event) => this.props.onChange(event.currentTarget.value)}></textarea>
      </div>
    );
  }
}

class MarkdownOutput extends Component {
  render() {
    return (
      <div className="MarkdownOutput col-xs-12 col-sm-6">
        <h2>Output</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.rawText}}></div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
