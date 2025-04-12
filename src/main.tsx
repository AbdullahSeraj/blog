import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { DarkModeProvider } from './components/DarkModeContext.tsx'
import { LanguageProvider } from './components/LanguageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </DarkModeProvider>
    </Provider>
  </StrictMode>,
)
