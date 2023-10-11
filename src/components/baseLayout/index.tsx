import { Header } from '../header'
import { Footer } from '../footer'

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
