import "./App.css";
import PokemonApplication from "./components/PokemonApplication";
import { useState } from "react";

function App() {
  // implementing state to be able to show my PokemonApp component in the DOM onclick
  const [isVisible, setIsVisible] = useState(true);
  //  adding a small timer after user presses the btn for a nicer touch
  const [isLoading, setIsLoading] = useState(false);

  function setVisibility() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsVisible(false);
    }, 1000);
  }

  return (
    <>
      <div className="logoposition">
        <img src="/pokinfo.png" alt="Website Logo" className="h-28" />
      </div>
      {isVisible ? (
        <div className="flex flex-col justify-center items-center w-[100vw] h-[70vh]">
          <img
            className="animate-bounce w-14 h-14"
            src="/pokeball.png"
            alt="Pokemon Ball"
          />
          <div className="startbtncontainer">
            <button onClick={setVisibility}>
              {isLoading ? "Joruney starting..." : "Start Your Journey"}
            </button>
          </div>
        </div>
      ) : (
        <PokemonApplication />
      )}
    </>
  );
}

export default App;
