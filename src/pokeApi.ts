import axios from 'axios'

const baseApiUrl = import.meta.env.VITE_POKEAPI_URL
// Sprites
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
// Pagination
// https://pokeapi.co/api/v2/pokemon?limit=25&offset=0

const pokemon = {
  All: () => axios.get(`${baseApiUrl}/pokemon?limit=25&offset=0`),
}

export default {
  pokemon,
}
