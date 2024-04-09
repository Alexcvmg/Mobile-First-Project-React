import "./AppBar.css";
import { FaBars } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";

 export default function AppBar(){
  return(
    <div className="header">
      <AncorasBar/>
      <SanduicheBar/>
    </div>
  )
}

function AncorasBar(){
  return(
    <nav className="navBar">
      <ul>
        <li><div className="flex items-center gap-3"><a href="#"><img src="https://egvelho-blog-template.netlify.app/icon.svg"/></a><a href="#">AppBoilerplate</a></div></li>
        <li className="listaOcultar"><a href="#">ACESSAR O BLOG</a></li>
        <li className="listaOcultar"><a href="#">REALIZAR CONTATO</a></li>
      </ul>
    </nav>
  )
}

function SanduicheBar(){
  return(
    <div className="SanduicheBar">
      <a><GrGithub size={24} color="#ff9966"/></a>
      <a><FaBars size={20} color="#ff9966"/></a>
    </div>
  )
}