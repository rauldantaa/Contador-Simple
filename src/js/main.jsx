import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import '../styles/index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

let counter = 0;



setInterval(()=>{
  const one =Math.floor(counter % 10)
  const two =Math.floor((counter % 100)/10)
  const three =Math.floor((counter % 1000)/100)
  const four =Math.floor((counter % 10000)/1000)
  const five =Math.floor((counter % 100000)/10000)
  counter += 1;
  root.render(<Home one={one} two={two} three={three} four={four} five={five} />)
}, 1000);
