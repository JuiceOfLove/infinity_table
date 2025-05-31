import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import TablePage from './pages/TablePage/TablePage'
import Store from './app/store';

const store = new Store();
export const Context = createContext<{ store: Store }>({ store });

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{ store }}>
    <StrictMode>
      <TablePage />
    </StrictMode>
  </Context.Provider>,
)


