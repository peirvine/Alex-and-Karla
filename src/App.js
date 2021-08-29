import './App.scss'
import proposalJ from './images/proposal.jpg'
import proposalW from './images/proposal.webp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <picture>
        <source srcset={proposalW} type="image/webp" />
        <source srcset={proposalJ} type="image/jpeg" /> 
        <img src={proposalJ} alt="Alt Text!" />
      </picture>
    </div>
  )
}

export default App
