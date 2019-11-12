
import React, { useState, useEffect } from "react"

import { get } from "../../services/pokemonService"
import Pokemon from "../Pokemon"
import { ButtonsPrevNext } from "../Button"

import "./style.css"
function PokemonsContainer({ pokemons }) {

    return (
        <div className="pokemons">
            {pokemons.map((p, i) => <Pokemon key={i} {...p} />)}
        </div>
    )
}

export default () => {
    var [loading, setLoading] = useState(false)
    var [prev, setPrev] = useState(null)
    var [next, setNext] = useState(null)
    var [pokemons, setPokemons] = useState([])
    var [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    var [error, setError] = useState(null)

    useEffect(() => {
        fetchData(url)
    }, [url])

    const fetchData = async (url) => {
        setLoading(true)
        setPokemons([])
        try {
            const { next, previous, results } = await get(url);
            setNext(next)
            setPrev(previous)
            var pokes = await Promise.all(results.map(async r => await fetchPokemon(r)))
            setPokemons(pokes)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    const fetchPokemon = async ({ name, url }) => {
        const details = await get(url)
        return {
            name,
            ability: details.abilities[0].ability.name,
            image: details.sprites.front_default
        }
    }

    return (
        <div>
            <ButtonsPrevNext click={(url) => setUrl(url)} prev={prev} next={next} loading={loading} />
            {loading ? (error === null ? <h1>Loading...</h1> : <h1>Error: Please, try more later or reload</h1>) : <PokemonsContainer pokemons={pokemons} />}
            <ButtonsPrevNext click={(url) => setUrl(url)} prev={prev} next={next} loading={loading} />
        </div>
    )
}