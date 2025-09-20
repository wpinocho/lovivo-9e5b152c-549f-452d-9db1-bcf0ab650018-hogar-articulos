import { ContactUI } from './ui/ContactUI'
import { useContactLogic } from '@/components/headless/HeadlessContact'

export const Contact = () => {
  const logic = useContactLogic()
  
  return <ContactUI logic={logic} />
}