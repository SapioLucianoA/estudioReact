import { Link } from "./Links"


export default function Home(){
  return (
    <>
    <div>
      <h2>Hello from Home </h2>
      <img src="https://cdn.verbub.com/images/eres-debil-sasuke-te-falta-poner-el-alma-en-el-ruedo-56213.jpg" alt="imagen meme ssasuke" style={{height:'150px',
        borderRadius: '1rem',
        margin: '1rem 0 1rem 0'
      }} />
      
      </div>
      <Link to={'/about'} >Mas sobre Nosotros</Link>
    </>
  )
}

