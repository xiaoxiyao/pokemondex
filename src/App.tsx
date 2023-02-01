import { Container } from '@mui/material'
import { useState } from 'react'
import './App.css'
import TopBar from './TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Container>

      </Container>
    </>
  )
}

export default App
