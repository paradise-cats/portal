import './firebase'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="control-panel">
          <span>Painel de controle</span>
          <div className="control-panel--search-bar">
            <Image src="icons/search.svg" alt="" width={15} height={15} />
            <input className="search-bar--textbox" type="text" placeholder="Procurar gasto..." />
          </div>
          <div className="control-panel--filter">
            <button className="filter--button">
              <Image src="icons/filter_alt.svg" alt="" width={15} height={15} />
              Filter
            </button>
          </div>
        </section>
        <section className="cards">
          <article className="card">
            <div className="card--left-text">
              <div className="card--info">
                <p className="card--info__name">Saca de Ração</p>
                <span className="card--date">Sept 19 23</span>
              </div>
              <span className="card--text">gasto mensal com ração para gato co...</span>
            </div>
            <div className="card--right-text">
              <span className="card--price">R$ 100,00</span>
              <button className="card--button">
                <Image src="icons/edit.svg" alt="" width={15} height={15} />
                Editar
              </button>
            </div>
          </article>
        </section>
        <nav className="page-nav">
          <a href="#">
            <Image src="icons/keyboard_double_arrow_left.svg" alt="" width={15} height={15} />
          </a>
          <a className="page-nav--number" href="index.html">
            1
          </a>
          <a href="#">
            <Image src="icons/keyboard_double_arrow_right.svg" alt="" width={15} height={15} />
          </a>
        </nav>
      </main>
      <footer className="footer">
        <button className="footer--button">
          <Image src="icons/add.svg" alt="" width={15} height={15} />
          Adicionar Gastos
        </button>
      </footer>
    </>
  )
}
