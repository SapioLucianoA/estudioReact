import { useEffect, useState } from "react";
import { imageAndThreeFirstWords } from "./factServices";


export function useCatImage( { fact } ){
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    if (!fact) return;

    const newImage =  async ()=>{
      const threeFirstWords = fact.split(' ', 3).join(' ');
      const newImage = await imageAndThreeFirstWords(threeFirstWords);
      setImageUrl(newImage)
    }
    newImage();
  }, [fact]);

  return { imageUrl }
}