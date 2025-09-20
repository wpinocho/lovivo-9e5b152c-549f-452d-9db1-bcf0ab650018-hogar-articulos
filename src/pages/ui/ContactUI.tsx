import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import type { UseContactLogicReturn } from '@/components/headless/HeadlessContact'

interface ContactUIProps {
  logic: UseContactLogicReturn
}

export const ContactUI = ({ logic }: ContactUIProps) => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = logic

  return (
    <EcommerceTemplate pageTitle="Contacto" showCart={true}>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Necesitas ayuda?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Send className="h-6 w-6 text-primary" />
                    Envíanos un mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Tu nombre"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="tu@email.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Teléfono
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Asunto *
                        </label>
                        <Input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="¿En qué podemos ayudarte?"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Cuéntanos más detalles sobre tu consulta..."
                        required
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Información de contacto
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Estamos disponibles para ayudarte con cualquier consulta sobre nuestros productos o servicios.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@casabella.com</p>
                      <p className="text-muted-foreground">ventas@casabella.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                      <p className="text-muted-foreground">123 Home Street</p>
                      <p className="text-muted-foreground">Ciudad, Estado 12345</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horarios</h3>
                      <p className="text-muted-foreground">Lun - Vie: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sáb: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Dom: Cerrado</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Encuentra respuestas rápidas a las consultas más comunes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">¿Cuál es el tiempo de entrega?</h3>
              <p className="text-muted-foreground">
                Entregamos en 2-5 días hábiles para pedidos dentro de la ciudad y 5-7 días para envíos nacionales.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">¿Tienen garantía los productos?</h3>
              <p className="text-muted-foreground">
                Sí, todos nuestros productos tienen garantía de 30 días y algunos hasta 1 año según el fabricante.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">¿Puedo devolver un producto?</h3>
              <p className="text-muted-foreground">
                Aceptamos devoluciones dentro de los primeros 30 días en perfecto estado y con embalaje original.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">¿Ofrecen instalación?</h3>
              <p className="text-muted-foreground">
                Sí, ofrecemos servicio de instalación para muebles y electrodomésticos grandes por un costo adicional.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}