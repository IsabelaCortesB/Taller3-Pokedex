import { useEffect, useState } from "react"
import { TypeChip } from "./TypeChip"

export const Card = ({pokeUrl, pos}) => {
  const [pokemon, setPokemon] = useState();
  const [isFocus, setIsfocus] = useState(false);
  const pokecard = document.querySelector('#pokecard');

  // useEffect(() => {
  //   console.log(pokecard?.getBoundingClientRect().x);
  //   if(pokecard?.getBoundingClientRect().x > window.innerHeight/2){
  //     setIsfocus(true)
  //   }
  // },[pokecard?.scrollTop])

  useEffect(() => {
    fetch(pokeUrl).then(res => res.json()).then(jsonRes => setPokemon(jsonRes))
  },[pokeUrl]);

  return(
    <button 
      id="pokecard"
      className={
        pokemon ? 
          `bg-[#EDF6EC] p-6 rounded-lg max-w-sm snap-center hover:bg-[#c5ccc4] transition focus:-translate-x-20 duration-500 text-start ${isFocus && 'text-red-600'}`
        : 
          "hidden"
      }
      onClick={() => console.log(pokecard?.getBoundingClientRect())}
    >
      <h2>
        {pokemon?.order < 10 && `Nº00${pokemon?.order}`}
        {pokemon?.order >= 10 && pokemon?.order < 100 && `Nº0${pokemon?.order}`}
        {pokemon?.order >= 100 && `Nº${pokemon?.order}`}
      </h2>
      <h1 className="font-extrabold text-3xl w-[335px] pb-2">{pokemon?.species?.name}</h1>
      <div className="flex gap-1">
        <TypeChip type={pokemon?.types[0]?.type.name} />
        {pokemon?.types[1] && <TypeChip type={pokemon?.types[1].type.name} />}
      </div>
    </button>
  )
}