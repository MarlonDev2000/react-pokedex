import { useEffect, useState } from 'react'
import styles from './App.module.css'
import logoPoke from './images/pokeball.png'
import pokeLoad from './images/loading.gif'

import { api } from './Api'
import { PokemonGrid } from './components/PokemonGrid'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    loadPokemons()
  }, [])

  const loadPokemons = async () => {
    try {
      setLoading(true)
      let json = await api.getAllPokemons()
      setPokemons(json)
      setLoading(false)
    } catch (error) {
      setPokemons([])
    }
  } 

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          P
          <img src={logoPoke} alt="" />
          kédex
        </div>
      </div>
      {loading &&
        <div className={styles.loading}>
          <h1>Buscando Pokémons</h1>
          <img src={pokeLoad} alt="" />
        </div>
      }
      {!loading && pokemons.length > 0 &&
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
