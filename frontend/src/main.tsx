import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QueryProvider from '@/app/providers/query-provider'
import { ThemeProvider } from '@/app/providers/theme-provider'
import AppRouter from '@/app/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </ThemeProvider>
  </StrictMode>,
)
