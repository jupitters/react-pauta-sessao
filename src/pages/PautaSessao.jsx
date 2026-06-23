import Cabecalho from '../components/pauta-sessao/Cabecalho'
import Corpo from '../components/pauta-sessao/Corpo'

const PautaSessao = () => {
  return (
    <div className="app">
            <Cabecalho />
            <main className="content">
                <Corpo />
            </main>
        </div>
  )
}

export default PautaSessao