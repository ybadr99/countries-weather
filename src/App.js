import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
      <nav>
        <h1>Where in the world?</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:name" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
