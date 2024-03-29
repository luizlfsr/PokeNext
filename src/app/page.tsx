"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export async function fetchPokemon() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon: any) => {
        const detailsResponse = await axios.get(pokemon.url);
        const types = detailsResponse.data.types.map(
          (type: any) => type.type.name
        );
        return {
          name: pokemon.name,
          url: pokemon.url,
          types: types,
        };
      })
    );
    return pokemons;
  } catch (error) {
    console.log("Erro ao buscar pokemons", error);
    return [];
  }
}

export default function Home() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = await fetchPokemon();
      setPokemons(pokemonList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPokemonAttributes = async () => {
      const updatedPokemons = await Promise.all(
        pokemons.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          return {
            ...pokemon,
            attributes: response.data,
          };
        })
      );
      setPokemons(updatedPokemons);
    };

    fetchPokemonAttributes();
  }, [pokemons]);

  return (
    <div className="mx-10 bg-white/25 rounded-md p-3 shadow-zinc-950/20 shadow-xl space-y-3">
      <h1 className="text-zinc-50 text-2xl font-semibold text-center">PokeNext</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3">
        {pokemons.map((pokemon, index) => (
          <div
            key={index}
            className="bg-zinc-800/50 p-3 rounded-md text-zinc-50 min-h-full flex flex-col"
          >
            {pokemon.attributes && (
              <>
                <div className="bg-red-600 text-zinc-100 font-semibold min-w-full relative shadow-md shadow-red-800 rounded-full p-1 flex gap-5">
                  <p className="bg-green-600 rounded-xl shadow-inner shadow-green-800 px-6">
                    {pokemon.attributes.id}.
                  </p>
                  <p>{pokemon.name}</p>
                </div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                  width={300}
                  className="m-auto"
                />
                <p>Tipo: {pokemon.types.join(", ")}</p>
                <p>Peso: {(pokemon.attributes.weight * 0.1).toFixed(1)}kg</p>
                <p>Altura: {pokemon.attributes.height * 10}cm</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
