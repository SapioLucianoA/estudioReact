import { useEffect, useState } from "react";
import { NAVIGATION_EVENT} from "../const/const";
import { match } from "path-to-regexp";
import { Children } from "react";


export function Router({ children, routes = [], defaultComponent: DefaultComponent  }){

  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT.GO_TO_PAGE, onLocationChange);
    window.addEventListener(NAVIGATION_EVENT.POP_STATE, onLocationChange);
    return () => {
      window.removeEventListener(NAVIGATION_EVENT.GO_TO_PAGE, onLocationChange);
      window.removeEventListener(NAVIGATION_EVENT.POP_STATE, onLocationChange)
    };
  }, []);

  let routeParams = {};

  //añadimos las rutas que vienen del children del Router
  const routesDeChildren = Children.map(children, ( child )=>{
    const { type, props } = child;
    const { name } = child.type
    const isRoute = name === 'Route';

    return isRoute ? props : null   
  })

  const routesParaUsar = routes.concat(routesDeChildren)


  const Page = routesParaUsar.find(({ path }) => {
    
    if(path === currentPath){
      return true
    }

    //uso de path-to-regex para detectar rutas dinamicas
    //ej:
    ///search/:query <-- entendiendo que ":query" es una ruta dinamica

    const MatchURL = match(path, { decode: decodeURIComponent });

    const MatchedURL = MatchURL(currentPath);
    
    if(!MatchedURL){
      return false
    } 

      //guardado de los parametros de la url que eran parametros
      //y que hemos extraido de path-to-regex
      //ej de uso:
      // para search/:query y la web dice serach/javascript
      // entonces matchedURL.params.query == 'javascript'
      routeParams = MatchedURL.params 
      return true

  })?.Component;

  return Page ? <Page  routeParams={ routeParams } /> : <DefaultComponent  routeParams={ routeParams } />; 

}
