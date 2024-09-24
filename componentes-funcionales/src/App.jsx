
import './App.css'
import CajaCabecera from './componentes/CajaCabecera'
import CajaSub from './componentes/CajaSub'
import Cuerpo from './componentes/Cuerpo'


const  App = () => {
    return(
      <div className='App' >
      <CajaCabecera />
      <Cuerpo />
      <CajaSub />
      </div>
    )
}

export default App
