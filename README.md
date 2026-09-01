# NineCLICK

A memory-click game built with React — click Pokémon cards in any order, but don't click the same one twice. Cards reshuffle after every click to keep you on your toes.

**Live demo:** https://nine-click.vercel.app/

## How it works

- 9 random Pokémon are fetched from [PokéAPI](https://pokeapi.co/) on load
- Click any card to score a point — the grid reshuffles
- Click a Pokémon you've already clicked this round, and it's game over
- Your best score is tracked until you refresh

## Tech stack

- React + Vite
- PokéAPI (Pokémon data + artwork)
- Deployed on Vercel

## Run locally

```bash
git clone https://github.com/ThousandView-AJ/nineClick.git
cd nineClick
npm install
npm run dev
```
