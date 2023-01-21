import React from "react";
import Header from "./Header"
import Alert from "./Alert"
import Section from "./Section"
import Footer from "./Footer"
import './App.css'
function App() {
    return (<div>
            <Header/>
            <Alert/>
            <Section title="iPhone 12" styleName="first-hightlight-wrapper"/>
            <Section title="iPhone 12 Pro" styleName="second-hightlight-wrapper"/>
            <Section title="Mac or Ipad" styleName="third-hightlight-wrapper"/>
            <Footer/>
            </div> )
}
export default App