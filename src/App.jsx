import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import './App.css'
import Footer from './components/footer'
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Main />
     <div className="footer">
      <Footer/ >
     </div>
    </>
  )
}

export default App
