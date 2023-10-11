import { Header } from '../header'
import { Footer } from '../footer'
import { Login } from '@/components/register/login'

export const BaseLayout = ({
  children,
  openModal
}: {
  children: React.ReactNode,
  openModal: Function
}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer openModal={openModal} />
    </>
  )
}
