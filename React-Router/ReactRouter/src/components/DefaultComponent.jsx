import { Link } from "./Links"

export default function DefaultComponent(){
  return(
    <div>
      <h1>ERROR 404 please go to HOME</h1>
      <Link to={'/'}>Go To Home</Link>

    </div>
  )
}