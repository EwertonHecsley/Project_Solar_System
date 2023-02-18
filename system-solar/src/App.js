import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCards from './components/PlanetCard';
import nomePlaneta from './data/planets';
import Missoes from './components/Missoes';
import missions from './data/missions'


function App() {
  return (
    <div className="App">
      <Header />
      <SolarSystem planetName={nomePlaneta} planetImage={nomePlaneta} />
      <Missoes />
      <PlanetCards missions={missions} />
    </div>
  );
}

export default App;
