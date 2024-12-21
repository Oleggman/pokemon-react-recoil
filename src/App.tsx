import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { RecoilRoot } from 'recoil'
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('./Home'));
const PokemonFinder = lazy(() => import('./PokemonFinder'));
const PokemonInfo = lazy(() => import('./PokemonInfo'));

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/pokemons" element={<PokemonFinder />} />
          <Route path="/pokemons/:pokemonId" element={<PokemonInfo />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </RecoilRoot>
  )
}

export default App;
