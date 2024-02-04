import { ThemeProvider } from 'react-jss'
import theme from './constants/theme'
import HomePage from './pages/HomePage'
// import 'react-calendar/dist/Calendar.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
