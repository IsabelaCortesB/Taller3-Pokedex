import { Card } from "../components/Card"
import pokeball from "../assets/pokeball.png";
import { useEffect, useState } from "react";

export const Pokedex = () => {
  
  const [pokes, setPokes] = useState();
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  useEffect( () => {
    if(!pokes){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(res => res.json()).then(pk => setPokes(pk.results))
    }
  },[])

  const handleScroll = (e) => {
    const position = e.target.scrollTop
    // setScrollPositionY(e.target.scrollTop)
    // console.log(position);
  }

  return(
    <body className="flex flex-col bg-[#060606]">
      <header className="flex justify-between bg-[#181818] h-[10%] items-center">
        <img src={pokeball} alt="pokeball" className="pl-14" />
        <input className="h-9"/>
        <img src="" alt="" />
      </header>
      <div className="flex h-[90%]">
        <main className="w-1/2">
        </main>
        <aside className="h-full w-1/2 overflow-y-scroll flex flex-col gap-5 items-end pr-10 snap-y" onScroll={handleScroll}>
          {pokes && pokes.map((pkmn, i) => (
            <Card key={i} pokeUrl={pkmn.url} pos={scrollPositionY}/>
          ))}
        </aside>
      </div>
    </body>
  )
}