import Header from './assets/models/Header'
import About from './assets/models/About'
import Supporters from './assets/models/Supporters'
import Download from './assets/models/Download'
import './assets/styles/App.css'
import './assets/styles/Header.css'
import './assets/styles/About.css'
import './assets/styles/Supporters.css'
import './assets/styles/Download.css'
import { useEffect, useRef, useState } from 'react'


function App() {
  const [scrolled, setScrolled] = useState<string>("about")
  const [showDownload, setShowDownload] = useState<boolean>(false)
  const [showSup, setShowSup] = useState<boolean>(false)
  const _page = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const handleScroll = () =>{
      let refe = _page.current?.children[1].getBoundingClientRect().bottom||0
      let refetopDow = _page.current?.children[2].getBoundingClientRect().top||0
      let refetopSup = _page.current?.children[3].getBoundingClientRect().top||0
      setScrolled("about")
      if(refe <= 0){
        setScrolled("download")
        refe = _page.current?.children[2].getBoundingClientRect().bottom||0
        if(refe <= 0){
          setScrolled("sup")
        }
      }
      if(refetopDow <= 600){
        setShowDownload(true)
      }
      if(refetopSup <= 600){
        setShowSup(true)
      }
    };
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  return (
    <div id='divPage' ref={_page}>
      <Header handleHeader={scrolled}></Header>
      <About></About>
      <Download show={showDownload}></Download>
      <Supporters show={showSup}></Supporters>
    </div>
  )
}

export default App
