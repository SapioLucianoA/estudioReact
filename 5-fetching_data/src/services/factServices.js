const RANDOM_CAT_FACTOR_API = 'https://catfact.ninja/fact';
const CAT_PRE_URL_IMAGE = 'https://cataas.com';


export  const randomfact = async ()=>{
  const response = await fetch(RANDOM_CAT_FACTOR_API);
  const data = await response.json();
  const { fact } = data;
  return fact;
}

export const imageAndThreeFirstWords = (threeFirstWords) =>{

  return fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {

        const { _id } = response
        const url = CAT_PRE_URL_IMAGE + `/cat/${_id}/says/${threeFirstWords}`;
        return url
      })


}