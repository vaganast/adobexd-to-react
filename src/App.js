import { ThemeProvider } from "styled-components"
import Navbar from "./components/Navbar"
import { GlobalStyles } from './components/styles/Global'
import Header from "./components/Header"
import Features from "./components/Features"

const theme = {
    color: {
        header: 'transparent',
        body: 'transparent',
        footer: '#000000',
        buttonPressed:'#c83f8f',
        buttonNormal:'#f693d4'

    }
}

function App () {
    return (
        <ThemeProvider theme={ theme }>
         <>
         <GlobalStyles />
           <Navbar />        
           <Header /> 
           <Features />          
         </>
        </ThemeProvider>
    )
}

export default App