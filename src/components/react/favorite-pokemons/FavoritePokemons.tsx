import type { FavoritePokemon } from '@interfaces/favoritesPokemon.interface';
import './favoritesPokemons.css';

const getPokemonsFromStorage = (): FavoritePokemon[] => {
  const pokemons = JSON.parse(localStorage.getItem('favoritesPokemon') ?? '[]');

  return pokemons;
};

export const FavoritePokemons = () => {
  const favoritePokemons = getPokemonsFromStorage();
  return (
    <div>
      <h2>Favorite Pokemons</h2>
      <div className="pokemons">
        {favoritePokemons.map(pokemon => (
          <article key={pokemon.name} className="pokemon">
            <a href={`/pokemons/${pokemon.name}`}>
              <img
                className="pokemon__image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                style={{ viewTransitionName: `${pokemon.name}-image` }}
              />
            </a>

            <h2 className="pokemon__name">{pokemon.name}</h2>
          </article>
        ))}
      </div>
    </div>
  );
};
