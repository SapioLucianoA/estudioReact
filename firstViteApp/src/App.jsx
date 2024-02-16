import WantToFollow from "./components/wantToFollow"
import "./Css/app.css"

export  function App(){
    return(
        <div className="div-principal">
            <h2>A quién seguir:</h2>
            <WantToFollow
            userName={ "Donny Depaoli" }
            userAccount={ "DonnyDepaoli" }
            imgLink={"https://unavatar.io/twitter/kikobeats"}
            initialIsFollowing={true}
            />
            <WantToFollow
            userName={ "Yothe Razco" }
            userAccount={ "Razcador" }
            imgLink={"https://unavatar.io/telegram/drsdavidsoft"}
            initialIsFollowing={false}
            />
            <WantToFollow
            userName={ "Lucky Star" }
            userAccount={ "PokeFan" }
            imgLink={"https://cdnb.artstation.com/p/assets/images/images/014/265/563/large/stewart-cohl-image1.jpg?1543255089"}
            initialIsFollowing={true}
            
            />
        </div>

     ) ;
}