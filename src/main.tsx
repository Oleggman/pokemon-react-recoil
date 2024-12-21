import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './GlobalStyle.ts'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/pokemon-react-recoil'>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </StrictMode>,
)
