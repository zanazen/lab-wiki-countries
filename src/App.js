// src/App.js
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState(recipesData)
  return (
  <div className="App">
    <NavBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/sobre" element={ <About /> } />
        <Route path="/receitas" element={ <RecipeList recipes={ recipes } setRecipes={ setRecipes } /> } />
        <Route path="/receitas/:receitaId" element={ <RecipeDetails recipes={ recipes }  /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
  </div>;
  )
}
export default App;
