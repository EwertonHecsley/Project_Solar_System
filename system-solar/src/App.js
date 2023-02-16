import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCards from './components/PlanetCard';
import nomePlaneta from './data/planets'


function App() {
  return (
    <div className="App">
      <Header />
      <SolarSystem planetName={nomePlaneta} planetImage={nomePlaneta} />
      <PlanetCards />
    </div>
  );
}

export default App;
