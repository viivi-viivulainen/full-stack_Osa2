import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import App from './App'

//ReactDOM.createRoot(document.getElementById('root')).render(<App />)

/*axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />)
}) */

ReactDOM.createRoot(document.getElementById('root')).render(<App />)