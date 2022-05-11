import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './app.module.css'

function App({}) {
  const [pokemon, setPokemon] = useState({})
  const [types, setTypes] = useState({})
  async function post(host, path, body, headers = {}) {
    const url = `https://${host}/${path}`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (res.ok) {
      return data
    } else {
      throw Error(data)
    }
  }
  async function get(host, path) {
    const url = `https://${host}/${path}`
    const options = {
      method: 'GET',
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (res.ok) {
      return data
    } else {
      throw Error(data)
    }
  }
  console.log(pokemon)
  // console.log(types)
  useEffect(() => {
    get('pokeapi.co/api/v2', 'pokemon-form/132').then(res => setPokemon(res))
    get('pokeapi.co/api/v2', 'type/1/').then(res => setTypes(res))
  }, [])
  return (
    <div className="App">
      <h1 className={styles.h1}>{pokemon.name}</h1>
      <h2>{types.name}</h2>
      {types.names?.map(
        name => name.name === '노말' && <h3 key={name.language}>{name.name}</h3>
      )}
    </div>
  )
}

export default App
