import { BaseSyntheticEvent, FunctionComponent, useEffect, useRef, useState } from "react"

interface Download{
  show: boolean;
}

const Download: FunctionComponent<Download> = (props)=>{

    const _carousel = useRef<HTMLDivElement>(null)
    const _controls = useRef<HTMLDivElement>(null)
    const _sontrolRadio1 = useRef<HTMLInputElement>(null)
    const _sontrolRadio2 = useRef<HTMLInputElement>(null)
    const _sontrolRadio3 = useRef<HTMLInputElement>(null)
    const _sontrolRadio4 = useRef<HTMLInputElement>(null)
    const [numControl, setNumControl] = useState<number>(0)
    useEffect(()=>{
      for( let i of _carousel.current!.children){
        i.addEventListener("mouseenter", ()=>{
          i.children[0].children[0].className = "active"
        })
        i.addEventListener("mouseleave", ()=>{
          i.children[0].children[0].className = ""
        })
      }
      
    },[])
    function next(){
      if(numControl != -1980){
        setNumControl((num)=> num -= 660)
        _carousel.current!.style.marginLeft = `${numControl - 660}px`
        updateRadio(numControl - 660)
      }
    }
    function prev(){
      if(numControl != 0){
        setNumControl((num)=> num += 660)
        _carousel.current!.style.marginLeft = `${numControl + 660}px`
        updateRadio(numControl + 660)
      }
    }
    function updateRadio(num:number){
      switch (num) {
        case 0: _sontrolRadio1.current!.checked = true; break;
        case -660: _sontrolRadio2.current!.checked = true; break;
        case -1320: _sontrolRadio3.current!.checked = true; break;
        case -1980: _sontrolRadio4.current!.checked = true; break;
      
        default:
          break;
      }
    }
    function updateClickRadio(e:BaseSyntheticEvent){
      _carousel.current!.style.marginLeft = `${e.target.value}px`
      setNumControl(Number(e.target.value))
    }
    return (
      <div id="divDonload" className={props.show?"":"hidden"}>
        <img src="" alt="" />
        <section>
          <div id="conteinerCarousel" ref={_carousel}>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>
            <a href="" className="cardDownload">
              <div >
                <img src="./img/download-button.png" alt="" />
                <h2>jsasdasda</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, corrupti accusamus. Iusto ipsum delectus placeat</p>
              </div>
            </a>

          </div>
          <div id="controlers" ref={_controls}> 
            <input type="button" value="<" onClick={prev}/>
            <input type="radio" name="control" className="control" ref={_sontrolRadio1} onClick={updateClickRadio} value={0} defaultChecked/>
            <input type="radio" name="control" className="control" ref={_sontrolRadio2} onClick={updateClickRadio} value={-660}/>
            <input type="radio" name="control" className="control" ref={_sontrolRadio3} onClick={updateClickRadio} value={-1320}/>
            <input type="radio" name="control" className="control" ref={_sontrolRadio4} onClick={updateClickRadio} value={-1980}/>
            <input type="button" value=">" onClick={next}/>
          </div>
        </section>
      </div>
    )
  }
  
  export default Download
  