import { useEffect, useState } from "react"
import { getTypeItems } from "../utils/dynamicColors";
import { TypeChip } from "./TypeChip";

export const Summary = ({poke}) => {
  const [sprite, setSprite] = useState();
  const [bgColorPrimary, setBgColorPrimary] = useState();
  const [bgColorSecondary, setBgColorSecondary] = useState();
  const [typeIcon, setTypeIcon] = useState();


  useEffect(() => {
    if(poke){
      setSprite(poke.sprites.other["official-artwork"].front_default)
      let typeProps = getTypeItems(poke.types[0]?.type.name);
      console.log(poke?.types[1]);
      if(poke?.types[1]) {
        console.log('tipooo');
        let typePropsSecondary = getTypeItems(poke.types[1]?.type.name);
        setBgColorSecondary(typePropsSecondary.bg);
      }else{
        console.log('nope');
        setBgColorSecondary(`${typeProps.bg}44`)
      }
      setBgColorPrimary(typeProps.bg);
      setTypeIcon(typeProps.img);
    }
  }, [poke])
// background: linear-gradient(180deg, #46AB77 0%, rgba(70, 171, 119, 0.49) 100%);
//`#${bgColor}`
  return(
    <div 
      className={poke ? "w-[90%] h-[60%] rounded-3xl flex justify-center" : "hidden" }
      style={
        {background: `linear-gradient(160deg, #${bgColorPrimary} 40%, #${bgColorSecondary} 60%)`}
      }
    > 
      <div className="w-1/2 flex items-center">
        <img src={sprite} className=""/>
      </div>
      <div className="w-1/2 flex flex-col ">
        <p className="text-[8vw] font-extrabold text-[#ffffff5c] ">
          {poke?.order > 0 && poke?.order < 10 && `#00${poke?.order}`}
          {poke?.order >= 10 && poke?.order < 100 && `#0${poke?.order}`}
          {poke?.order >= 100 && `#${poke?.order}`}
        </p>
        <p className="text-white text-[2.3vw] font-bold max-w-full">{poke?.name}</p>
        <div className="flex flex-col gap-4 w-fit pt-10">
          <TypeChip type={poke?.types[0]?.type.name} />
          {poke?.types[1] && <TypeChip type={poke?.types[1]?.type.name} />}
        </div>
      </div>
    </div>
  )
}