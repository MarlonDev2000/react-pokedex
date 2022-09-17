import { useEffect, useState } from 'react'
import styles from './App.module.css'
import logoPoke from './images/pokeball.png'

import { api } from './Api'
import { PokemonGrid } from './components/PokemonGrid'

const App = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    loadPokemons()
  }, [])

  const loadPokemons = async () => {
    try {
      let json = await api.getAllPokemons()
      setPokemons(json)
    } catch (error) {
      setPokemons([])
    }
  } 

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        P
        <img src={logoPoke} alt="" />
        kédex
      </div>
      {pokemons.length > 0 &&
        <>
          <div className={styles.content}>
            {console.log(pokemons)}
            <div className={styles.contentGrid}>
              {pokemons.map((item, index)=>(
                <PokemonGrid data={item} key={index}/>
              ))}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App
