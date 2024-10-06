import { useEffect, useState } from "react";
import { randomfact } from "./services/factServices";
import { useCatImage } from "./services/useImageCat";
import { useCatFact } from "./services/UseFactRandom";

export function App() {
  const { fact, refreshCatFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleclick = async () => {
    refreshCatFact()
  };

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button type="button" onClick={handleclick} >New cat fatc and image</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`imagen de gatito con las 3 primerlas palabras del "fact" con letras en color rojo de ${fact}`} />}
    </main>
  );
};