import { FunctionComponent, useEffect, useRef, useState } from "react"

 
interface Header{
  handleHeader: string;
}
const Header: FunctionComponent<Header> = (props)=>{
  const [scrolled, setScrolled] = useState<boolean>(false)
  const _nav = useRef<HTMLUListElement>(null)

  useEffect(()=>{
    _nav.current!.children[0].className = ""
    _nav.current!.children[1].className = ""
    _nav.current!.children[2].className = ""
    switch (props.handleHeader) {
      case "about":   _nav.current!.children[0].className = "active"; break;
      case "download":_nav.current!.children[1].className = "active"; break;
      case "sup":     _nav.current!.children[2].className = "active"; break;
      default:break;
    }
  },[props])

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollTop = window.pageYOffset;
      if(scrollTop > 0){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  function handleClick(){
    if(_nav.current!.parentElement!.className){
      _nav.current!.parentElement!.className = ""
      _nav.current!.parentElement!.parentElement!.parentElement!.className = ""
    } else {
      _nav.current!.parentElement!.className = "show"
      _nav.current!.parentElement!.parentElement!.parentElement!.className = "headerFocus"

    }
  }

  return (
    <header className={scrolled? "scrolled" : ""}>
      <div>
        <img src="https://cdn.iconscout.com/icon/free/png-256/swift-13-722653.png" alt="" />
        <nav>
          <ul ref={_nav}>
            <a href="#divAbout">
              <li>Quem Somos</li>
            </a>
            <a href="#divDonload">
              <li>Download</li>
            </a>
            <a href="#divSup">
              <li>Apoiadores</li>
            </a>
          </ul>
        </nav>
        <button onClick={handleClick}>
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
