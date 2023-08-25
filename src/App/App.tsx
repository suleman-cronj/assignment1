import React from "react";
import Card from "../Components/Cards/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Card
        title="Lizard"
        description="Lizards are a widespread group of squamate reptiles, with over 7,000 species, ranging across all continents except Antarctica, as well as most oceanic island chains."
        imageSrc="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-732x549-thumbnail.jpg"
      />
    </div>
  );
}

export default App;
