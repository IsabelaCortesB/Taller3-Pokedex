import { Card } from "../components/Card"
import pokeball from "../assets/pokeball.png";
import { useEffect, useState } from "react";
import { Summary } from "../components/Summary";
import { TextField } from "@mui/material";

export const Pokedex = () => {
  
  const [pokes, setPokes] = useState();
  const [pokesBase, setPokesBase] = useState();
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [selectedPoke, setSelectedPoke] = useState();
  const [isSelected, setIsSelected] = useState(false);

  useEffect( () => {
    if(!pokes){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(res => res.json()).then(pk => setPokes(pk.results))
    }
  },[])

  useEffect(() => {
    setPokesBase(pokes);
  }, [pokes])

  const handleSearch = (e) => {
    let auxPkmn = [];
    console.log(parseInt(e.target.value));
    pokes.forEach(pkmn => {
      if(pkmn?.name?.toLowerCase().includes(e.target.value.toLowerCase())){
        auxPkmn.push(pkmn);
      }
    });
    setPokesBase(auxPkmn)
  }

  const fetchSelectedPokemon = (pkmn) => {
    fetch(pkmn.url).then(res => res.json()).then(res => setSelectedPoke(res))
  }

  return(
    <body className="flex flex-col bg-[#060606]">
      <header className="flex justify-between bg-[#181818] h-[10%] items-center">
        <img src={pokeball} alt="pokeball" className="pl-14" />
        <input
          className="border-0 bg-white rounded-full w-1/4 py-2 px-6"
          type="text"
          placeholder="🔎 Buscar Pokemon"
          onChange={handleSearch}
        />
        <img src="" alt="" />
      </header>
      <div className="flex h-[90%]">
        <main className="w-[60%] flex justify-center items-center">
          <Summary poke={selectedPoke} />
        </main>
        <aside className="h-full w-[40%] overflow-y-scroll flex flex-col gap-5 items-end pr-[5%] snap-y">
          {pokesBase && pokesBase.map((pkmn, i) => (
            <Card key={i} pokeUrl={pkmn.url} pos={scrollPositionY} onClick={() => fetchSelectedPokemon(pkmn)}/>
          ))}
        </aside>
      </div>
    </body>
  )
}