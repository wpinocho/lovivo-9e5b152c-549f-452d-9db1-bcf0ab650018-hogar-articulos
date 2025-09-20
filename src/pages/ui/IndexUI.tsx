import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Home, Sparkles, Truck, Shield } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz para tienda de artículos del hogar con diseño cálido y acogedor
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    blogs,
    loading,
    loadingCollections,
    loadingBlogs,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <Home className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Tu Hogar, Tu Estilo
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra colección de artículos para el hogar que combinan funcionalidad, 
              calidad y diseño para crear espacios únicos y acogedores.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Buscar productos para tu hogar..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-12 h-14 text-lg bg-white/90 backdrop-blur-sm border-2 border-primary/20 focus:border-primary/40"
              />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Envío Gratis</h3>
                <p className="text-muted-foreground">En compras superiores a $50</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Garantía Total</h3>
                <p className="text-muted-foreground">30 días de devolución</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Calidad Premium</h3>
                <p className="text-muted-foreground">Productos seleccionados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Explora por Categorías
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra exactamente lo que necesitas para cada espacio de tu hogar
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="animate-fade-in">
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Productos'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-lg text-muted-foreground">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description || ''
                  : 'Los mejores productos para tu hogar seleccionados especialmente para ti'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-fade-in product-card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-muted/50 rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {searchTerm 
                  ? 'No encontramos productos' 
                  : 'No hay productos disponibles'
                }
              </h3>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? 'Intenta con otros términos de búsqueda' 
                  : 'Pronto tendremos nuevos productos para ti'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mantente al día con las últimas tendencias
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas y consejos de decoración
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Tu email" 
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70 focus:border-white/40"
            />
            <Button 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};