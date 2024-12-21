import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { RecoilRoot } from 'recoil'
import { SharedLayout } from './pages/SharedLayout';

const Home = lazy(() => import('./pages/Home'));
const PokemonFinder = lazy(() => import('./pages/PokemonFinder'));
const PokemonInfo = lazy(() => import('./pages/PokemonInfo'));

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
