import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import MenuAtividade from './components/common/MenuAtividade'
import PautaSessao from './pages/PautaSessao'

function App() {

  return (
    <>
      <Header />
      <MenuAtividade />
        <PautaSessao />
      <Footer />
    </>
  )
}

export default App
