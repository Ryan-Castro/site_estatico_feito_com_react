import { FunctionComponent, useEffect, useRef } from "react"

interface Sup{
  show: boolean;
}
const Supporters: FunctionComponent<Sup> = (props)=> {

  const itens = {
    "nome1":{
        img:"./img/imgPerfil.jpg", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat magni laboriosam soluta doloribus, corrupti tenetur quo obcaecati culpa esse dolores minima, unde sit quos. Numquam, facilis? Cumque, iure. Nulla.",
        value: 0
      },
    "nome2":{
        img:"./img/imgPerfil.jpg", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat magni laboriosam soluta doloribus, corrupti tenetur quo obcaecati culpa esse dolores minima, unde sit quos. Numquam, facilis? Cumque, iure. Nulla.",
        value: 1
    },
    "nome3":{
        img:"./img/imgPerfil.jpg", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat magni laboriosam soluta doloribus, corrupti tenetur quo obcaecati culpa esse dolores minima, unde sit quos. Numquam, facilis? Cumque, iure. Nulla.",
        value: 2
    },
    "nome4":{
        img:"./img/imgPerfil.jpg", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat magni laboriosam soluta doloribus, corrupti tenetur quo obcaecati culpa esse dolores minima, unde sit quos. Numquam, facilis? Cumque, iure. Nulla.",
        value: 3
    }
  }

    
    
  const _section = useRef<HTMLDivElement>(null)
  const _comentsContainer = useRef<HTMLDivElement>(null)
  const objectKeys = (obj: {nome1:{"img":string, "text":string}}): (keyof {img:string, text:string})[] => {
    return Object.keys(obj) as (keyof {img:string, text:string})[]
  }
  

  useEffect(()=>{
    _section.current!.children[0].children[0].innerHTML = ""
    _section.current!.children[1].innerHTML = ""
    objectKeys(itens).forEach((keys)=>{
      _section.current!.children[0].children[0].innerHTML += `
        <div>
          <img src="https://www.luvgourmet.com.br/wp-content/uploads/2015/08/aspas-luv.png">
          <p>${itens[keys].text}</p>
        </div>
      `
      _section.current!.children[1].innerHTML += `
        <div id="${keys}">
          <img src="${itens[keys].img}">
          <h2>${keys}</h2>
        </div>
      `
    })
    for( let i of _section.current!.children[1].children){
      i.addEventListener("click", ()=>{
        for( let c of _section.current!.children[1].children){
          c.className = ""
          i.className = "active"
          _comentsContainer.current!.style.marginLeft = `-${itens[i.id].value * 700}px`
        }
      })
    }
    _section.current!.children[1].children[0].className = "active"
  },[])
  return (
    <div id="divSup" className={props.show?"":"hidden"}>
      <h1>Apoiadores</h1>
      <section ref={_section}>
        <div id="coments">
          <div id="comentsContainer" ref={_comentsContainer}></div>
        </div>
        <div id="images"></div>
      </section>
    </div>
  )
  }
  
  export default Supporters
  