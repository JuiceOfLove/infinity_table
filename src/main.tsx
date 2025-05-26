import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import TablePage from './pages/TablePage/TablePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TablePage />
  </StrictMode>,
)
