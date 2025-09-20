import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-0">
        <div 
          className="relative"
          onClick={() => onViewProducts(collection.id)}
        >
          <div className="aspect-[4/3] bg-muted overflow-hidden">
            {collection.image ? (
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Sin imagen</span>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Featured Badge */}
            {collection.featured && (
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                  Destacado
                </span>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-foreground font-bold text-xl line-clamp-1 group-hover:text-primary transition-colors">
                {collection.name}
              </h3>
            </div>
            
            {collection.description && (
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                {collection.description}
              </p>
            )}
            
            <Button 
              variant="outline" 
              className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-primary transition-all"
              onClick={(e) => {
                e.stopPropagation()
                onViewProducts(collection.id)
              }}
            >
              <span>Ver Productos</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}