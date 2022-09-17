import axios from 'axios'

export const api = {
  getAllPokemons: async () => {
    let endpoints = []
    for(let i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    let response = axios.all(endpoints.map(endpoint => {
      let res = axios.get(endpoint)
      return res
    }))
    
    return response
  },
  
}