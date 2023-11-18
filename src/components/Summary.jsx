import { useEffect, useState } from "react"
import { getTypeItems } from "../utils/dynamicColors";

export const Summary = ({poke}) => {
  const [sprite, setSprite] = useState();
  const [bgColor, setBgColor] = useState();
  const [typeIcon, setTypeIcon] = useState();


  useEffect(() => {
    if(poke){
      setSprite(poke.sprites.other["official-artwork"].front_default)
      let typeProps = getTypeItems(poke.types[0]?.type.name);
      setBgColor(typeProps.bg);
      setTypeIcon(typeProps.img);
    }
  }, [poke])
// background: linear-gradient(180deg, #46AB77 0%, rgba(70, 171, 119, 0.49) 100%);
//`#${bgColor}`
  return(
    <div className="w-[90%] h-[60%] rounded-3xl flex justify-center" style={{background: `linear-gradient(180deg, #${bgColor} 10%, #${bgColor}44 100%)`}}> 
      <div className="w-1/2 flex items-center">
        <img src={sprite} className=""/>
      </div>
      <div className="w-1/2">
        <p className="text-[8vw] font-extrabold text-[#ffffff5c] ">
          {poke?.order > 0 && poke?.order < 10 && `#00${poke?.order}`}
          {poke?.order >= 10 && poke?.order < 100 && `#0${poke?.order}`}
          {poke?.order >= 100 && `#${poke?.order}`}
        </p>
        <p className="text-white text-5xl font-bold italic">{poke?.name}</p>
      </div>
    </div>
  )
}