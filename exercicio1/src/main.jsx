import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Recepcao from './components/bemVindo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Recepcao/>
  </StrictMode>,
)
