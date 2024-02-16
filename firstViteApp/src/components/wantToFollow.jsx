import { useState } from "react";
import "../Css/wanToFollow.css";


function WantToFollow({ userName, userAccount, imgLink, initialIsFollowing}){
  
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const followChange = () =>{
      setIsFollowing(!isFollowing)
    }

  const addAt = (userAccount) => `@${userAccount}`

  const text = isFollowing ? 'Siguiendo' : 'seguir';

  const buttonClassName = isFollowing ? 'button-Follow isfollowing' : 'button-Follow'
 
 
    return(
    <div className="div-wantToFollow">
        <img 
            className="avatar-img"
            alt={`imagen de ${userName}`} 
            src={imgLink} 
            />
        <div className="div-userAndBotonFollow">
            <div className="div-userNameAndAccount">
                <h3>{ userName }</h3>
                <span>{addAt(userAccount)}</span>
            </div>
            <button className={buttonClassName} onClick={followChange}>
                <p className="p-startFollow"> {text} </p>
                <p    className="p-stopFollow">Dejar de seguir</p>
                </button>
        </div>
    </div>
)}

export default WantToFollow;