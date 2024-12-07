import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom';
const theme = createTheme({
  fontFamily: 'ubuntu,open sans, sans-serif',
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
    </BrowserRouter>
  </StrictMode>
)
