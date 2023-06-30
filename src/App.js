import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Country from './components/Country/Country';

function App() {
  return (
    <>
      <nav>
        <h1>Where in the world?</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<Country />} />
        {/* <Route path="/continent/:name" element={<Countries />} /> */}
      </Routes>
    </>
  );
}

export default App;
