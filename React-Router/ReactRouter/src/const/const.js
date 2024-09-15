

import SearchPage from '../components/Search';

export const NAVIGATION_EVENT = {GO_TO_PAGE: 'GoToPage', POP_STATE: 'popstate'};

export const ROUTES_URL ={
  HOME: '/',
  ABOUT_ME: '/about',
  SEARCH: '/search/:query'
}

export const routes =[

  {
    path: ROUTES_URL.SEARCH,
    Component: SearchPage
  }

]