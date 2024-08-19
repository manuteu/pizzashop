import '@/global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
        <Helmet titleTemplate='%s | pizza.shop' />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
