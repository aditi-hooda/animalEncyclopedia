import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import AnimalBehavior from './Pages/AnimalBehavior';
import Diet from './Pages/Diet';
import Mating from './Pages/Mating';
import Lifestyle from './Pages/Lifestyle';
import FunFacts from './Pages/FunFacts';
import ColorPages from './Pages/ColorPages';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="AnimalBehavior" element={<AnimalBehavior />} />
          <Route path="/Diet" element={<Diet />} />
          <Route path="/Mating" element={<Mating />} />
          <Route path="/Lifestyle" element={<Lifestyle />} />
          <Route path="/FunFacts" element={<FunFacts />} />
          <Route path="/ColorPages" element={<ColorPages />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
