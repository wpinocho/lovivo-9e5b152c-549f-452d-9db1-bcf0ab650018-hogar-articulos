import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Home, Mail, Phone, MapPin } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para tienda de artículos del hogar
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`bg-white border-b border-border/50 sticky top-0 z-40 backdrop-blur-sm ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">CasaBella</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Nosotros
              </Link>
              <Link 
                to="/blog" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative hover:bg-primary/10"
            >
              <ShoppingCart className="h-5 w-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="py-6 border-t border-border/50">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-primary text-primary-foreground ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-primary-foreground" />
              <span className="text-2xl font-bold">CasaBella</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Tu tienda de confianza para artículos del hogar. Calidad, diseño y funcionalidad 
              para crear espacios únicos y acogedores.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Nosotros
              </Link>
              <Link 
                to="/blog" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-foreground">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@casabella.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Home Street, Ciudad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              &copy; 2024 CasaBella. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Privacidad
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}