import { Container } from '@mui/material'
import { useState } from 'react'
import './App.css'
import LeftDrawer from './LeftDrawer'
import TopBar from './TopBar'

function App() {
  const [drawerState, toggleDrawer] = useState(false);
  return (
    <>
      <TopBar toggleDrawer={toggleDrawer} />
      <LeftDrawer
        open={drawerState}
        toggle={toggleDrawer}
      />
      <Container>

      </Container>
    </>
  )
}

export default App
