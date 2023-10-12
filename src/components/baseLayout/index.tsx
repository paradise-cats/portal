import { Header } from '../header'
import { Footer } from '../footer'
import { Register } from '../register'

export const BaseLayout = ({
  children,
  setModalRoute,
}: {
  children: React.ReactNode,
  setModalRoute: Function,
}) => {
  return (
    <>
      <Header setModalRoute={setModalRoute}/>
      {children}
      <Footer setModalRoute={setModalRoute}  />
    </>
  )
}
