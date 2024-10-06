import { lazy, Suspense } from 'react';
import { Router } from './Javascript/Router';
import { routes } from './const/const';
import { ROUTES_URL } from './const/const';
import './App.css';
import Route from './components/Route';


const lazyHomePage = lazy(() => import('./components/Home'))
const lazyAboutMePage = lazy(() => import('./components/About-Me'))
const lazyDefaultComponent = lazy(() => import('./components/DefaultComponent'))


function App() {


  return (
    <>
      <main>
        <h1>Hello World</h1>
        <Suspense  fallback={ <div> <h1>LOADING......</h1> </div> } >
          <Router routes={routes} defaultComponent={lazyDefaultComponent}>
            <Route path={ROUTES_URL.HOME} Component={lazyHomePage} />
            <Route path={ROUTES_URL.ABOUT_ME} Component={lazyAboutMePage} />
          </Router>
        </Suspense>
      </main>
    </>
  );
}

export default App;
