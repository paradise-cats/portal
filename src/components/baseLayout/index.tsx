import { Header } from '../header'
import { Footer } from '../footer'

export const BaseLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
