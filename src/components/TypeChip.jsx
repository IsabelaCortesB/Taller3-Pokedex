import { useEffect } from "react"
import { useState } from "react"
import { bugTypeIcon, darkTypeIcon, dragonTypeIcon, electricTypeIcon, fairyTypeIcon, fightTypeIcon, fireTypeIcon, flyingTypeIcon, ghostTypeIcon, grassTypeIcon, groundTypeIcon, iceTypeIcon, normalTypeIcon, poisonTypeIcon, psychicTypeIcon, rockTypeIcon, steelTypeIcon, waterTypeIcon } from "../assets/typeIcons"

export const TypeChip = ({type}) => {

  const [img, setImg] = useState()
  const [bg, setBg] = useState('91C12F')
  

  useEffect(()=>{
    switch(type?.toLowerCase()){
      case 'bug':
        setImg(bugTypeIcon) 
        setBg('91C12F')
        break;
      case 'dark':
        setImg(darkTypeIcon)
        setBg('5A5465')
        break;
      case 'dragon':
        setImg(dragonTypeIcon)
        setBg('0B6DC3')
        break;
      case 'electric':
        setImg(electricTypeIcon)
        setBg('F4D23C')
        break;
      case 'fairy':
        setImg(fairyTypeIcon)
        setBg('EC8FE6')
        break;
      case 'fighting':
        setImg(fightTypeIcon)
        setBg('CE416B')
        break;
      case 'fire':
        setImg(fireTypeIcon)
        setBg('FF9D55')
        break;
      case 'flying':
        setImg(flyingTypeIcon)
        setBg('89AAE3')
        break;
      case 'ghost':
        setImg(ghostTypeIcon)
        setBg('5269AD')
        break;
      case 'grass':
        setImg(grassTypeIcon)
        setBg('63BC5A')
        break;
      case 'ground':
        setImg(groundTypeIcon)
        setBg('D97845')
        break;
      case 'ice':
        setImg(iceTypeIcon)
        setBg('73CEC0')
        break;
      case 'normal':
        setImg(normalTypeIcon)
        setBg('919AA2')
        break;
      case 'poison':
        setImg(poisonTypeIcon)
        setBg('B567CE')
        break;
      case 'psychic':
        setImg(psychicTypeIcon)
        setBg('FA7179')
        break;
      case 'rock':
        setImg(rockTypeIcon)
        setBg('C5B78C')
        break;
      case 'steel':
        setImg(steelTypeIcon)
        setBg('5A8EA2')
        break;
      case 'water':
        setImg(waterTypeIcon)
        setBg('5090D6')
        break;
      default:
        setBg('000')
        break;
    }  
  },[type])
  
  return(
    <div className={`rounded-full px-2 py-1 font-medium flex items-center gap-2 `} style={{backgroundColor: `#${bg}`}}>
      <img src={img} alt="-" className="bg-white rounded-full p-1 w-7"/>
      {type}
    </div>
  )
}