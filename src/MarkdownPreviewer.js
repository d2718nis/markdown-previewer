import React, { Component } from 'react';
import marked from 'marked';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    marked.setOptions({
      sanitize: true,
      breaks: true
    });
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

  handleOnMouseEnter(target) {
    target.addEventListener('scroll',
      target.id === 'input-field' ? this.handleInputScroll : this.handleOutputScroll);
    target.removeEventListener('scroll',
      target.id === 'input-field' ? this.handleOutputScroll : this.handleInputScroll);
  }

  handleOnMouseLeave(target) {
    target.removeEventListener('scroll',
      target.id === 'input-field' ? this.handleInputScroll : this.handleOutputScroll);
  }

  handleInputScroll() {
    const input = document.getElementById('input-field');
    const output = document.getElementById('output-div');
    output.scrollTop = Math.floor(input.scrollTop * (output.clientHeight - output.scrollHeight) /
      (input.clientHeight - input.scrollHeight));
  }

  handleOutputScroll() {
    const input = document.getElementById('input-field');
    const output = document.getElementById('output-div');
    input.scrollTop = Math.floor(output.scrollTop * (input.clientHeight - input.scrollHeight) /
      (output.clientHeight - output.scrollHeight));
  }

  render() {
    return (
      <div className="MarkdownPreviewer">
        <h1>Markdown Previewer</h1>
        <MarkdownInput
          rawText={this.state.rawText}
          onChange={(value) => this.handleOnChange(value)}
          onMouseEnter={(target) => this.handleOnMouseEnter(target)}
          onMouseLeave={(target) => this.handleOnMouseLeave(target)}
        />
        <MarkdownOutput
          rawText={marked(this.state.rawText)}
          onMouseEnter={(target) => this.handleOnMouseEnter(target)}
          onMouseLeave={(target) => this.handleOnMouseLeave(target)}
        />
      </div>
    );
  }
}

class MarkdownInput extends Component {
  render() {
    return (
      <div className="MarkdownInput col-xs-12 col-sm-6">
        <h2>Input</h2>
        <textarea
          id="input-field"
          value={this.props.rawText}
          onChange={(event) => this.props.onChange(event.currentTarget.value)}
          onMouseEnter={(event) => this.props.onMouseEnter(event.currentTarget)}
          onMouseLeave={(event) => this.props.onMouseLeave(event.currentTarget)}
        ></textarea>
      </div>
    );
  }
}

class MarkdownOutput extends Component {
  render() {
    return (
      <div className="MarkdownOutput col-xs-12 col-sm-6">
        <h2>Output</h2>
        <div
          id="output-div"
          dangerouslySetInnerHTML={{__html: this.props.rawText}}
          onMouseEnter={(event) => this.props.onMouseEnter(event.currentTarget)}
          onMouseLeave={(event) => this.props.onMouseLeave(event.currentTarget)}
        ></div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
