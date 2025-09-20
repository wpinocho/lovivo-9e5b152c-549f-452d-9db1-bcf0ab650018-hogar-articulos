import { useState } from 'react'
import { toast } from 'sonner'

export interface UseContactLogicReturn {
  formData: {
    name: string
    email: string
    phone: string
    subject: string
    message: string
  }
  isSubmitting: boolean
  handleInputChange: (field: string, value: string) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
}

export const useContactLogic = (): UseContactLogicReturn => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Contact form submitted:', formData)
      toast.success('¡Mensaje enviado correctamente! Te contactaremos pronto.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting contact form:', error)
      toast.error('Error al enviar el mensaje. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit
  }
}