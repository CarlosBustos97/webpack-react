import React from 'react' // Importa depencencias instaladas en el proyecto de react y reactDom
import ReactDOM from 'react-dom'
import App from './components/App.jsx' //Importa el componente de la carpeta components
import './styles/global.scss'

//Se crea recurso para decirle hacia donde se va importa la aplicacion
//Se mostrara un archivo html
ReactDOM.render(<App />, document.getElementById('app'))