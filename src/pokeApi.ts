import axios from 'axios'

const baseApiUrl = import.meta.env.VITE_POKEAPI_URL

const pokedex = {
  get: (type: string) => axios.get(`${baseApiUrl}/pokedex/${type}`)
}
const pokemon = {
  one: (name: string | number) => axios.get(`${baseApiUrl}/pokemon/${name}`),
}
const pokemonSpecies = {
  one: (idOrName: string | number) => axios.get(`${baseApiUrl}/pokemon-species/${idOrName}`),
}
const evolutionChain = {
  one: (url: string) => axios.get(url),
}

export default {
  pokedex,
  pokemon,
  pokemonSpecies,
  evolutionChain,
}
