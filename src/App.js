import { ThemeProvider } from "styled-components"
import Navbar from "./components/Navbar"
import { GlobalStyles } from './components/styles/Global'
import Header from "./components/Header"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Faq from "./components/Faq"
import Footer from "./components/Footer"

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
           <Pricing />   
           <Faq />     
           <Footer />
         </>
        </ThemeProvider>
    )
}

export default App