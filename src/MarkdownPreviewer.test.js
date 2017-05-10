import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownPreviewer from './MarkdownPreviewer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkdownPreviewer />, div);
});
