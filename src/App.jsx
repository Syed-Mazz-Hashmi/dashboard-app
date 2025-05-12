import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import Routers from './router/router';
function App() {

  return (
    <>
      <MantineProvider >
        <Routers />
      </MantineProvider >
    </>

  )
}

export default App
