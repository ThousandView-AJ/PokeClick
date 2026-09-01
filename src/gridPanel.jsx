import { useState, useEffect } from 'react';

const MAX_POKEMON = 1010;

function getRandomIds(count, max) {
  const ids = new Set();
  while (ids.size < count) {
    ids.add(Math.floor(Math.random() * max) + 1);
  }
  return [...ids];
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

async function fetchPokemonData(count) {
  const ids = getRandomIds(count, MAX_POKEMON);
  const results = await Promise.all(
    ids.map((id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
    )
  );
  return results.map((data) => ({
    id: data.id,
    name: data.name,
    photo:
      data.sprites.other['official-artwork'].front_default ??
      data.sprites.front_default,
  }));
}

export default function GridPanel() {
  const [clickedIds, setClickedIds] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  async function loadNewGame() {
    const nineRandom = await fetchPokemonData(9);
    setCurrentList(nineRandom);
    setClickedIds([]);
  }

  useEffect(() => {
    // eslint-disable-next-line
    loadNewGame();
  }, []);
  function handleCardClick(id) {
    if (clickedIds.includes(id)) {
      setBestScore((prev) => Math.max(prev, clickedIds.length));
      setClickedIds([]);
      setCurrentList((prev) => shuffle(prev));
    } else {
      setClickedIds((prev) => [...prev, id]);
      setCurrentList((prev) => shuffle(prev));
    }
  }

  return (
    <div className="grid-panel">
      <h1>NineCLICK</h1>
      <p>
        Score: {clickedIds.length} | Best: {bestScore}
      </p>
      <button onClick={loadNewGame}>Reset</button>
      <div className="grid">
        {currentList.map((item) => (
          <div
            className="grid-item"
            key={item.id}
            onClick={() => handleCardClick(item.id)} // Fix #4: click handler wired up
          >
            <img src={item.photo} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
