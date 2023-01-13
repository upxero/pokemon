import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon({ endpoint }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        console.log(endpoint);
        async function fetchData() {
            try {
                const { data } = await axios.get(endpoint);
                setPokemon(data);
            } catch(e) {
                console.error(e);
            }
        }

        fetchData();
    }, [endpoint]);


    return (
        <section>
            {pokemon &&
                <>
                    <h2>{pokemon.name}</h2>
                    <img
                        alt="Afbeelding pokémon"
                        src={pokemon.sprites.front_default}
                    />
                    <p><strong>Moves: </strong>{pokemon.moves.length}</p>
                    <p><strong>Weight: </strong>{pokemon.weight}</p>
                    <p><strong>Abilities: </strong></p>
                    <ul>
                        {pokemon.abilities.map((ability) => {
                            return (
                                <li key={`${ability.ability.name}-${pokemon.name}`}>
                                    {ability.ability.name}
                                </li>
                            )
                        })}
                    </ul>
                </>
            }
        </section>
    );
}

export default Pokemon;