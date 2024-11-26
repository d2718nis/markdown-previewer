import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MarkdownPreviewer from './MarkdownPreviewer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarkdownPreviewer />
  </StrictMode>,
)
