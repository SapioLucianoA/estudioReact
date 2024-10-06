import { useState, useEffect } from "react";
import { randomfact } from "./factServices";

export function useCatFact (){
  const [fact, setFact] = useState();

  const refreshCatFact = async () => {
    const newFact = await randomfact();
    setFact(newFact);
  };

  useEffect(() => {
    refreshCatFact();
  }, []);

  return { fact, refreshCatFact };
};