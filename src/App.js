import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Country from './components/Country/Country';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:countryName" element={<Country />} />
    </Routes>
  );
}

export default App;
