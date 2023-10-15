import { Header } from '../header'
import { Footer } from '../footer'

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
