import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Heart, Users, Award, Truck, Shield, Sparkles, Home, Target, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

export const AboutUI = () => {
  return (
    <EcommerceTemplate pageTitle="Sobre Nosotros" showCart={true}>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&h=800&fit=crop&crop=center)'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <Heart className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Nuestra Historia
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Desde 2015, transformamos hogares con productos de calidad, diseño excepcional y un servicio personalizado que hace la diferencia.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Creando hogares únicos desde 2015
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  CasaBella nació de una pasión simple pero poderosa: creemos que cada hogar merece ser un refugio hermoso y funcional. Lo que comenzó como una pequeña tienda familiar se ha convertido en la referencia de artículos para el hogar en nuestra región.
                </p>
                <p>
                  Nos especializamos en seleccionar cuidadosamente cada producto, trabajando directamente con artesanos locales y marcas reconocidas mundialmente para ofrecerte lo mejor en calidad, diseño y funcionalidad.
                </p>
                <p>
                  Hoy, después de casi una década, seguimos comprometidos con nuestra misión original: ayudarte a crear el hogar de tus sueños con productos excepcionales y un servicio personalizado.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center"
                alt="Nuestra tienda"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-sm opacity-90">Hogares transformados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Nuestra Misión</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transformar hogares en espacios únicos y acogedores, ofreciendo productos de calidad excepcional, diseño innovador y un servicio personalizado que supere las expectativas de nuestros clientes.
              </p>
            </Card>

            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Nuestra Visión</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser la marca líder en artículos para el hogar, reconocida por nuestra excelencia en calidad, innovación en diseño y compromiso con la satisfacción del cliente en cada rincón del país.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y nos mantienen comprometidos con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="h-8 w-8 text-primary mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Calidad Premium</h3>
              <p className="text-muted-foreground">
                Seleccionamos cada producto con los más altos estándares de calidad y durabilidad.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Servicio Personal</h3>
              <p className="text-muted-foreground">
                Cada cliente es único y merece una atención personalizada y especializada.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excelencia</h3>
              <p className="text-muted-foreground">
                Buscamos la perfección en cada detalle, desde la selección hasta la entrega.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Confianza</h3>
              <p className="text-muted-foreground">
                Construimos relaciones duraderas basadas en la transparencia y honestidad.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Home className="h-8 w-8 text-primary mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Pasión por el Hogar</h3>
              <p className="text-muted-foreground">
                Entendemos que el hogar es el lugar más importante de tu vida.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Truck className="h-8 w-8 text-primary mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compromiso</h3>
              <p className="text-muted-foreground">
                Cumplimos nuestras promesas y vamos más allá de las expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados dedicados a hacer realidad la casa de tus sueños
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="María González"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">María González</h3>
              <p className="text-primary font-medium mb-3">Fundadora & CEO</p>
              <p className="text-muted-foreground text-sm">
                Con más de 15 años de experiencia en diseño de interiores, María fundó CasaBella con la visión de democratizar el buen diseño.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                alt="Carlos Ruiz"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">Carlos Ruiz</h3>
              <p className="text-primary font-medium mb-3">Director de Producto</p>
              <p className="text-muted-foreground text-sm">
                Especialista en selección de productos y tendencias del hogar, Carlos asegura que cada artículo cumpla nuestros estándares de calidad.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                alt="Ana Martínez"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">Ana Martínez</h3>
              <p className="text-primary font-medium mb-3">Gerente de Experiencia</p>
              <p className="text-muted-foreground text-sm">
                Ana lidera nuestro equipo de atención al cliente, asegurando que cada interacción sea excepcional y personalizada.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para transformar tu hogar?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Descubre nuestra colección completa y encuentra todo lo que necesitas para crear el hogar perfecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/">Ver Productos</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}