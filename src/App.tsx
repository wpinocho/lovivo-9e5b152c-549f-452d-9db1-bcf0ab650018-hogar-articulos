import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import { SettingsProvider } from '@/contexts/SettingsContext'
import { CartProvider } from '@/contexts/CartContext'
import { CartUIProvider } from '@/components/CartProvider'

// Pages
import { Index } from '@/pages/Index'
import { Product } from '@/pages/Product'
import { Blog } from '@/pages/Blog'
import { BlogPost } from '@/pages/BlogPost'
import { Contact } from '@/pages/Contact'
import { About } from '@/pages/About'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <SettingsProvider>
          <CartProvider>
            <CartUIProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/product/:slug" element={<Product />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                </Routes>
                <Toaster />
              </Router>
            </CartUIProvider>
          </CartProvider>
        </SettingsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App