import { ThemeProvider } from "styled-components"
import Navbar from "./components/Navbar"
import { GlobalStyles } from './components/styles/Global'
import Header from "./components/Header"

const theme = {
    color: {
        header: 'transparent',
        body: 'transparent',
        footer: '#000000',
    }
}

function App () {
    return (
        <ThemeProvider theme={ theme }>
         <>
         <GlobalStyles />
           <Navbar />        
           <Header />           
         </>
        </ThemeProvider>
    )
}

export default App